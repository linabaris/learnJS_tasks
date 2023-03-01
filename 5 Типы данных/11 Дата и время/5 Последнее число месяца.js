//Последнее число месяца?
const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month+1,0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2013, 1));