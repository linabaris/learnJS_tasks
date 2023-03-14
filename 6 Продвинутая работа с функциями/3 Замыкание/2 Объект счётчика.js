//Объект счётчика
//Будет ли он работать? Что покажет?
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
}

let counter = new Counter();

//будет работать, оба метода внутри одного лексического окружения, count один и тот же
console.log(counter.up()); // 1
console.log(counter.up()); //2
console.log(counter.down()); //1