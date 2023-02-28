//Привет, object
const user ={};
user.name = 'John';
user.surname = 'Smith';
console.log(user); // { name: 'John', surname: 'Smith'}
user.name = 'Pete';
delete user.name;
console.log(user); // {surname: 'Smith'}

// Проверка на пустоту
let schedule = {};
const isEmpty = (obj) => {
    for(let i in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(schedule)); //true

schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); //false

//Объекты-константы?

const user1 = {
    name: "John"
};
  
  // это будет работать?
user1.name = "Pete";// будет, тк объекты, объявленные с помощью const  хранятся по ссылке, те
// в переменной user1 хранится не сам объект, а ссылка на него. Менять значения свойств объекта можно.

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

//Умножаем все числовые свойства на 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    for (let i in obj) {
        if(typeof obj[i] === 'number') {
            obj[i] = obj[i]*2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu)//{ width: 400, height: 600, title: 'My menu' }