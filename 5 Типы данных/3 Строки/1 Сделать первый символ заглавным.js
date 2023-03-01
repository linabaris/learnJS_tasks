//Сделать первый символ заглавным
const ucFirst = (str) => {
    return str.split('')[0].toUpperCase()+str.slice(1);
    
}
console.log(ucFirst('pop'));