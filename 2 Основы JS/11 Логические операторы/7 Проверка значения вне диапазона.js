//Проверка значения вне диапазона
const notInRange = (age) => {
    //if((age < 14 || age > 90))
    if(!(age >=14 && age <=90)) {
        return true;
    }
    return false;
}