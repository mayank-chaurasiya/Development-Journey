// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hii, my name is ${this.name}`);
//     },
//   };
//   return person;
// }

// constructors -- doesn't return anything and start with capital
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`hii my name is : ${this.name}`);
// };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   talk() {
//     console.log(`Hi, my name is ${this.name}`);
//   }
// }

// let p1 = new Person("mayank", 21);
// let p2 = new Person("khushi", 20);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hii I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); // parent class costructor is being called.
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // parent class costructor is being called.
    this.subject = subject;
  }
}
