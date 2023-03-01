//Проверка на спам
const checkSpam = (str) => {
    return (str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra') ? true:false)
}
console.log(checkSpam('innocent rabbit'))