const printNumbers = (from, to) => {
    let i = from;
    let timer = setInterval(() => {
        console.log(i);
        if(i == to) {
            clearInterval(timer);
        }
        i++
    },1000)
}
console.log(printNumbers(1,3));

const printNumbersWithTimeOut = (from, to) => {
    let i = from;
    setTimeout(function start() {
        console.log(i);
        if(i<to) {
            setTimeout(start, 1000)
        }
        i++;
    }, 1000)
}
console.log(printNumbersWithTimeOut(1, 3))