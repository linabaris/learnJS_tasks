//Оставить уникальные элементы массива
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
const unique = (arr) => {
    const res = [];
     for(let item of arr) {
        if(!res.includes(item)) {
            res.push(item);
        }
    }
    return res;
}