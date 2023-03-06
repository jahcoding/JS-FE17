// "use strict";

// let user = {
// 	name: "Alex",
// 	age: 34,
// 	sayHi: function(phoneNumber, surname){
// 		console.log(this.name, phoneNumber, surname)
// 	}
// }

// let admin = {
// 	name: 'Lisa',
// 	age: 25,
// }

// user.sayHi(884444, 'Smith1')

// user.sayHi.call(admin, 234234, 'SMith')
// user.sayHi.apply(admin, [234234, 'Smith2'])

// user.sayHi.bind(admin, '234324', 'SmithBind')()


// function some(){
// 	console.log(this)
// }

// some()


// let some = () => {
		// 	console.log(this)
		// }
		// some()
		// function some() {
		// 	console.log(this)
		// }


function Student(name, surname) {
	this.name = name
	this.surname = surname
	this.role = 'student' 
	this.sayHi = function(){
		console.log(this.role)
	}
}

function Teacher(name, surname) {
	this.name = name
	this.surname = surname
	this.role = 'teacher'
}

let student = new Student('Alex', "Smith")
let teacher = new Teacher('John', 'Smith')


student.sayHi.call(teacher)

