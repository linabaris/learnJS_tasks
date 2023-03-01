//Перебираемые ключи
let map = new Map();

map.set("name", "John");

let keys = map.keys();
let arrKeys = Array.from(keys);
arrKeys.push('more');
console.log(arrKeys)
