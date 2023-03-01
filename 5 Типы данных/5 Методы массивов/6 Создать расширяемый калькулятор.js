//Создать расширяемый калькулятор
function Calculator() {
    this.operations = {
        '+': (a, b) => a+b,
        '-': (a,b) => a-b,
    }

    this.calculate = function(str) {
        let splitStr = str.split(' ');
        a = +splitStr[0];
        operator = [1];
        b = +splitStr[2]; 
        if(a === 'NaN' || b === 'NaN') {
            return 'Something wrong!';
        }
        return this.operations[operator](a, b);
    }
    this.addMethod = function(name, func) {
        this.operations[name] = func;
    }    
}
let calc = new Calculator;
