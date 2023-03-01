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
