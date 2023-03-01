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