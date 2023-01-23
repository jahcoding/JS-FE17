//declaration, expression, arrow

//Declaration

// const COLOR_RED = '#ff0000'
// let _apiKey = 'ajsdfhjkhsdfhasdjk'

// let usersData = [
// 	{
// 		name: "Anvar"
// 	},
// 	{
// 		name:"Aziz"
// 	}

// ];

// let studentsData = [
// 	{
// 		name: "Bilol"
// 	},
// 	{
// 		name:"Akbar"
// 	}
// ];

// function usersInfo(studentArray){
// 	for (let i = 0; i < studentArray.length; i++){
// 		if(studentArray[i].name.length > 5){
// 			console.log(studentArray[i].name, "bu ismni harflari besh harfdan ko'p")
// 		}else if(studentArray[i].name.length == 5){
// 				console.log(studentArray[i].name, "bu ismni harflari besh harfdan iborat")
// 		}else{
// 			console.log( studentArray[i].name ,"bu ismni harflari besh harfdan kam")
// 		}
// 	}
// }

// usersInfo(usersData)
// usersInfo(studentsData)

//return
function showMessage() {
	console.log('message')
	return 'Open web'
}

let result = showMessage()

// console.log(result)

//function arguments

// if(user1.age > 20){
// 	console.log(user1.name + 'ning yoshi 20dan katta')
// }else {
// 	console.log(user1.name + 'ning yoshi 20dan kichik')
// }

// if(user2.age > 20){
// 	console.log(user2.name + 'ning yoshi 20dan katta')
// }else {
// 	console.log(user2.name + 'ning yoshi 20dan kichik')
// }

function calcUserAge(userData) {
	if (userData.age > 20) {
		console.log(userData.name + 'ning yoshi 20dan katta')
	} else {
		console.log(userData.name + 'ning yoshi 20dan kichik')
	}
}

let users = [
	{
		name: 'Alex',
		age: 14,
	},
	{
		name: 'Lisa',
		age: 45,
	},
	{
		name: 'John',
		age: 21,
	},
]

for (let i = 0; i < users.length; i++) {
	calcUserAge(users[i])
}

function getStudentsInfo(name, surname) {
	console.log(name, surname)
	name = 'Lutfulla'
	console.log(name)
}

getStudentsInfo('Otabek', "To'rayev")
getStudentsInfo('Azizbek', 'Shukurov')

function getStudentsInfo(name, surname = '') {
	// surname = surname || ''
	// surname = surname ? surname : ''

	console.log(name, surname)
}

getStudentsInfo('Bilol')

getStudentsInfo('Otabek', "To'rayev")
getStudentsInfo('Azizbek', 'Shukurov')

console.log('Azizbek'.length)

let smth = 'Global'

function showMessage() {
	let smth1 = 'Local'
	console.log(smth1)
}

showMessage()
console.log(smth1)

// Expression

showMessageDec()

function showMessageDec() {
	console.log('Declaration')
} // Declaration

// Recursion
// Closure
// Hoisting
showMessageExp()

let showMessageExp = function (arg1, arg2, arg3 = '') {
	console.log('Expression')
} // Expression

// Arrow function

let showMessageArrow = () => {
	console.log('Hello')
}

//Prettier
//EsLint
//PostCSS

if (
	id === 123 &&
	moonPhase === 'Waning Gibbous' &&
	zodiacSign === 'Libra'
) {
	letTheSorceryBegin()
}
