let images = document.querySelectorAll('.img-fluid')
let overLay = document.querySelector('.overlay')
let productBox = document.querySelectorAll('.product-box__item')
let more = document.querySelectorAll('.more')
var amount = document.querySelector('#amount')
var sum = document.querySelector('#sum')
let cart = document.querySelector('.btn-shoop')

cart.onclick = showCart



// for(let i of productBox){
// 	i.onclick = targetBox
// }




// функция для добавления товаров в корзину и считания суммы покупки
let result = []
let count = 0
function addToCart(event){
	// console.log(this)
	// console.log(event.currentTarget)
	let price = parseInt(this.parentElement.parentElement.parentElement.querySelector('.price-number').innerHTML)
	result.push(price)
	
	count++
	amount.innerHTML = count
	sum.innerHTML = result.reduce((a,b) => a + b,0)
	// console.log(product.path.filter((i,index)=> i == productBox ))
}


// назначение обработчика события при нажимании на фотографии и подробнне
for(let i of more){
	i.onclick = showMore
}
for(let i of images){
	i.onclick = showMore
}


let openModal


function showCart(){
	openModal = document.querySelector('.cart')
	document.querySelector('.cart').style.display = 'block'

	overLay.style.display = 'block'

}

function addToList(){
	let product = this.parentElement.parentElement.parentElement.firstElementChild.innerHTML
	let price = parseInt(this.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.innerHTML)
	let tr = document.createElement('tr')
	let td = document.createElement("td")
	td.innerHTML = product
	let tdp = document.createElement('td')
	tdp.innerHTML = price
	// tr.insertAdjacentHTML("beforeend", "<td>product</td><td>price</td>")
	document.querySelector('table').append(tr)
	tr.append(td)
	tr.append(tdp)
	// console.log(this.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.innerHTML)
	// console.log(this.parentElement)
}




// function openPhoto(){
// 	openModal = this.nextElementSibling
// 	this.nextElementSibling.style.display = 'block'
// 	overLay.style.display = 'block'
// }

function closeModal(){
	openModal.style.display = 'none'
	overLay.style.display = 'none'
}
// ссылка подробнне пояяляется после того как экран больше 500
if(document.body.clientWidth > 500) {
 for(let i of productBox) {
 	let more = i.querySelectorAll('.more')[1]
 	
 	more.parentNode.removeChild(more)
 }
}


// убрает не нужные классы для аддаптации
if(document.body.clientWidth < 500) {
	for(let i of productBox){
	
		let more = i.querySelector('.more')
		let button = i.querySelector('.btn-outside')
		i.classList.remove('col-md-4')
		i.firstElementChild.remove()
		// i.classList.add('col-md-6')
		i.parentElement.classList.remove('row')
		more.parentNode.removeChild(more)
		button.parentNode.removeChild(button)
		
		// i.parentElement.classList.remove('justify-content-around')
		// i.parentElement.classList.remove('product-row')
		// console.log(i.parentElement)
	}
}

// добавляет нужное для аддаптации
if(document.body.clientWidth < 500) {
	document.querySelector('.navbar-collapse').classList.add('collapse')

	for(let i of productBox) {
		// console.log(i.querySelector('.showMore'))
		// console.log(i.firstElementChild.lastElementChild.firstElementChild.querySelector('.show-more').lastElementChild.firstElementChild.firstElementChild.innerHTML)
		let mobileName = document.createElement('p')
		mobileName.innerHTML = i.firstElementChild.lastElementChild.firstElementChild.querySelector('.show-more').lastElementChild.firstElementChild.firstElementChild.innerHTML
		mobileName.classList.add('mobile-name')
		
		// console.log(i.querySelector('.text-inside'))
		i.querySelector('.text-inside').prepend(mobileName)
		i.querySelector('.text-inside').firstElementChild.nextElementSibling.insertAdjacentHTML("beforeend", '<button class="product-box__btn btn-check"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span id="buy">Купить</span></button>')
		
	}


}

function showMore() {
	let show = this.parentElement.parentElement.querySelector('.show-more')
	openModal = show
	show.style.display = 'flex'
	overLay.style.display = 'block'
}
// console.log(productBox[0].querySelector('.price').innerHTML)


let button = document.querySelectorAll('.product-box__btn')
for(let i of button){
	i.onclick = addToCart
	i.addEventListener("click", addToList)
}
