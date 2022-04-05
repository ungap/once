Function.prototype.once || Object.defineProperty(
  Function.prototype,
  'once',
  {
    writable: true,
    configurable: true,
    value() {
      let fn = this, execute = true, returned;
      return function once() {
        if (execute) {
          execute = false;
          returned = fn.apply(this, arguments);
        }
        return returned;
      };
    }
  }
);
