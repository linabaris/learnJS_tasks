//День недели в европейской нумерации
const getLocalDay = (date) => {
    let val = date.getDay();
    switch (val) {
        case 0:
            return "7"
            break;
        case 1:
            return '1'
            break;
        case 2:
            return '2'
            break;
        case 3:
            return '3'
            break;
        case 4:
            return '4'
            break;
        case 5:
            return '5'
            break;
        case 6:
            return '6'
            break;
        default:
            break;
    }
}
console.log(getLocalDay(date));