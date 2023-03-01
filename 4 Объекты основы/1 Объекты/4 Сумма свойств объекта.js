//Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = (obj) => {
    let sum = 0;
    for (let i in obj) {
        sum += obj[i]
    }
    return sum;
    
}
console.log(sum(salaries)) // 390