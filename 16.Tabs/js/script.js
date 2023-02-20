let tabLink = document.querySelectorAll('.tab-link')
let tabLinkParent = document.querySelector('.tabs-header')
let tabContent = document.querySelectorAll('.tab') 

addActiveClass()

function removeActiveClass(){
	tabLink.forEach(item => {
		item.classList.remove('tab-link_active')
	})
	tabContent.forEach(item => {
		item.classList.remove('tab_active')
	})
}

function addActiveClass(index = 0){
	tabContent[index].classList.add('tab_active')
	tabLink[index].classList.add('tab-link_active')
}


tabLinkParent.addEventListener('click', (e) => {

	tabLink.forEach((link, i) => {
		// i = 2;  link = tab3
		if(e.target === link){
			removeActiveClass()
			addActiveClass(i)
		}
	})
})















// tabLink.forEach((itemLink, i) => {
// 	itemLink.addEventListener('click', () => {
// 		// console.log(i)
// 		removeActiveClass()
// 		addActiveClass(i)
// 	})
// })
