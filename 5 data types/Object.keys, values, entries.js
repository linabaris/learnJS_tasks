//Сумма свойств объекта
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (salaries) => {
    const values = Object.values(salaries);
    let sum = 0;
    for (let val of values) {
        sum +=val;
    }
    return sum;
}
console.log(sumSalaries(salaries));

//Подсчёт количества свойств объекта
let user = {
    name: 'John',
    age: 30
};
const count = (obj) => {
    return Object.keys(obj).length;
}
console.log(count(user))