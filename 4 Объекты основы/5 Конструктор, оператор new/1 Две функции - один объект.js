//Две функции - один объект

let someObj = {};

function A  ()  { return someObj};
function B  ()  { return someObj};
let a = new A;
let b = new B;
console.log( a === b); //true
