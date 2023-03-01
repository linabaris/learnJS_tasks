//Операции с массивами
let styles = ["Джаз", "Блюз"];
styles.push("rock-n-roll");
styles[Math.floor(styles.length/2)] = "Классика";
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);