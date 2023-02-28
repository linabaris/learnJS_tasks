//Использование "this" в литерале объекта
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
  
let user = makeUser();
//результат ошибка тк this определяется только в момент вызова функции. 

// Создайте калькулятор
const calculator = {
    read(a,b) {
        this.a = a;
        this.b= b;
    },
    sum() {
        return this.a + this.b
    },
    
    mul()  {
        return this.a*this.b
    },
};

calculator.read(2,3);
console.log(calculator); // { read: [λ: read], sum: [λ: sum], mul: [λ: mul], a: 2, b: 3 }
console.log(calculator.sum()); //5
console.log(calculator.mul()); //6

//Цепь вызовов

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      console.log( this.step );
      return this;
    }
};

ladder.up().up().down().showStep().down().showStep() // 1,0