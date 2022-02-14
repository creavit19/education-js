// Задача: Переписать функцию bind,
// не применяя функции call и apply.

// Решение:

function bind2(context, ...presetArgs){
    let obj = {};
    if(typeof context === 'object') obj = Object.create(context);
    obj.bind2func = this;
    return (...args) => obj.bind2func(...presetArgs, ...args);
  }


Function.prototype.bind2 = bind2;

// Работает в точности как встроеный bind    
