// PERSON CLASS
class Person {
  // Constructor function
  constructor (name) {
    this.name = typeof name === 'string' ? name : 'Anonymous';
  }
  set name (val) {
    // can't use name — in custom getters and setter, can't use same property again 
    // use property name with underscore by convention.
    this._name = Person.capitalizeWord(val);
  } 
  get name () {
    return this._name;
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



// EMPLOYEE SUBCLASS
class Employee extends Person {
  constructor (name, job = 'Unemployed') {

    // No point repeating yourself — call parent constructor for name
    super(name);
    this.job = job
  }

  // Override print greeting in parent class
  printGreeting () {
    console.log(`Hi. I am ${ this.name } and I am a ${this.job}!`);
  }

  callSuperMethod () {
    super.printGreeting();
  }
};



var person1 = new Employee('adam', 'developer');
console.log(person1.name);
person1.printGreeting();
person1.callSuperMethod();

var person2 = new Employee();
console.log(person2.name);
person2.printGreeting();

var person3 = new Employee();
person3.name = 'hannah'     // trying to override capitalizeWord
person3.printGreeting();    // custom setter sorts it out

var person4 = new Person('eva'); // custom setter is called from the constructor too
person4.printGreeting();         // so 'eva' is capitalised.

console.log(Person.capitalizeWord('abuwabu'));



// ASIDE
// Can use custom getters and setters on objects too
var obj = {
  set age (val) {
    this._age = val -10;
  },
  get age () {
    return this._age;
  }
};

obj.age = 43;
console.log(obj.age);