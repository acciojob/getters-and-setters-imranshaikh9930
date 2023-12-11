//complete this code
class Person {

	constructor(name,age){

		this._name = name;
		this._age = age;
		
	}

	get name(){
		return this._name
	}

	set age(value){

		this._age = value
	}
}

class Student extends Person {
	 constructor(name, age) {
	    super(name, age);
  }

	 study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
	constructor(name, age) {
    super(name, age);
  }

  // Method for the Teacher class
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
