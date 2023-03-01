//Подмассив наибольшей суммы
const getMaxSubSum = (arr) => {
    let currentSum = 0;
    let maxSum = 0;

    for(let i of arr) {
        currentSum +=i;
        maxSum = Math.max(maxSum, currentSum);
        if(currentSum <0) currentSum = 0;
    }
    return maxSum;
}
console.log(getMaxSubSum([100, -9, 2, -3, 5]))