!function(){"use strict";
/*! (c) Andrea Giammarchi - ISC */const{apply:t,construct:e}=Reflect;Function.prototype.once||Object.defineProperty(Function.prototype,"once",{writable:!0,configurable:!0,value(){let n,o=this,c=!0;return function i(){return c&&(c=!1,n=this instanceof i?e(o,arguments):t(o,this,arguments)),n}}})}();
