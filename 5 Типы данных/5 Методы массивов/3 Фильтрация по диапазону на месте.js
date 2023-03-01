//Фильтрация по диапазону "на месте"
const filterRangeInPlace = (arr, a, b) => {
    for (let i=0; i<arr.length; i++) {
        if(arr[i] <a || arr[i] >b) {
            arr.splice(i,1)
        }
    }
}
let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr3, 1, 5)
console.log(arr3)
