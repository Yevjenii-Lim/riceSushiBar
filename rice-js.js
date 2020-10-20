let images = document.querySelectorAll('.img-fluid')
let overLay = document.querySelector('.overlay')
let productBox = document.querySelectorAll('.product-box__item')
let productRow = document.querySelectorAll('.product-row')
let more = document.querySelectorAll('.more')
var amount = document.querySelector('#amount')
var sum = document.querySelector('#sum')
let cart = document.querySelector('.btn-shoop')
let li = document.querySelectorAll('li')

cart.onclick = makeOrder
var cartWindow = document.querySelector('.cart')


function openMenu(){
	let filter = document.querySelector('.filter')
	let menu = document.querySelector('.menu')
	// console.log(document.querySelector('.filter').style.display)
	if( filter.style.display == "block"){
		// console.log('aas')
		filter.style.display = 'none'
	}else{
		// menu.style.display = 'block'
	filter.style.display = 'block'
}
	}
	

// adaptation sector
// ссылка подробнне пояяляется после того как экран больше 500
if(document.body.clientWidth > 500) {
 for(let i of productBox) {
 	let more = i.querySelectorAll('.more')[1]
 	
 	more.parentNode.removeChild(more)
 }
}
// if(document.body.clientWidth < 1100){
// for(let i of productRow){
// 	i.classList.add('row')
// }

// 	for(let i of productBox){
// 		i.classList.add('col-md-5')
// 	}
// }

// убрает не нужные классы для аддаптации
if(document.body.clientWidth < 500) {
	for(let i of productBox){
		let more = i.querySelector('.more')
		let button = i.querySelector('.btn-outside')
		i.classList.remove('col-md-3')
		i.firstElementChild.remove()
		i.parentElement.classList.remove('row')
		more.parentNode.removeChild(more)
		button.parentNode.removeChild(button)
		
	}
}
// добавляет нужное для аддаптации
if(document.body.clientWidth < 500) {
	

	for(let i of productBox) {
	
		let mobileName = document.createElement('p')
		mobileName.innerHTML = i.firstElementChild.lastElementChild.firstElementChild.querySelector('.show-more').lastElementChild.firstElementChild.firstElementChild.innerHTML
		mobileName.classList.add('mobile-name')
		
	
		i.querySelector('.text-inside').prepend(mobileName)
    	i.querySelector('.text-inside').firstElementChild.nextElementSibling.insertAdjacentHTML("beforeend", '<button class="product-box__btn btn-check"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span id="buy">Купить</span></button>')
		
	}
}



// make json from oreder object and send it
function send(){
	// console.log(order.zakaz.join(' '))
	// order.Заказ = order.Заказ.join(',')
	// order.Сумма = order.Сумма.reduce((a,b) => a+b,0)
	// order.Имя = modal.querySelector('.nameInput').value
	// order.Номер = modal.querySelector('.numInput').value
	let text = JSON.stringify(order) 
	// let text = order 
	let url = 'https://api.telegram.org/bot1343911322:AAEBvDHKxx9dxG3njKLgt2qeiQfNiH8B1Aw/sendMessage?chat_id=-1001248032521&text='
	let arr = url.split(' ')
	arr.push(text)
	arr = arr.join('')
	console.log(arr)
	// fetch(arr)
	// .then(result => console.log(result))
}


// filtration on category
for(let i of li){
	i.addEventListener('click', select)
}


let set = document.querySelectorAll('.set')
let roll = document.querySelectorAll('.roll')

function filter(event) {
	let selector = event.value
	let chosen = document.querySelectorAll('.'+selector)
	if (selector != 'all') {
		for(let i of roll){
			// console.log(i)
			i.setAttribute('id', 'hidden')
		}
			for(let i of set){
			// console.log(i)
			i.setAttribute('id', 'hidden')
		}
		for(let i of chosen){
			i.removeAttribute('id')
		}
	}

	if(selector == 'all'){
		for(let i of set){
			i.removeAttribute('id')
		}
			for(let i of roll){
			i.removeAttribute('id')
		}
	}

}


