let animal = {
    eat() {
      this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat(); // rabbit получит свойство full, тк this в этом случае = rabbit
