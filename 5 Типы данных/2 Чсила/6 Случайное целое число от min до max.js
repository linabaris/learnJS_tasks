//Случайное целое число от min до max
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(0,5))
