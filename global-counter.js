// Глобальный счётчик
// Функция makeCounter возвращает функцию,
// которая при каждом последующем вызове
// возвращает число увеличенное на единицу,
// каждый созданный счётчик работает независимо.

function makeCounter() { 
    let currentCount = 1;
    return function() { 
        return currentCount++; 
    }; 
}; 

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log( counter1() );
console.log( counter1() );
console.log( counter1() ); 
console.log( counter2() );
console.log( counter2() );
console.log( counter2() );

// Данный код выдаёт:
// 1
// 2
// 3
// 1
// 2
// 3
// Так работает по тому, что каждая функция
// вызывается в своём лексическом окружении,
// которое создаётся для неё в makeCounter.
