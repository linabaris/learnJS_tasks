//Сумма пользовательских чисел
// let a = +prompt('give me num', 0);
// let b = +prompt('give me another num', 0);
// alert(a+b);


//Почему 6.35.toFixed(1) == 6.3? 
// потеря точности из-за представления числа в двоично системе
console.log(Math.round(6.35*10)/10)

//Ввод числового значения

const readNumber = () => {

}

//Бесконечный цикл по ошибке
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// цикл не завершится опять же из-за потери точности, при суммировании десятичных дробей
// результат всегда будет чуть боле чем 0.4, 0.6 итд, т.е. i никогда не будет равно 10

// Случайное число от min до max
const random = (min, max) => {
    return Math.random()*(max-min)+min;
}
console.log(random(0,3));

//Случайное целое число от min до max

//Случайное целое число от min до max
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(0,5))
