//Усечение строки
const truncate = (str, maxlength) => {
    if(str.length > maxlength) {
        return str.slice(0, maxlength-1)+'...'.repeat(1);
    }
    return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 15))
console.log(truncate('Hi'))