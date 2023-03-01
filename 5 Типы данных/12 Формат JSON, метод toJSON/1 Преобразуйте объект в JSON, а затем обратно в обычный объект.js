//Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
    name: "Василий Иванович",
    age: 35
};
let newFormat = JSON.parse(JSON.stringify(user));
