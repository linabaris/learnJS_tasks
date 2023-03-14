//Что выведет функция?
function f() {
    alert( this ); // выведет null
}

let user = {
    g: f.bind(null)
};

user.g();
