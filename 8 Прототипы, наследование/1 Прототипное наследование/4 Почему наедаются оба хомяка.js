let hamster = {
    // stomach: [],
    eat(food) {
        this.stomach = [];
        this.stomach.push(food);
    }
};
  
let speedy = {
    __proto__: hamster
};
  
let lazy = {
    __proto__: hamster
};

speedy.eat('apple');
console.log(speedy)
lazy.eat('grape');
console.log(lazy)