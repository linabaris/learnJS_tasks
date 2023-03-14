//Какие значения показываются в процессе выполнения кода?

let animal = {
    jumps: null
};
let rabbit = {
__proto__: animal,
jumps: true
};

alert( rabbit.jumps ); // ? (1) true, тк переопределили свойство для rabbit(оттуда и берём)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2) null, тк удаление свойства у наследующего 
// объекта не удаляет это же свойство у прототипа

delete animal.jumps; 

alert( rabbit.jumps ); // ? (3) undefined cвойство больше не существует