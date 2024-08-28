"use strict";
// ------------------------

// let arr = new Array(7).fill(5, 1, 3)
// document.write(`${arr}`)
// console.log(arr)
// ================================================================================
// let arr = [3, 1, 5, 7, 8, -23, -15, 5 ,-34]
// for (const el of arr) {
// 	if(el < 0) document.write(`${el}`)
// }
// ================================================================================
// let sayHello = () => alert('Hello')
// sayHello()

// function actionFunc(toDoFunc, userName){
// 	toDoFunc(userName)
// }

// // (name)=>alert(`Hello ` + name)

// // actionFunc((name)=> alert('Hello' + name))

// actionFunc((name)=> alert('Hello' + name), ' Ivan')



// function sayHello(){
// 	alert(`Hello`)
// }

// let sayHello = () => alert(`Hello`)


// function greetingUser(actionFunc, userName){
// 	actionFunc(userName)
// }


// greetingUser((userName) => alert(`Hello` + userName), ' Ivan')




// function sayHello(name){
// 	alert(`Hello` + name)
// }
// (name)=>alert(`Hello` + name)

// function greetingUser(myFunc, userName){
// 	myFunc(userName)
// }

// // greetingUser(sayHello, 'Dima')
// greetingUser((name)=>alert(`Hello` + name), 'Dima')

// ================================================================================
// let arr = [3, 5, 1, 3, -2, -10, -3]

// function greaterZero(value){
// 	if(value > 0) document.write(`${value} <br>`)
// }

// for(let i = 0; i < arr.length; i++){
// 	 greaterZero(arr[i])
// }

// for (const value of arr) {
// 	if(value > 0) document.write(`${value}`)
// }

// arr.forEach(greaterZero)
// arr.forEach((value) =>{	if(value > 0) document.write(`${value} <br>`)})


// ================================================================================

// let prices = [3, 23, 5, 423, 123, 764]
// let sum = 0
// prices.forEach((element)=>
// {if (element > 100) sum+=element})
// document.write(`${sum}`)
// FOR EACH НЕ МЕНЯЕТ САМ ЭЛЕМЕНТ В МАССИВЕ. УКАЗЫВАЕМ ФУНКЦИЮ С ЭЛЕМЕНТОМ, ИНДЕКСОМ, МАССИВ(value, index, arr)================================================================================

// let temperatures = [-23, 54, 312, 43, 76, -45, -34, -767]
// temperatures.forEach((value, index, arr)=>
// {if(value <0) arr[index] = 0})
// document.write(`${temperatures}`)


// let temperatures = [-23, 54, 312, 43, 76, -45, -34, -767]
// for(let i = 0; i < temperatures.length; i++){
// 	if(temperatures[i] < 0) temperatures[i] =0
// }
// document.write(`${temperatures}`)
// ================================================================================

// let ages = [54, 43, 23, 54, 86, 95]
// ages.forEach(age=>
// document.write(age >=65? `${age} - Retired <br>`:`${age} - Worker<br>`)
// )
// ================================================================================
// const arr1 = [1,3,5,7]
// const arr2 = Array.from(arr1,
// 	(element,index) => element * 3)
// document.write(`${arr2}`)

// Дан список имен пользователей.Создать функции чтобі прощаться или здороваться с каждім.

// function sayHello(userList){
// 	for (const user of userList) {
// 		let msg = `Hello ${user} <br>`
// 		document.write(`${msg}`)
// 	}
// }

// function sayBye(userList){
// 	for (const user of userList) {
// 		let msg = `Bye ${user} <br>`
// 		document.write(`${msg}`)
// 	}
// }

// let userList = ['Ivan', 'Kostya', 'Dima']
// let userAnswer = prompt('1)say hi\n2)say bye')
// switch(userAnswer){
// 	case '1' : sayHello(userList)
// 	break;
// 	case '2' : sayBye(userList)
// 	break;
// }


