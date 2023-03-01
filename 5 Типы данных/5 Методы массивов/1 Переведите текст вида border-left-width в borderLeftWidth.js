//Переведите текст вида border-left-width в borderLeftWidth
const camelize = (str) => {
    const splitStr =  str.split('');
    for(let i=0; i<str.length; i++) {
        if(splitStr[i] === '-') {
            splitStr.splice(i, 2, splitStr[i+1].toUpperCase());
        }
    }
    return splitStr.join('');
}
console.log(camelize("background-color")); //backgroundColor
