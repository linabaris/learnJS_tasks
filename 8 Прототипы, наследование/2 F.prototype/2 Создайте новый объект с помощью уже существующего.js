function Rabbit(name) {
    this.name = name;
}

let rabbit = new Rabbit('pip');
console.log(rabbit.name) // pip
let rabbit2 = new rabbit.constructor('bip');
console.log(rabbit2); // bip

Rabbit.prototype = {};

let rabbit3 = new Rabbit('tom');
let rabbit4 = new rabbit3.constructor('rob');
console.log(rabbit4.name) // undefined
console.log(rabbit4) // string 'rob'
//код сработал как new Object('tom') тк только там нашлось свой-во constructor
