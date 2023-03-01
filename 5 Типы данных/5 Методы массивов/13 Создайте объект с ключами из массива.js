//Создайте объект с ключами из массива
const groupById = (arr) => {
    return arr.reduce((obj, item) => {
     obj[item.id] = item;
     return obj;
    }, {})
 }
 let users1 = [
     {id: 'john', name: "John Smith", age: 20},
     {id: 'ann', name: "Ann Smith", age: 24},
     {id: 'pete', name: "Pete Peterson", age: 31},
 ];
 console.log(groupById(users1))