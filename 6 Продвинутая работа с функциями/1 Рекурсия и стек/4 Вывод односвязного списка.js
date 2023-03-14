let list = {
    value:1, 
    next: {
        value:2,
        next: {
            value: 3,
            next:null
        }
    }
}
console.log(list.next);

const printList = (list) => {
    console.log(list.value);
    if(list.next) {
        printList(list.next)
    }
}
console.log(printList(list));

const printListByCucle = () => {
    let temp = list;
    while(temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}
console.log(printListByCucle(list))