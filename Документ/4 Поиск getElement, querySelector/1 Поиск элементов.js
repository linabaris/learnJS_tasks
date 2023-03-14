//Как найти?…

// 1 Таблицу с id="age-table".
// 2 Все элементы label внутри этой таблицы (их три).
// 3 Первый td в этой таблице (со словом «Age»).
// 4 Форму form с именем name="search".
// 5 Первый input в этой форме.
// 6 Последний input в этой форме.

//1
const table = document.getElementById('age-table');
const labels = table.querySelectorAll('label');
const age = table.querySelector('td');
const nameForm = document.getElementsByName('search')[0];
const inputFirst = nameForm.querySelector('input');
const inputLast = nameForm.getElementsByName('info[2]');