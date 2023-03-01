//Отфильтруйте анаграммы
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = (arr) => {
    const sortedStr = arr.map(item => {
        return item.split('').sort().join('').toLowerCase();
    })
    return new Set(sortedStr);
}
console.log(aclean(arr))