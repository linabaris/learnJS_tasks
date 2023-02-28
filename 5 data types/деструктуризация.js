//Деструктурирующее присваивание
let user = {
    name: "John",
    years: 30
};
let { name, years: age, isAdmin=false} = user;
console.log(name);
console.log(age);
console.log(isAdmin)

//Максимальная зарплата
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (salaries) => {
    let topName = null;
    let topSal = 0;
    for(let [name, sal] of Object.entries(salaries)) {
        if(topSal < sal) {
            topSal = sal;
            topName = name;
        }
    }
    return topName;
}
console.log(topSalary(salaries));