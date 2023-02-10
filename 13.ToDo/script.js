let inp = document.querySelector('[type="text"]')
let btn = document.querySelector('button')
let todosWrapper = document.querySelector('ul')



// btn.addEventListener('click', () => {
// 	todosWrapper.innerHTML += `
// 		<li>
// 			<div class='todo'>
// 				<input type="checkbox"> 
// 				<span>${inp.value}</span>
// 			</div>
// 			<div class='cross'>✕</div>
// 		</li>
// 	`
// 	removeTodo('cross')
// })

// function removeTodo(crossClassname){
// 	let crosses = document.querySelectorAll(`.${crossClassname}`)

// 	crosses.forEach((cross) => {
// 		cross.addEventListener('click', () => {
// 			cross.parentElement.remove()
// 		})
// 	})
// }

// console.log(todosWrapper.parentElement)



let test = document.querySelector('.test')
let test1 = document.querySelector('.test1')

// let a = test.textContent
// let b = test.innerText
// console.log(a)
// console.log(b)
test.textContent = 'abs'
test1.innerText = 'sdf'


console.dir(test.nextSibling)
console.dir(test1.nextSibling)