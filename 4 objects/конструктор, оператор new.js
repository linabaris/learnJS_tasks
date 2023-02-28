//Две функции - один объект

let someObj = {};

function A  ()  { return someObj};
function B  ()  { return someObj};
let a = new A;
let b = new B;
console.log( a === b); //true

//Создайте калькулятор при помощи конструктора, new Calculator

function Calculator () {
    return {
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
    }
}
let calculator = new Calculator;
calculator.read(1,4)
console.log(calculator) // { read: [λ: read], sum: [λ: sum], mul: [λ: mul], a: 1, b: 4 }
console.log(calculator.sum()) // 5
console.log(calculator.mul()) //4

// Создайте new Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += prompt('', 0)
    };
}
