//Объекты-константы?

const user1 = {
    name: "John"
};
  
  // это будет работать?
user1.name = "Pete";// будет, тк объекты, объявленные с помощью const  хранятся по ссылке, те
// в переменной user1 хранится не сам объект, а ссылка на него. Менять значения свойств объекта можно.