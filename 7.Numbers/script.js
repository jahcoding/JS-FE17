let num = 4_000_000_000;
let num1 = 4e-3;

let num2 = 3;

num2 += 10 // num2 = num2 + 10
num2 -= 8 // num2 = num2 - 8
num2 /= 4 // num2 = num2 / 4
num2 *= 3 // num2 = num2 * 3

let exmp = 5.5;

// random [0 , 1]
let rnd = Math.random()
let result = (rnd >= 0.5) ? rnd * 100 : '';

// [50, 100]

console.log(Math.random() * 50)

// console.log(Math.pow(2, 1/5))
// console.log(Math.sqrt(16))
// console.log(Math.abs(exmp))
// console.log(Math.floor(exmp))
// console.log(Math.ceil(exmp))
// console.log(Math.round(exmp))
// console.log(Math.trunc(exmp))

function pow(x, n){
	return x ** n
}

function floor(n){
	let num = 5.5
	return 5
}

function floor(n){

	return Math.floor(n)
}
//toString

let number = 255
console.log(number.toString(2))

// parseInt va parseFloat
let string2 = '15.505em'
let string = '1050'

let parse = parseInt(string2)
console.log(  parse);
// toFixed

let rndnum = 5.5654654654

console.log(rndnum.toFixed(5));

//isNaN
let rndStr = '45645aaa4'
// console.log(isNaN(rndStr));

//isFinite
console.log(isFinite(rndStr))
// NaN +Infinity -Infinity false
