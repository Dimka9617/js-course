'use strict'
// ------------------------

// function getRandDay() {
// let randDay = 1 + Math.floor(Math.random() * 5)
// let dayTitle
// switch (randDay) {
// 	case 1:
// 		dayTitle ='Monday'
// 		break;
// 	case 2:
// 		dayTitle ='Tuesday'
// 		break;
// 	case 3:
// 		dayTitle ='Wednesday'
// 		break;
// 	case 4:
// 		dayTitle ='Thursday'
// 		break;
// 	case 5:
// 		dayTitle ='Friday'
// 		break;
// }
// return dayTitle
// }

// for (let i =1; i<=2; i++){
// 	document.write(`${getRandDay()}`)
// }

// function roulette(){
// 	const score = -100 + Math.floor(Math.random() * (500 - -100 + 1))
// 	document.write(`The score is ${score}`)
// 	return 77
// }
// let totalScore = roulette()
// document.write(`Score is ${totalScore}`)


// function greetingUser(lang){
	
// 	let result
// 	switch (lang) {
// 		case 'ua':
// 			result ='Privet'
// 			break;
	
// 		case 'en':
// 			result ='Hello'
// 			break;
// 	}
// 	return result
	
// }
// // greetingUser('ua')
// alert(`${greetingUser('en')}`)

																		// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
// function getSeasonOfYear(monthNumber){
// 	let result
// 	if(monthNumber <=2 || monthNumber === 12)
// 	result ='Its winter'
// 	else if (monthNumber <= 5)
// 	result ='Its spring'
// 	else if(monthNumber <=8)
// 	result ='Its summer'
// 	else if(monthNumber <=11)
// 	result = 'Its autumn'
// // ----------------------
// 	return result
// }
// document.write(`${getSeasonOfYear(3)}`)

// function getSeasonOfYear(){
// 	let monthNumber = parseInt(prompt("Enter the month number"))
// 	let result
// 	if(monthNumber <=2 || monthNumber === 12)
// 	result ='Its winter'
// 	else if (monthNumber <= 5)
// 	result ='Its spring'
// 	else if(monthNumber <=8)
// 	result ='Its summer'
// 	else if(monthNumber <=11)
// 	result = 'Its autumn'
// // ----------------------
// 	return result
// }
// let season = getSeasonOfYear()
// document.write(`${season}`)

																													// Задача 1. Створити функцію, яка за номером місяця повертає його назву.

// let userNumber = parseInt(prompt("Enter the month number"))
// function getNameOfTheMonth (userNumber) {
// 	let result
// 	switch (userNumber) {
// 		case 1:
// 			result ='January'
// 			break;
	
// 		case 2:
// 			result ='February'
// 			break;
	
// 		case 3:
// 			result ='March'
// 			break;
	
// 		case 4:
// 			result ='April'
// 			break;
	
// 		case 5:
// 			result ='May'
// 			break;
	
// 		case 6:
// 			result ='June'
// 			break;
	
// 		case 7:
// 			result ='July'
// 			break;
	
// 		case 8:
// 			result ='August'
// 			break;
	
// 		case 9:
// 			result ='September'
// 			break;
	
// 		case 10:
// 			result ='October'
// 			break;
	
// 		case 11:
// 			result ='November'
// 			break;
	
// 		case 12:
// 			result ='December'
// 			break;
// 	}
// 	return result
// }
// document.write(`<div>${getNameOfTheMonth(userNumber)}</div>`)


																									// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
// function showTypeDay(){
// let dayNumber = parseInt(prompt("Enter the number of day"))
// let result
// switch(dayNumber){
// 	case 1 :
// 	case 2 :
// 	case 3 :
// 	case 4 :
// 	case 5 : result ='Working day'
// 		break;
// 	case 6:
// 	case 7: result ='Day off'
// 		break;
// }
// return result
// }	
// document.write(`${showTypeDay()}`)																								
																														// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
																														// 1)суму;
																														// 2)добуток;
																														// 3)середнє арифметичне;
																														// 4)мінімальне значення. 
// function getMathSum (a, b, x, y){
// let sum = a + b + x + y
// return sum
// }
// let sumResult = getMathSum(4, 19, 54, 43)
// document.write(`<div>${sumResult}</div>`)
// // -------------------------------------------------------
// function getMathProduct (a, b, x, y){
// 	let product = a * b * x * y
// 	return product
// }
// let productResult = getMathProduct(12, 3, 2, 1)
// document.write(`<div>${productResult}</div>`)
// // --------------------------------------------------------
// function getMathAverage (a, b, x, y){
// 	let average = (a + b + x + y) / 4
// 	return average
// }
// let averageResult = getMathAverage(54, 79, 434, 4)
// document.write(`<div>${averageResult}</div>`)
// --------------------------------------------------------
// function getMinValue( a, b, x, y){
// 	let minValue
// 	// -------------------------------------
// 	minValue = a < b ? a : b
// 	minValue = minValue < x ? minValue : x
// 	minValue = minValue < y ? minValue : y
// 	// -------------------------------------
// return minValue
// }
// let minResult = getMinValue(235, 5, -90, -1100)
// document.write(`<div>${minResult}</div>`)


													// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
// let numOne = parseFloat(prompt("Enter the first number"))
// let numTwo = parseFloat(prompt("Enter the second number"))
// let numThree = parseFloat(prompt("Enter the third number"))
													
