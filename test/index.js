if (Function.prototype.once)
  delete Function.prototype.once;

require('../cjs');

const log = console.log.once().bind(console);

log(1);
log(1);
