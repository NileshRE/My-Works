// Implement the following utility functions to determine the types of non-primitive values

function isArray(value) {
    return Array.isArray(value)
   }
   
function isFunction(value) {
     return typeof value==="function"
   }
   
function isObject(value) {
   return value!==null && value instanceof Object;   
   }
   
function isPlainObject(value) {
    if (value===null || typeof value!=="object"){
     return false;
    }
   const prototype = Object.getPrototypeOf(value);
     return prototype === null || prototype === Object.prototype;
   }
   
   
