function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
}

let rabbit = new Rabbit('Roger');

rabbit.sayHi(); // на объекте rabbit выз-ся метод sayHi, присутств-ий в прототипе Rabbit, this=rabbit => Roger
Rabbit.prototype.sayHi(); // на прототипе Rabbit вызывае метод sayHi, он там есть, но нет name => undefined
Object.getPrototypeOf(rabbit).sayHi(); // получаем прототип объекта рэббит, на нем вызывыем свойство sayHi => undefined
rabbit.__proto__.sayHi(); // тоже что и третий вызов 