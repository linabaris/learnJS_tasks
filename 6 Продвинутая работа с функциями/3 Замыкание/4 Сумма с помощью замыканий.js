//Сумма с помощью замыканий

const sum = (a) => {
    return (b) => {
        return a+b;
    }
}
console.log(sum(2)(-1))