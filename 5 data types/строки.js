//Сделать первый символ заглавным
const ucFirst = (str) => {
    return str.split('')[0].toUpperCase()+str.slice(1);
    
}
console.log(ucFirst('pop'));

//Проверка на спам
const checkSpam = (str) => {
    return (str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra') ? true:false)
}
console.log(checkSpam('innocent rabbit'))
//Усечение строки
const truncate = (str, maxlength) => {
    if(str.length > maxlength) {
        return str.slice(0, maxlength-1)+'...'.repeat(1);
    }
    return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 15))
console.log(truncate('Hi'))

//Выделить число
const extractCurrencyValue = (str) => {
    return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));