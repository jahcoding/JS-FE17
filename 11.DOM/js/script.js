// document.title = "Title"

// let heading = document.getElementsByTagName("h1")
// let headingID = document.getElementById("heading1")
let hClass = document.getElementsByClassName("heading")
let hSelector = document.querySelectorAll("h1")


// for(let i = 0; i < hClass.length; i++){
// 	if(i % 2 === 0){
// 		hClass[i].style.color = "blue"
// 	}else {
// 		hClass[i].style.color = "red"
// 	}
// }

hSelector.forEach((item, i) => {
	if(i % 2 === 0){
		item.style.color = "blue"
	}else {
		item.style.color = "red"
	}
})


console.dir(hClass)
console.dir(hSelector)

// let input = document.querySelector("[type='text']")
// input.setAttribute("class", "input")
// console.log(input.getAttribute("class"))

let heading = document.querySelector('h1')

// heading.style.cssText = `
// 	border-color: red;
// 	border-width: 5px;
// 	border-style: dotted;
// `
// heading.style.borderColor = "red"
// heading.style.borderWidth = "5px"
// heading.style.borderStyle = "solid"
// heading.style.border = "1px solid red"

// console.dir(heading)

// heading.className += " test"


heading.classList.add("test")
heading.classList.remove("some")
heading.classList.toggle("fe17")
// console.log(heading.classList.contains("some"))

// console.log(heading.classList)

// let elem = document.createElement("header")

// elem.style.cssText = `
// 	width: 100px;
// 	height: 100px;
// 	background: blue;
// `



// let body = document.body

// body.prepend(elem)