// function getMathInfo (a, b, c) {
// let evenNumbers = 0
// let positiveNumbers = 0
// let greaterOneHundred = 0
// // -------------------------------
// a % 2 === 0 ? evenNumbers++ : 'null'
// if ( b % 2 === 0) evenNumbers++
// if ( c % 2 === 0) evenNumbers++
// // --------------------------------
// if( a > 0 ) positiveNumbers++
// if( b > 0 ) positiveNumbers++
// if( c > 0 ) positiveNumbers++
// // --------------------------------
// if( a > 100 ) greaterOneHundred++
// if( b > 100 ) greaterOneHundred++
// if( c > 100 ) greaterOneHundred++
// // ----------------------------------
// return {
// 	evenNumbers,
// 	positiveNumbers,
// 	greaterOneHundred
// }
// // --------------------------------
// }
// let total = getMathInfo (numOne, numTwo, numThree)
// document.write(`<div style='font-size:28px'>Even : <strong>${total.evenNumbers}</strong></div>
// <div style='font-size:28px'>positive :<strong> ${total.positiveNumbers}</strong></div>
// <div style='font-size:28px'>greater than 100 : <strong>${total.greaterOneHundred}</strong></div>
// `)				
						
// function getNumbersInfo(){
// 	let even = 0
// 	let positive = 0
// 	let greaterOneHundred = 0
// // ----------------------------------------------------------
// 	for(let i = 0; i < 3; i++){
// 		let userNumber = parseFloat(prompt("Enter the number"))
// 		userNumber % 2 === 0 ? even++ : 'null'
// 		userNumber > 0 ? positive++ : 'null'
// 		userNumber > 100 ? greaterOneHundred++ : 'null'
// 	}
// 	// -------------------------------------------------------
// 	document.write(`even: ${even} <br>
// 			positive: ${positive} <br>
// 			greater than 100: ${greaterOneHundred}
// 	`)
// 	// -------------------------------------------------------
// 	return{
// 		even,
// 		positive,
// 		greaterOneHundred
// 	}
// }
// getNumbersInfo()

																															// Задача 5. Створити окремі функції, які переводять:
																															// 1)	Сантиметри у дюйми;
																															// 2)	Кілограми у фунти;
																															// 3)	Кілометри у милі.
																																																																																										
// function getCmToInches(lengthNumber){
// 	return lengthNumber * 0.39
// }
// let resultInch = getCmToInches(5)
// document.write(`<div style='font-size:24px'>${resultInch.toFixed(2)} inches</div>`)
// // ------------------------------------------------------------------------------------------------
// function getKgToPounds(kgAmount){
// 	return kgAmount * 0.45
// }
// let resultPounds = getKgToPounds(300)
// document.write(`<div style='font-size:24px'>${resultPounds.toFixed(2)} pounds</div>`)
// // ------------------------------------------------------------------------------------------------
// function getKmToMiles(kmNum){
// 	return kmNum * 0.6213
// }
// let resultMiles = getKmToMiles(100)
// document.write(`<div style='font-size:24px'>${resultMiles.toFixed(2)} miles</div>`)


																											// ПРИМЕР ВОЗВРАТА НЕСКОЛЬКИХ ОБЪЕКТОВ С ФУНКЦИИ
// function getData(a, b){
// 	return{
// 		sum : a+b,
// 		prod : a*b
// 	}
// }
// let result = getData(2,3)
// document.write(`The sum is ${result.sum} <br>
// the product is ${result.prod}`)

																					// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
// function createTable (rowNumber, columnNumber, text){
// 	document.write(`<table>`)
// 	for(let r=1; r<=rowNumber; r++){
// 		document.write(`<tr>`)
// 		for(let c=1; c<=columnNumber; c++){
// 			document.write(`<td>${text}</td>`)
// 		}
// 		document.write(`</tr>`)
// 	}
// 	document.write(`</table>`)
// }																					
// const rowNumber = parseInt(prompt("Enter the rows number"))
// const columnNumber = parseInt(prompt("Enter the rows number"))
// let text = prompt("Enter the text")
// // let result = createTable(3,6,'JavaScript')
// createTable(rowNumber, columnNumber, text)


																				// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
// function showImage(){
// 	const randomImg = 1 + Math.floor(Math.random() * 4)
// 	document.write(`<img src="img/${randomImg}.webp" alt="Image">`)
// }																				
// showImage()

																			// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
// function showBanner(){
// 	document.write(`
// 	<article>
// 		<h1>FC Barcelona </h1>
// 			<a target="_blank" href="https://www.youtube.com/watch?v=yMkJht0GxOs"> 
// 				<img width='1300' height='1000' src="img/gettyimages-104108559-2048x2048.jpg" alt="Image">
// 			</a>
// 	</article>`)
// }
// showBanner()																			
																				// Задача 9. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
// function getMinusTemperature(a, b, c, d, x, y, z){
// 	let minusTemperature = 0
// 	a < 0 ? minusTemperature++ : 'null'
// 	b < 0 ? minusTemperature++ : 'null'
// 	c < 0 ? minusTemperature++ : 'null'
// 	d < 0 ? minusTemperature++ : 'null'
// 	x < 0 ? minusTemperature++ : 'null'
// 	y < 0 ? minusTemperature++ : 'null'
// 	z < 0 ? minusTemperature++ : 'null'
// 	// ------------------------------------
// 	return minusTemperature
// }		
// document.write(`Days with minus temperature: ${getMinusTemperature(23, 54, 0, -24, -34, 4, 1)}`)	
																					// Задача 10. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.		
// function getAveragePositiveTemp(){
// 	let positiveNumber = 0
// 	let positiveSum = 0
// 	for(let i = 1; i <=12; i++){
// 		const userTemperature = parseInt(prompt("Enter the temperature"))
// 		if( userTemperature > 0){
// 			positiveNumber++
// 			positiveSum+=userTemperature
// 		}
// 	}
// 	let averagePositiveTemp = positiveSum / positiveNumber
// 	return averagePositiveTemp
// }						
// document.write(`During the year average positive temperature was: ${getAveragePositiveTemp().toFixed(1)}C`)																														