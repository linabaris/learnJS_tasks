let listLi = document.querySelectorAll('li');
for(let item of listLi) {
    let title = item.firstChild.data;
    let count = item.getElementsByTagName('li');
    console.log(`${title} : ${count}`);
}