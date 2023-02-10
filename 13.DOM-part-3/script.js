let wrapper = document.querySelector('.wrapper')
let boxEls = document.querySelectorAll('.box')
let box = document.createElement('div')

box.style.cssText = `
			width: 100px;
			height: 50px;
			background-color: green;
			color: white;
			font-size: 30px;
			font-family: monospace;
`
box.classList.add('box')

box.innerText = 5

// wrapper.append(box)
// wrapper.prepend(box)
// boxEls[1].after(box)
// boxEls[1].remove()
// boxEls[1].replaceWith(box)

//Old methods
// wrapper.appendChild(box)
// wrapper.insertBefore(box, boxEls[1])

// insertAdjacentHTML/Text/Element

// wrapper.insertAdjacentElement("afterbegin", box) 
// => wrapper.prepend(box)

// wrapper.insertAdjacentElement("afterend", box) 
// => wrapper.after(box)

// wrapper.insertAdjacentElement("beforebegin", box)
// => wrapper.before(box)

// wrapper.insertAdjacentElement("beforeend", box)
// => wrapper.append(box)

// wrapper.insertAdjacentHTML('beforebegin', '<h1>Hello</h1>')
// wrapper.insertAdjacentText('afterbegin', 'Hello DOM')