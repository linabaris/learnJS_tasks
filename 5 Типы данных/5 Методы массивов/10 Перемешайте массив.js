//Перемешайте массив
const shuffle = (array) => {
    for(let i=0;i<array.length; i++) {
        let randomPos = Math.floor(Math.random()*(i+1));
        [array[i],array[randomPos]] = [array[randomPos], array[i]]
    }
}
let array = [1,2,3];
shuffle(array)
console.log(array)