// function helloMsg(user){return `Hello ${user} <br>`}
// function byeMsg(user){return `Bye ${user} <br>`}

// function sayMsg(userList, msgCreate){
// 	for (const user of userList) {
// 		let msg =msgCreate(user)
// 		document.write(`${msg}`)
// 	}
// }

// let userList = ['Ivan', 'Kostya', 'Dima']
// let userAnswer = prompt('1)say hi\n2)say bye')
// switch(userAnswer){
// 	case '1' : sayMsg(userList, (user)=>`Hello ${user} <br>`)
// 	break;
// 	case '2': sayMsg(userList, (user)=>`Bye ${user} <br>`)
// 	break;
// }


// Выввести на экран положительные значения
// let values = [3, -2, -1, 5, 7, -6]

// function showValue(value){
// 	if(value < 0) document.write(`${value}`)
// }

// for (const val of values) {
// 	showValue(val)
// }

// // САМЫЙ ОТПИМАЛЬНЫЙ ВАРИАНТ НО НЕ САМЫЙ БЫСТРЫЙ
// for (const val of values) {
// 	if(val < 0) document.write(`${val}`)
// }

// for(let i = 0; i< values.length; i++){
// 	// 
// 	showValue(values[i])
// }

// values.forEach((value) =>
// {if(value < 0) document.write(`${value}`)}
// )


// const arr1 = [1, 3, 5]
// const arr2 = Array.from(
// 	arr1,
// 	(element) => element *3
// )
// document.write(`${arr2}`)



// =========================================================================================================================================================================================
																				// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
if(confirm("Start")){
	const userNum = parseInt(prompt("Enter the number"))	
	let arr = new Array(userNum).fill(0)
	document.write(`<div>${arr}</div>`)
}																				
									//  --------------------------------------Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.------------------------------------------------------------------------------------------------------------------------
// if(confirm("Start")){
// 	const userNum = parseInt(prompt("Enter the number"))	
// 	let arr = new Array(userNum).fill(1,0, userNum/2).fill(7, userNum/2)
// 	document.write(`${arr}`)
// }
								//  --------------------------------------Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.------------------------------------------------------------------------------------------------------------------------	
// 	if(confirm("Start")){
// 	const userNum = parseInt(prompt("Enter the number"))	
// 	let arr = new Array(userNum).fill(1, 0, 5).fill(7, 5)
// 	document.write(`${arr}`)
// }
//  --------------------------------------Дано масив елементів. Вивести на екран елементи, що більші за 100------------------------------------------------------------------------------------------------------------------------	
// if(confirm("Start")){
// 		const userNum = parseInt(prompt("Enter the number of values"))
// 		const values = getArrValues()
// 		// -------------
// 		function getRandomValues(min,max){
// 			return 1+ Math.floor(Math.random() * (200-1+1))
// 		}
// 		// -------------
// 		function getArrValues(){
// 			const values = []
// 			for(let i=0; i<userNum; i++){
// 				const value = getRandomValues(1,200)
// 				values.push(value)
// 			}
// 			return values
// 		}
// 		document.write(`<div>${values}</div>`)
// 		// -----------------------------------
// 		for (const value of values) {
// 			if(value > 100) document.write(`${value}<br>`)
// 		}
// 	}	

//  --------------------------------------Дано масив елементів. Знайти добуток додатних елементів------------------------------------------------------------------------------------------------------------------------
// if(confirm('Start')){
// 	const userNum = parseInt(prompt("Enter the number of values"))
// 	const values = getArrValues()
// // -----------------------------------
// 	function getRandomValues(min, max){
// 		return min + Math.floor(Math.random() * (max- min +1))
// 	}
// // -----------------------------------
// 	function getArrValues(){
// 		const values = []
// 		for(let i = 0; i < userNum; i++){
// 			const value = getRandomValues(-10, 10)
// 			values.push(value)
// 		}
// 		return values
// 	}
// // ---------------------------
// let product = 1
// function getPosProduct(value){
// 	if(value>0) product*=value
// }
// // -----------------------------------
// for (const value of values) {
// 	getPosProduct(value)
// }
// // -----------------------------------
// document.write(`${values}`)
// document.write(`<div><strong>The product is: ${product}</strong></div>`)


