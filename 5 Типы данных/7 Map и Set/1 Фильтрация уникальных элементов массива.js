//Фильтрация уникальных элементов массива
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
const unique = (arr) => {
    const uniqSet = new Set(arr);
    return [...uniqSet];
}
console.log(unique(values));