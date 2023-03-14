let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};
//
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen); //3
console.log(bed.glasses) //1

//как быстрее получить значение glasses – через pockets.glasses 
// или через head.glasses?
// Мой ответ : быстрее получить через head.glasses, тк это свойство
// непосредственно определено в объекте head, при обращении к pockets
// поиск будет идти через все объекты: pockets → bed → table → head

// Learn js - С точки зрения производительности, для современных движков неважно, 
//откуда берётся свойство – из объекта или из прототипа. 