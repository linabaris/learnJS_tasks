//Вызов в контексте массива
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // будет выведен массив с а,б и телом функции. this в этом случае равно массиву(=объекту arr)