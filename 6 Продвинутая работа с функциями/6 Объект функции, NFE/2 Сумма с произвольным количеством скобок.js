//Сумма с произвольным количеством скобок
let sum = function func(a) {
    let currentSum = a;
    function f(b) {
        currentSum +=b;
        return f;
    }
    f.toString = function() {
        return currentSum;
    }
    return f;
}