# @ungap/once

A [Function.prototype.once](https://github.com/tc39/proposal-function-once#readme) polyfill.

```js
import '@ungap/once';
// require('@ungap/once');

const log = console.log.once().bind(console);

log(1); // logs 1
log(1); // does nothing
```
