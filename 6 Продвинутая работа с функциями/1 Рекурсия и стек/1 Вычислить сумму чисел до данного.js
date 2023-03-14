//Вычислить сумму чисел до данного n
const sumToByCycle = (n) => {
    let sum=0;
    for(let i=1; i<=n; i++) {
        sum +=i;
    }
    return sum;
}

const sumToByRecursion = (n) => {
    if(n <=1 ) {
        return n;
    }
    return (sumToByRecursion(n-1) +n)
}

const sumToByProgression = (n) => {
    return n*(n+1)/2;
}

const start = new Date().getTime();
sumToByRecursion(100);
const end = new Date().getTime();
console.log(`This time: ${end-start}`)
//быстрее всего работает функция использующая арифметическую прогрессию,
//для чисел любой величины, на небольших числах хорошо отрабатывает рекурсия,
//но уже для 100000 стек вызовов заполнен(т.о заатрачивается слишком много памяти)
//то цикл лучше справляется с выполнением чем рекурсия