
let str = 'Open Web Academy'
// let arr2 = arr.map((item)=>{
// 	return item += 1
// })
// console.log(arr2);

// let arr3 = arr.forEach((item)=>{
//  return item += 1
// })
// console.log(arr3);

// let arr4 = arr.filter((item)=>{
// 	return item += 1
// })
// console.log(arr4);

// function stringToArray(string){
// 	console.log(string.split(''));
// }
// stringToArray(str)

// let str2 = arr.join(' ') 
// console.log( typeof str2 );

let countsheep = [ true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]


console.log(countSheeps(countsheep));





// let newArr = arr.map((item, i) => {
// 	if(item % 2 === 0){
// 		return item
// 	}
// })

// let newArr = arr.filter(item => {
// 	// if(item % 2 === 0){
// 	// 	return item
// 	// }

// 	return item % 2 === 0
// })

// let newArr = arr.filter(item => (item % 2 === 0))

// console.log(newArr)


let arr = [ 2, 4, 6, ]


// let some = arr.reduce((prevValue, item, index, array) => {
// 	return prevValue + " " + item
// })

// let some = arr.some(item => {
// 	return item % 2 === 0
// })

let some = arr.every(item => {
	return item % 2 === 0
})

console.log(some)