//Скопировать и отсортировать массив
let arr2 = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => {
    return [...arr].sort();
}
let sorted = copySorted(arr2);
console.log(sorted, arr2);