function select(event){
	// console.log(event.target)
	let selector = event.target.getAttribute('id')
	let chosen = document.querySelectorAll('.'+selector)
	let screen = document.body.clientWidth
	// console.log(event.target.getAttribute('id'))
	
	if(event.target.getAttribute('id') != 'all'){
		
		
		for(let i of roll){
			// console.log(i)
			i.setAttribute('id', 'hidden')
		}
			for(let i of set){
			// console.log(i)
			i.setAttribute('id', 'hidden')
		}
		for(let i of chosen){
			i.removeAttribute('id')
		}
		if(screen < document.body.clientWidth){
			document.documentElement.style.paddingRight = document.body.clientWidth - screen + 'px'
		}

		
		// console.log(document.querySelectorAll('.'+selector))
		// document.querySelectorAll('.'+selector).style.display = 'flex'
	}
	// if(event.target.innerHTML == 'Сеты'){
	// 	document.documentElement.style.paddingRight = document.body.clientWidth - screen + 'px'
		
	// 	for(let i of roll){
	// 		i.style.display  = 'none'
	// 	}
	// 	for(let i of set){
	// 		i.style.display  = ''
	// 	}

	// }
	// 	if(event.target.innerHTML == 'Ролы'){
	// 	for(let i of set){
	// 		i.style.display  = 'none'
	// 	}
	// 		for(let i of roll){
	// 		i.style.display  = ''
	// 	}
	// 	if(screen < document.body.clientWidth){
	// 		document.documentElement.style.paddingRight = document.body.clientWidth - screen + 'px'
	// 	}


	// }
		if(selector == 'all'){
			 document.documentElement.style.paddingRight = '0'
		for(let i of set){
			i.removeAttribute('id')
		}
			for(let i of roll){
			i.removeAttribute('id')
		}

			

	}
return false
}





