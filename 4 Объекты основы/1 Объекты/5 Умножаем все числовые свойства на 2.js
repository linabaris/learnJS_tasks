//Умножаем все числовые свойства на 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    for (let i in obj) {
        if(typeof obj[i] === 'number') {
            obj[i] = obj[i]*2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu)//{ width: 400, height: 600, title: 'My menu' }