const txtEl = document.querySelector('.text')
const btn = document.querySelector('button')


txtEl.addEventListener('scroll', () => {
	console.log(txtEl.scrollTop)
})

btn.addEventListener('click', () => {
	txtEl.scrollTop = (txtEl.scrollHeight - txtEl.clientHeight) / 2

})

console.log(getComputedStyle(btn).width = '500px')

console.dir(txtEl)

// console.dir(txtEl)
// console.log(txtEl.offsetTop)
// console.log(txtEl.offsetLeft)
// console.log(txtEl.clientTop)
// console.log('cH', txtEl.clientHeight)
// console.log('cW', txtEl.clientWidth)
// console.log('oH',txtEl.offsetHeight)
// console.log('oW', txtEl.offsetWidth)
// console.log(txtEl.scrollHeight)