// функция для добавления товаров в корзину и считания суммы покупки
let result = []
let count = 0
function addToCart(event,tr){
	// let vasabi = +document.querySelector('#vasabi').value
	// console.log(this)
	// console.log(event.currentTarget)
	let price = parseInt(this.parentElement.parentElement.parentElement.querySelector('.price-number').innerHTML)
	result.push(price)
	// result.push(vasabi)

	count++
	amount.innerHTML = count
	sum.innerHTML = result.reduce((a,b) => a + b,0)
	document.querySelector('#final').innerHTML = sum.innerHTML
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
let box
for(let i of productBox){
	i.addEventListener('click', targetBox, {capture: true,})  
}
function targetBox(event){

   let target = event.target.closest('button');

  if (!target) return;
	// console.log(target.tagName)
	box = this
	
}

// object for order
var order = {
	Имя: 'Лена',
	Заказ: [],
	Сумма: [],
	Номер: +380953769053,
}

// button ready
let priceList = []
function ready(event){
	let stick = document.querySelector('.stick-input')
	let stickStudy = document.querySelector('#stick-study')
	let table = document.querySelector('table').querySelectorAll('tr')
	let vasabi = document.querySelector('#vasabi').value
	let soy = document.querySelector('#soy').value
	let imbir = document.querySelector('#imbir').value
	for(let i of table){
		order.Заказ.push(i.firstElementChild.innerHTML)
	}
	if(vasabi){
		order.Дополнительно_Васаби = vasabi + " порц."
	}
	if(soy){
		order.Дополнительно_Соевый = soy + " порц."
	}
	if(imbir){
		order.Дополнительно_Имбирь = imbir + " порц."
	}
	let priceList = []
	let price = event.parentElement.parentElement.querySelectorAll('#price')
	for(let i of price) {
		priceList.push(+i.innerHTML)
	}
	let extraVasabi = event.parentElement.parentElement.querySelector('#vasabi').value * 15
	let extraSoy = event.parentElement.parentElement.querySelector('#soy').value * 15
	let extraImbir = event.parentElement.parentElement.querySelector('#imbir').value * 15

	priceList.push(extraVasabi)
	priceList.push(extraImbir)
	priceList.push(extraSoy)
	

	order.Сумма = priceList.reduce((a,b) => a + b, 0)
	order.Заказ = order.Заказ.slice(1)
	order.Палочки = stick.value
	order.Учебные = stickStudy.value
	
	if(order.Сумма == 0){
		alert('У вас пустая корзина, пожалуйста сделайте заказ')
	}else {
	modal.style.display = 'flex'
	cartWindow.style.display = 'none'
	// console.log(priceList)
}
	
}

let statickVas
let statickSoy
let statickImbir
var extraVas = []
var extraSoy = []
var extraImbir = []

function extraVasabi() {
	let vasabi = +document.querySelector('#vasabi').value * 15
	if(vasabi < statickVas) {
		extraVas.pop()
		result.pop()
	}else {
		extraVas.push(vasabi)
		extraVas.reduce((a,b) => a + b , 0)
		result.push(extraVas[0])
	}

	if(result[result.length - 1] == undefined){
		sum.innerHTML = 0
	}
	else {
		sum.innerHTML = result.reduce((a,b) => a + b ,0)
	}
	document.querySelector('#final').innerHTML = sum.innerHTML
	statickVas = vasabi
}


function extraSoyse() {
		let soy = +document.querySelector('#soy').value * 15

		if(soy < statickSoy) {
		extraSoy.pop()
		result.pop()
	}else {
		extraSoy.push(soy)
		extraSoy.reduce((a,b) => a + b, 0)
		result.push(extraSoy[0])
	}

	if(result[result.length - 1] == undefined){
		sum.innerHTML = 0
	}
	else {
		sum.innerHTML = result.reduce((a,b) => a + b ,0)
	}


	document.querySelector('#final').innerHTML = sum.innerHTML
	statickSoy = soy

}

function extraImbiry() {
	let imbir = +document.querySelector('#imbir').value * 15


		if(imbir < statickImbir) {
		extraImbir.pop()
		result.pop()
	}else {
		extraImbir.push(imbir)
		extraImbir.reduce((a,b) => a + b, 0)
		result.push(extraImbir[0])
	}

	if(result[result.length - 1] == undefined){
		sum.innerHTML = 0
	}
	else {
		sum.innerHTML = result.reduce((a,b) => a + b ,0)
	}

	document.querySelector('#final').innerHTML = sum.innerHTML

	statickImbir = imbir
}

function addToList(){
	let product = box.querySelector('.product-wrap').querySelector('.product-box__meta').firstElementChild.querySelector('.show-more').querySelector('.composition-wrap').firstElementChild.firstElementChild.innerHTML
	let price = parseInt(box.querySelector('.product-wrap').querySelector('.product-box__meta').querySelector('.text-inside').querySelector('.show-more').lastElementChild.firstElementChild.lastElementChild.innerHTML)
	let tr = document.createElement('tr')
	tr.classList.add('tableclass')
	let td = document.createElement("td")
	td.innerHTML = product
	let tdp = document.createElement('td')
	tdp.innerHTML = price
	tdp.setAttribute('id', 'price')
	let btnDelete = document.createElement('td')
	btnDelete.innerHTML = '<button class="btn-check">Удалить</button>'
	document.querySelector('table').append(tr)
	tr.append(td)
	tr.append(tdp)
	tr.append(btnDelete)

	// order.Заказ.push(td.innerHTML)
	// order.Сумма.push(price)

	tr.onclick = deleteIt


// console.log(box.querySelector('.product-wrap').querySelector('.product-box__meta').firstElementChild.querySelector('.show-more').querySelector('.composition-wrap').firstElementChild.firstElementChild.innerHTML)
}
function deleteIt(event){
	// console.log(deleteIt.parentElement)
	// console.log(event.target.tagName)
	if(event.target.tagName == 'BUTTON'){
		event.target.parentElement.parentElement.parentNode.removeChild(event.target.parentElement.parentElement)
		// console.log(event.target.parentElement.parentElement)
		amount.innerHTML = amount.innerHTML - 1
		count = amount.innerHTML
		sum.innerHTML = sum.innerHTML - event.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML
		result = [+sum.innerHTML]
		document.querySelector('#final').innerHTML = sum.innerHTML

	}
}



function closeModal(){
	openModal.style.display = 'none'
	overLay.style.display = 'none'
	// modal.style.display = 'none'
	cartWindow.style.display = 'none'
	document.body.style.overflow = ''
	document.documentElement.style.paddingRight = 0
}

function showMore() {
	let show = this.parentElement.parentElement.querySelector('.show-more')
	openModal = show
	show.style.display = 'flex'
	overLay.style.display = 'block'
}

var modal = document.querySelector('.modal-window')

function makeOrder(event) {
	let screen = document.body.clientWidth
	openModal = document.querySelector('.cart')
	document.querySelector('.cart').style.display = 'block'
	overLay.style.display = 'block'
	document.body.style.overflow = 'hidden'
    document.documentElement.style.paddingRight = document.body.clientWidth - screen + 'px'
	

}

// function closeButton() {
// 	modal.style.display  = 'none'
// }




let button = document.querySelectorAll('.product-box__btn')
for(let i of button){
	i.onclick = addToCart
	i.addEventListener("click", addToList)
}

function cancel(){
	let screen = document.body.clientWidth
	order = {
    	Заказ: [],
	    Сумма: [],
 }
 priceList = []
 modal.style.display = 'none'
overLay.style.display = 'none'
document.body.style.overflow = ''
document.documentElement.style.paddingRight = document.body.clientWidth - screen + 'px'

}
// console.log(modal)
function sendIt(){
	
	let valid = true
	if(modal.querySelector('.nameInput').value == false){
		alert('Введите ваше имя')
		valid = false
	}
	if(modal.querySelector('.numInput').value == false){
		alert('Введите ваш номер телефона')
		valid = false
	}
	if(modal.querySelector('.adressInput').value == false){
		alert('Введите ваш адресс')
		valid = false
	}
	if(valid) {
		order.Имя = modal.querySelector('.nameInput').value
		order.Номер = modal.querySelector('.numInput').value
		order.Адресс = modal.querySelector('.adressInput').value
		send()
		alert(`Спасибо за заказ, ${modal.querySelector('.nameInput').value},` + "В течении 5 минут с вами свяжется наш менеджер")
		// amount.innerHTML = 'XXX'
		// sum.innerHTML = "XXX"
		cancel()
		modal.style.display = 'none'
		overLay.style.display = 'none'
	}

}
