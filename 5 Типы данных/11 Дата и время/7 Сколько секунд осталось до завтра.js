//Сколько сегодня прошло секунд?
const getSecondsToday = () => {
    let start  = new Date();
    let end = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    return (Math.round((start-end)/1000))
}
console.log(getSecondsToday());