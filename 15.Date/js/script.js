let box = document.querySelector('h1')
// let date = new Date(-635067307000) //millisecond
// let date = new Date(1990, 01, 01, 03, 00, 00)
// let date = new Date('1990-11-01')
let date = new Date()
// console.log(date)
// console.log(date.setFullYear(2020, 3, 12))
// console.log(date)
// console.log(Date.parse(date))
// console.log(date.setMonth(3))
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getUTCHours())
// console.log(date.getTime())
// console.log(date.getDate())
// console.log(date.getTimezoneOffset())
// GMT(+0500)


// box.innerText = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
// 01/01/1990
// 01.01.1990
// console.log(date)

// switch(day){
// 	case 0:
// 		return "ВС"
// 	case 1:
// 		return "ПН"
// 	case 2:
// 		return "ВТ"
// 	case 3:
// 		return "СР"
// 	case 4:
// 		return "ЧТ"
// 	case 5:
// 		return "ПТ"
// 	case 6:
// 		return "СБ"
// }

date = new Date()
let weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ" ]

// console.log(date)

function getWeekDay(dateArg){
	let day = dateArg.getDay()

	return weekDays[day]
}

console.log(getWeekDay(date))


function showTime(){
	let date = Date.parse(new Date()) / 1000
	box.innerText = date
}

setInterval(() =>{
	showTime()
}, 1000)

