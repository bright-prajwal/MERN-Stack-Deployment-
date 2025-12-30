let arr = [1, 2, 3];

let arr2 = [1, 2, 3];
arr.sayHello = () => {
  console.log("Hello!,  i am arr");
};
arr2.sayHello = () => {
  console.log("Hello!,  i am arr");
};

// factory Fuction
function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi my name is ${this.name}`);
    },
  };
  return person;
}

let p1 = PersonMaker("abc", 25);
let p2 = PersonMaker("xyz", 51);

// Constructors -- doesn't return anything & start with capital
function Person(name, age) {
  (this.name = name), (this.age = age);
}

Person.prototype.talk = function () {
  console.log(`Hi, my name is${this.name}`);
};

let P1 = new Person("kjhgk", 35);
let P2 = new Person("hghj", 45);

// Class

class Person1 {
  constructor(name, age) {
    console.log("Person 1 Class Constructor");
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

// let person1 = new Person1("Prajwal", 22);
// let person2 = new Person1("Hon", 23);

class Student extends Person1 {
  constructor(name, age, marks) {
    console.log("Student class constructor");
    super(name, age);
    this.marks = marks;
  }
}

class Teacher extends Person1 {
  constructor(name, age, subject) {
    console.log("Teacher class Constructor");
    super(name, age);
    this.subject = subject;
  }
}

let stu1 = new Student("Prajwal", 21, 23);
stu1.talk();

let tec1 = new Teacher("xyz", 56, "English");
tec1.talk();

class Mammal {
  constructor(name) {
    this.name=name;
    this.type = "Warm-blooded";
  }
  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("woof...");
  }
}

class Cat extends Mammal {
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("meow....");
  }
}
console.log("\n");
let dog1 = new Dog("tuffi");

dog1.name;
dog1.type;
dog1.eat();
dog1.bark();
