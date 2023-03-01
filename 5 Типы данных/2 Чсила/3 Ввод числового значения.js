//Ввод числового значения

const readNumber = () => {
    let num;

  do {
    num = prompt("Enter num", 0);
  } while ( !isFinite(num) );

  if (num === "" || num === null) return null;

  return +num;
}