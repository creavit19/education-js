// Цепные функции

// Напишем функцию, которая будет искать в каждой строке массива
// числа и прибавлять к ним указанное значение параметра.
// Добавим её в свойство массива, а вернет она this - 
// то есть тот же массив, к которому её же можно будет применить снова.

const arr = ['fff23', 'gag333sg4545', 'rr34hb', '56'];

arr.addNum = function(num) {
  for (const key in this) {
    if(typeof this[key] === 'string') {
      this[key] = String.prototype.replace.call(this[key], /\d+/gi, n => num + Number(n));
    }
  }
  return this; 
}

// Применяем функцию к массиву: вначале добавляем к числам 4, потом 7, а потом 11.

arr.addNum(4).addNum(7).addNum(11);

console.log( arr.join(', ') );
// Результат:
// fff45, gag355sg4567, rr56hb, 78
