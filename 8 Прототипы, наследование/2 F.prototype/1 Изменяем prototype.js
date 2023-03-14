function Rabbit() {};

Rabbit.prototype = {
    eats: true
};
let rabbit = new Rabbit();

alert( rabbit.eats ); // true

//1
Rabbit.prototype = {};
console.log(rabbit.eats); // true

//2 А если код такой (заменили одну строчку)? 
Rabbit.prototype.eats = false; // false

//3
delete rabbit.eats; // true

//4

delete Rabbit.prototype.eats; // undefined