// const arr = [3, -3,-2,4,-3, 4]
// let product = 1

// function getProduct(value){
// 	if(value>0) product *= value
// }

// for (const value of arr) {
// 	getProduct(value)
// }

// document.write(`${product}`)
// }

																																// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
// if(confirm("Start")){
// 	const arr = [3, 5, 1, 6, 0, -5]
// 	// FOR EACH--------------------------------------------
// 	arr.forEach((element)=>{
// 		if(element > arr[0]) element*=2
// 		document.write(`${element}<br>`)
// 	})
// 	document.write(`<hr>`)
// 	// FOR OF--------------------------------------------
// 	for (let value of arr) {
// 		if(value > arr[0]) value*=2
// 		document.write(`${value}<br>`)
// 	}
// 	document.write(`<hr>`)
// 	// MAP--------------------------------------------
// 	const arrTwo = arr.map((element,index, baseArr) => 
// 	{if (element >baseArr[0]) 
// 	return element*=2
// 	else 
// 	return element})
// 	document.write(`${arrTwo}`)
// }


// .Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.-------------------------------------------------------------------
// if(confirm("Start")){
// const userNum = parseInt(prompt("Enter the number of prices"))
// const prices = pricesArr()
// const limitPrice = 100
// const percentDiscount = 30


// // -------------------------------
// function getRandomPrice(min,max){
// 	return min+ Math.floor(Math.random() * (max-min+1))
// }
// // -------------------------------
// function pricesArr(){
// 	const prices = []
// 	for(let i = 0; i < userNum; i++){
// 		const price = getRandomPrice(100,5000)
// 		prices.push(price)
// 	}
// 	return prices
// }
// // -------------------------------
// const pricesDiscount = prices.map((element)=> {
// 	if(element > limitPrice) return element - element*percentDiscount/limitPrice
// 	else return element
// })

// // -------------------------------
// document.write(`<div>${prices}</div>`)
// document.write(`<div>${pricesDiscount}</div>`)

// // FOREACH---------------------------------------------------------------------------------------------------------
// document.write(`<div>${prices}</div>`)
// 	prices.forEach(element => {
// 		if(element > 100) {element=element - element*percentDiscount/limitPrice}
// 		document.write(`<div>${element}</div>`)
// 	});
// 	prices.forEach(
// 		(element, index, baseArr)=>{if(baseArr[index]>limitPrice){
// 			element =element - element*percentDiscount/limitPrice
// 		}
// 		document.write(`<div>${element}</div>`)
// })
// }

// ============================================================Дано масив імен. Сформувати масив з перших літер цих імен.
// if(confirm('Start')){
// const names = ['Dima', 'Anton', 'Olya', 'Vika']
// const firstLetterName = names.map(
// 	(element)=>element[0]
// )
// document.write(`${firstLetterName}`)
// }

// =============================================================== Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
// if(confirm('Start')){
// // ---------------------------------
// function getRandomValue(min, max){
// 	return min + Math.floor(Math.random()* (max-min + 1))
// }
// // ---------------------------------
// function getArrPrices(){
// 	const prices = []
// 	for(let i = 0; i < 5; i++){
// 		const price = getRandomValue(300,500)
// 		prices.push(price)
// 	}
// 	return prices
// }
// // ---------------------------------
// const prices = getArrPrices()
// const tax = 20
// const taxValue = prices.map(
// 	(value) =>value*tax/100
// )
// document.write(`<div>${prices}</div>`)
// document.write(`<div>${taxValue}</div>`)
// }