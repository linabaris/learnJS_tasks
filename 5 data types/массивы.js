//Скопирован ли массив?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits? в fruits будет ["Яблоки", "Груша", "Апельсин", "Банан"] тк массивы хранятся 
//по ссылке те это один и тоже массив.

//Операции с массивами
let styles = ["Джаз", "Блюз"];
styles.push("rock-n-roll");
styles[Math.floor(styles.length/2)] = "Классика";
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);

//Вызов в контексте массива
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // будет выведен массив с а,б и телом функции. this в этом случае равно массиву(=объекту arr)

//Сумма введённых чисел
const sumInput = () => {
    let arr=[];
    while(true) {
        let num = prompt('enter your number',0);
        if(typeof num !== 'number') {
            return;
        }
        arr.push(+num);
        let sum=0;
        for(let i of arr) {
            sum +=i;
        }
        return sum;
    }
}

//Подмассив наибольшей суммы
const getMaxSubSum = (arr) => {
    let currentSum = 0;
    let maxSum = 0;

    for(let i of arr) {
        currentSum +=i;
        maxSum = Math.max(maxSum, currentSum);
        if(currentSum <0) currentSum = 0;
    }
    return maxSum;
}
console.log(getMaxSubSum([100, -9, 2, -3, 5]))