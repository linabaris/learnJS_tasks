//Сумма введённых чисел
const sumInput = () => {
    let arr=[];
    while(true) {
        let num = prompt('enter your number',0);
        if(typeof num !== 'number') {
            return;
        }
        arr.push(+num);
        let sum=0;
        for(let i of arr) {
            sum +=i;
        }
        return sum;
    }
}
