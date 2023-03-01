// Случайное число от min до max
const random = (min, max) => {
    return Math.random()*(max-min)+min;
}
console.log(random(0,3));
