class Person {
  // Constructor function
  constructor (name) {
    this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
  }
  printGreeting () {
    console.log(`Hi. I am ${ this.name }!`);
  }

  // Static methods don't require an instance of the class to work
  // Does this method have a value outside of an individual instance?
  // Yes? — go for static
  static capitalizeWord (word) {
    return word[0].toUpperCase() + word.slice(1);
  }
};



var person1 = new Person('adam');
console.log(person1.name);
person1.printGreeting();

var person2 = new Person();
console.log(person2.name);
person2.printGreeting();

var person3 = new Person();
person3.name = 'hannah';    // overrides the capitalizeWord method — need a custom getter/setter
person3.printGreeting();

console.log(Person.capitalizeWord('abuwabu'));