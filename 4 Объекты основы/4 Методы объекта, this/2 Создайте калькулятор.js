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
