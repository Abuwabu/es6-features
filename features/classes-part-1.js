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
var person2 = new Person();

console.log(person1.name);
console.log(person2.name);

person1.printGreeting();
person2.printGreeting();

console.log(Person.capitalizeWord('abuwabu'));