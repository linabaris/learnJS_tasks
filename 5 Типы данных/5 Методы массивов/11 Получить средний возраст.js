//Получить средний возраст
const getAverageAge = (users) => {
    return (users.reduce((sum, current)=> sum + current.age, 0))/users.length;
}
console.log(getAverageAge(arr))