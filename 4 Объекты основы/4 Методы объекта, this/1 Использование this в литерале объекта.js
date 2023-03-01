//Использование "this" в литерале объекта
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
  
let user = makeUser();
//результат ошибка тк this определяется только в момент вызова функции. 