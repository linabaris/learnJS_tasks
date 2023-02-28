//Переведите текст вида border-left-width в borderLeftWidth
const camelize = (str) => {
    const splitStr =  str.split('');
    for(let i=0; i<str.length; i++) {
        if(splitStr[i] === '-') {
            splitStr.splice(i, 2, splitStr[i+1].toUpperCase());
        }
    }
    return splitStr.join('');
}
console.log(camelize("background-color")); //backgroundColor

//Фильтрация по диапазону
const filterRange = (arr, a, b) => {
    return arr.filter(item => {
        return item >=a && item <=b
    })
}
console.log(filterRange([5, 3, 8, 1], 1,4)) 

//Фильтрация по диапазону "на месте"
const filterRangeInPlace = (arr, a, b) => {
    for (let i=0; i<arr.length; i++) {
        if(arr[i] <a || arr[i] >b) {
            arr.splice(i,1)
        }
    }
}
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 5)
// console.log(arr)

//Сортировать в порядке по убыванию
let arr1 =  [5, 2, 1, -10, 8];
arr1.sort((a,b) => b-a)
console.log(arr1)

//Скопировать и отсортировать массив
let arr2 = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => {
    return [...arr].sort();
}
let sorted = copySorted(arr2);
console.log(sorted, arr2);

//Создать расширяемый калькулятор
function Calculator() {
    this.operations = {
        '+': (a, b) => a+b,
        '-': (a,b) => a-b,
    }

    this.calculate = function(str) {
        let splitStr = str.split(' ');
        a = +splitStr[0];
        operator = [1];
        b = +splitStr[2]; 
        if(a === 'NaN' || b === 'NaN') {
            return 'Something wrong!';
        }
        return this.operations[operator](a, b);
    }
    this.addMethod = function(name, func) {
        this.operations[name] = func;
    }    
}
let calc = new Calculator;


//Трансформировать в массив имён
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];

// let names = users.map(user => user.name);
// console.log(names);

//Трансформировать в объекты
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];
// let usersMapped = users.map(user => {
//     return {
//         fullNfme: `${user.name} ${user.surname}`,
//         id: user.id
//     }
// })
// console.log(usersMapped);

//Отсортировать пользователей по возрасту
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
const sortByAge = (users) => {
    return [...users].sort((a,b) => a.age - b.age);
}
console.log(sortByAge(arr));

//Перемешайте массив
const shuffle = (array) => {
    for(let i=0;i<array.length; i++) {
        let randomPos = Math.floor(Math.random()*(i+1));
        [array[i],array[randomPos]] = [array[randomPos], array[i]]
    }
}
let array = [1,2,3];
shuffle(array)
console.log(array)

//Получить средний возраст
const getAverageAge = (users) => {
    return (users.reduce((sum, current)=> sum + current.age, 0))/users.length;
}
console.log(getAverageAge(arr))

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