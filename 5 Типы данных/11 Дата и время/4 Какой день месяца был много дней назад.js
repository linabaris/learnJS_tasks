//Какой день месяца был много дней назад?
const getDateAgo = (date, days) => {
    let copyDate = new Date(date);

    copyDate.setDate(date.getDate() - days);
    return copyDate.getDate();
}
console.log(getDateAgo(date, 1));