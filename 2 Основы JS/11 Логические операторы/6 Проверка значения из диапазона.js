//Проверка значения из диапазона
const inRange = (age) => {
    if(age >=14 && age <=90) {
        return true;
    }
    return false;
}
console.log(inRange(90));