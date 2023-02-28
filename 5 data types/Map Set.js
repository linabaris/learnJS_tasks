//Фильтрация уникальных элементов массива
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
const unique = (arr) => {
    const uniqSet = new Set(arr);
    return [...uniqSet];
}
console.log(unique(values));

//Отфильтруйте анаграммы
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = (arr) => {
    const sortedStr = arr.map(item => {
        return item.split('').sort().join('').toLowerCase();
    })
    return new Set(sortedStr);
}
console.log(aclean(arr))

//Перебираемые ключи
let map = new Map();

map.set("name", "John");

let keys = map.keys();
let arrKeys = Array.from(keys);
arrKeys.push('more');
console.log(arrKeys)
