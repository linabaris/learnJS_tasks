//Фильтрация по диапазону
const filterRange = (arr, a, b) => {
    return arr.filter(item => {
        return item >=a && item <=b
    })
}
console.log(filterRange([5, 3, 8, 1], 1,4)) 