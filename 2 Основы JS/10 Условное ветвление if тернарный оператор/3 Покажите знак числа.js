//Покажите знак числа
const getSign = (num) => {
    if(num===0) {
        return 0
    }
    if(num < 0) {
        return -1;
    }
    else {
        return 1;
    }
}
console.log(getSign(12));