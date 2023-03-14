let dictionary = Object.create(null, {
    toString: {
        val() {
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';
for(let key in dictionary) {
   console.log(key); // "apple", затем "__proto__"
  }
console.log(dictionary)