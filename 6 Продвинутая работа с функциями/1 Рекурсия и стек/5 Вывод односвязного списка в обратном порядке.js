//Вывод односвязного списка в обратном порядке
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

const printListByCycle = (list) => {
    let temp = list;
    let arr = [];
    while(temp) {
        arr.push(temp.value)
        temp = temp.next;
    }
    for (let i=arr.length; i>0; i--) {
        console.log(i)
    }
}
console.log(printListByCycle(list));
const printList = (list) => {
    if(list.next) {
        printList(list.next);
    }
    console.log(list.value);
}

console.log(printList(list))