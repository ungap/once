if (Function.prototype.once)
  delete Function.prototype.once;

require('../cjs');

const executions = [];
const log = function (...args) {
  const value = Math.random();
  executions.push([this, value, args]);
  return value;
}.once();

const result = log.call(JSON, 1, 2);
log.call(JSON, 3);

console.assert(executions.length === 1, 'one execution only');
console.assert(executions[0][0] === JSON, 'correct context');
console.assert(executions[0][1] === result, 'expected result');
console.assert(log.call(JSON, 4) === result, 'expected result again');
console.assert(executions[0][2].join('-') === '1-2', 'expected args');


const rand = (() => Math.random()).once();
console.assert(rand() === rand(), 'same random value');

class ST {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
const st = ST.once();
console.assert((new st(1, 2)).a === 1);
console.assert((new st(1, 2)).b === 2);
console.assert(new st(1, 2) === new st, 'singleton');
console.assert(new st(3, 4) === new st, 'singleton');
