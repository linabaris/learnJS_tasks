//Фильтрация с помощью функции
let arr = [1, 2, 3, 4, 5, 6, 7];
const inBetween = ( a, b) => {
    return (item) => {
        if(item >=a && item <=b) {
            return true;
        }
        return false;
    }
}

console.log(arr.filter(inBetween(3,6)));

const inArray = (arr) => {
    return (item) => {
        for(let val of arr) {
            if(val === item) {
                return true
            }
        }
        return false;
    }
}

console.log(arr.filter(inArray([1, 2, 10])));