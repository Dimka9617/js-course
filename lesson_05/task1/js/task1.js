'use strict'
// ===========================================
// let correctAnswer = 0
// for(let i = 0; i < 4; i++){
// 	const firstNumber = Math.floor(Math.random() * 9) + 1
// 	const secondNumber = Math.floor(Math.random() * 9) + 1
// 	let userAsk = parseInt(prompt(`What is result ${firstNumber} * ${secondNumber}`))
	
// 	if(userAsk === (firstNumber * secondNumber)){
// 		alert("Correct !")
// 		correctAnswer++
// 	}
// 	else
// 		alert("Oh no")
// }
// document.write(`${correctAnswer}`)


// Таблица умножения от 3 до 9 проверка
// let correctAnswer = 0
// let wrongAnswer = 0
// for (let i = 3; i <= 9; i++){
// 	for (let g = 1; g <=9 ; g ++){
// 		const userAsk = parseInt(prompt(`What is result ${i} * ${g}`))
// 		if(userAsk === i * g){
// 			alert("yes")
// 			correctAnswer++
// 		}
// 		else{
// 			alert("no")
// 			wrongAnswer++
// 		}
		
// 	}
	
// }
// document.write(`
// <table border="2px">
// 	<caption>Your result</caption>
// 		<thead>
// 			<tr>
// 				<th>Correct answer</th>
// 				<th>Wrong answer</th>
// 			</tr>
// 		</thead>
// 		<tr>
// 			<td>${correctAnswer}</td>
// 			<td>${wrongAnswer}</td>
// 		</tr>
// </table>
// `)

// C клавиатуры вводится имя ученика (5раз). Посчитать сколько Иванов 
// let studentIvan = 0
// for (let index = 1; index <= 5; index++) {
// 	const name = prompt(`Name ${index} student :`)
// 	if(name === 'Ivan')
// 	studentIvan++
// }
// alert(`Students with name Ivan :${studentIvan}`)

// let say = 0
// while (say < 15){
// 	document.write(`Hello <br>`)
// 	say++
// }



// let breadAmount = parseInt(prompt('Enter amount :'))
// while (breadAmount > 0){
// 	let customerAsk = parseInt(prompt(`We have ${breadAmount}. How many do u want to buy :, ''`))
// 	if(customerAsk <= breadAmount){
// 		alert("Enjoy")
// 		breadAmount -= customerAsk
// 	}
// 	else
// 	alert("Too many")
// }
// alert("Its all")


// С клавиатуры 6 раз генерируется число от 1 до 10 каждый раз дается возможность угадать число

// for (let i = 0; i < 6; i++){
// 	alert(`Lets try to guess the number ${i+1}`)
// 	let randomNumber = 1 + Math.floor(Math.random() * 10)
// 	let userRandom = parseInt(prompt("Enter the number :"))
// 	while ( userRandom !== randomNumber ) {
// 		alert("try again")
// 		userRandom = parseInt(prompt("Enter the number :"))
// 	}
// }


// let n =1,
// 	m=10
// 	while(n < m){
// 		document.write(`${n} - ${m} <br>`)
// 		n++
// 		m--
// 	}


// for(let n =1, m = 10; n < m; n++, m--){
// 	document.write(`${n} - ${m} <br>`)
// }

// ================================================================================
// let listAmount =parseInt(prompt("Enter the number of list :"))
// let itemAmount = parseInt(prompt("Enter the number of list items :"))

// for(let i = 0; i < listAmount; i++){
// 	document.write(`<ul>`)
// 	for(let l = 1; l <= itemAmount; l++){
// 		document.write(`<li>${l}</li>`)
// 	}
// 	document.write(`</ul>`)
// }



//                                   DO WHILE ---------------------------
// let sum = 0
// let number
// do {
// 	number = parseInt(prompt("Number :", ''))
// 	sum += number
// } while (number != 0);




// У Алены 0 грн. Хочет купить телефон за 10000. Помогает каждый раз маме и получает от 10 до 200 грн.Посчитать сколько раз ей надо помочь чтобы накопить на телефон
// let balance = 0
// const phonePrice = 10000
// let tasksQuantity = 0

// do {
// // let momMoney = Math.floor(Math.random() * 200) +1
// let momMoney = parseInt(prompt(`Give money :, I need ${balance - phonePrice}`))
// balance += momMoney
// tasksQuantity++
// } while (balance < phonePrice);
// document.write(`Quantity :${tasksQuantity}`)


// У Алены X грн. Хочет купить телефон за 10000. Помогает каждый раз маме и получает от 10 до 200 грн.Посчитать сколько раз ей надо помочь чтобы накопить на телефон
// let balance = parseInt(prompt("enter the balance:"))
// const phonePrice = 10000
// let tasksQuantity = 0
// while(balance<phonePrice){
// 	let momMoney = parseInt(prompt(`Give money :, I need ${balance - phonePrice}`))
// 	balance += momMoney
// 	tasksQuantity++
// }
// document.write(`Quantity ${tasksQuantity}`)



// ============================Приветствует учеников в 3классах(в каждом по 20человек) пока не встретили Ивана. Если встретили Ивана идем в другой класс
// let nameIvan ='Ivan'
// for(let i = 1; i<=3; i++){
// 	alert(`Going to the ${i} class ================`)
// 	for(let q = 1; q<=20; q++){
// 		let userName = prompt("Enter the name")
// 		if(userName === nameIvan) break
// 	}
// }


// ================================================================================HOMEWORK===========================================================================================

												// Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних
let evenNumbers = 0
let oddNumbers = 0
for (let i = 1; i <= 100; i++){
const randomNumber = Math.floor(Math.random() * 1000) + 1
if(randomNumber%2 === 0)
	evenNumbers++
else 
	oddNumbers++
}
document.write(`
<table style='margin:40px 20px'  border="2px">
	<tr>
		<th>Even numbers</th>
		<th>${evenNumbers}</th>
	</tr>
	<tr>
		<th>Odd numbers</th>
		<th>${oddNumbers}</th>
	</tr>

</table>
`)

																									// Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8)	
																									
// let result
// const seasonSpring = 'Spring'		
// const seasonSummer = 'Summer'				
// for(let i = 3; i <= 8; i++){
// 	switch (i) {
// 		case 3: result =`Month number ${i} is March - ${seasonSpring}`
// 			break;
// 		case 4: result =`Month number ${i} is May - ${seasonSpring}`
// 			break;
// 		case 5: result =`Month number ${i} is April - ${seasonSpring}`
// 			break;
// 		case 6: result =`Month number ${i} is June - ${seasonSummer}`
// 			break;
// 		case 7: result =`Month number ${i} is July - ${seasonSummer}`
// 			break;
// 		case 8: result =`Month number ${i} is August - ${seasonSummer}`
// 			break;
// 	}
// 	document.write(`<div style='font-size:45px; margin-bottom:20px;'>${result}</div>`)
// }																									

																									// Задача 0. Вивести на екран 8 кнопок з написом “Hello”.
// for(let i = 1; i <= 8; i++){
// 	document.write(`<button>Hello</button>`)
// }																									


																									// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). 
// let ItemNumber = parseInt(prompt("Enter the number :"))

// 	document.write(`<ul>`)
// 	for(let item = 0; item < ItemNumber; item ++){
// 		let itemContent = Math.floor(Math.random() * 100) + 1
// 		document.write(`<li>${itemContent}</li>`)
// 	}
// 	document.write(`</ul>`)
																									
																									// Задача 2. Створити 10 елементів для введення цін продуктів

	// document.write(`<table border='2px'>`)
	// for(let p = 1; p <=10; p++){
	// 	let priceProduct = ((Math.random() *100) +1).toFixed(2)
	// 	document.write(`<tr>
	// 	 <th>Product ${p}</th>
	// 	 <td>${priceProduct}</td>
	// 	</tr>`)
	// }
	// document.write(`</table>`)

																									// Задача 3. Вивести таблицю з одним рядком і  7 стовпцями.
																								

	// document.write(`<table style='font-size:35px' border='2px'>`)
	// for(let number = 1; number <= 7; number ++){
	// 	document.write(`
	// 	<td>${number}</td>
	// 	`)
	// }
	// document.write(`</table>`)
																								
																									// Задача 4. Вивести таблицю з 3 рядків і 7 стовпців
// const rowTable = 3
// const columnTable = 7

// 	document.write(`<table 
// 	border='2px'>
// 	<style>
// 	td{
// 		font-size: 35px;
// 	}
// 	</styl>
// 	`)
// 	for(let i = 1; i <= rowTable; i++){
// 		document.write(`<tr>`)
// 		for(let c = 1; c <=columnTable; c++){
// 			document.write(`<td>${c}</td>`)
// 		}
// 		document.write(`</tr>`)
// 	}
// 	document.write(`</table>`)
																								

// 																														// Задача 5. Вивести таблицю 3x3

// const columnTable = 3
// const rowTable = 3

// 	document.write(`<table border='2px'>
// 		<style>
//  			td{
//  				font-size: 35px;
//  			}
//  		</style>
// 	`)
// 	for(let r = 1; r <= 3; r++){
// 		document.write(`<tr>`)
// 		for(let c = 1; c <= 3; c++){
// 			document.write(`<td>${c}</td>`)
// 		}
// 		document.write(`</tr>`)
// 	}
// 	document.write(`</table>`)


														// Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
// const columnTable = 3
// const rowTable = 3
// const table = 3
// let columnNumber = 1
// document.write(`<div style="display:flex; gap:55px; padding:30px">`)
// for(let i = 1; i <= table; i++){
// 	document.write(`
// 	<table border='2px'>
// 	<style>
// 	td{
// 		font-size:45px;
// 	}
// 	</style>
// 	`)
// 	for(let r = 1; r <= 3; r++ ){
// 		document.write(`<tr>`)
// 		for(let c = 1; c <= 3; c++){
// 			document.write(`<td>${columnNumber}</td>`)
// 			columnNumber++
// 		}
// 		document.write(`</tr>`)
// 	}
// 	document.write(`</table>
// 	`)
// }
// document.write(`</div>`)

																						// Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком:
// let askUser = parseInt(prompt("Enter the number :"))
//  for (let n = 1; n <= askUser; n++){
// 	document.write(`<h1>Заголовок ${n}</h1>`) 
// 	for(let i = 1; i <= n; i++){
// 		document.write(`<p>Розділ ${n}, параграф ${i}</p>`) 
// 	} 
// }	

																						// Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 
// const min = parseInt(prompt("Enter the first number"))																						
// const max = parseInt(prompt("Enter the second number"))
// let sum = 0
// for(let i = min; i <= max; i++){
// if((i%2) != 0)
// sum += i
// }
// document.write(`<div style="font-size:25px">The sum of the all odd numbers is <strong>${sum}</strong></div>`)			


																						// Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.


																						// 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 


// const bill = parseFloat(prompt("Need to pay :"))
// let userTotal = 0
// let userPay = parseFloat(prompt("I pay:"))
// while(bill > userTotal){
// 	userTotal += userPay
// 	alert(`You paid ${userPay}, left to pay ${bill - userTotal}`)
// 	userPay = parseFloat(prompt("I pay:"))
// }
// alert('succes')

																						// Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.
// let total = 0		
// document.write(`<table style="font-size:25px" border='2px'>`)
// document.write(`<tr>
// 	<th>Month</th>
// 	<th>Temperature</th>
// </tr>`)
// for (let i = 1; i <= 12; i++){
// 	let temperature = parseInt(prompt("Enter the temperature:"))
// 	total += temperature
// 	document.write(`<tr>
// 	<th>${i}</th>
// 	<th>${temperature}C</th>
// 	</tr>
// 	`)
// }
// document.write(`<tr>
// <th>Average</th>
// <th>${(total / 12).toFixed(1)}C</th>
// </tr>`)
// document.write(`</table>`)


						// Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
// let week = parseInt(prompt("Enter the weeks number :"))	
// let sum =0
// for(let i = 1; i <= week; i++){
// 	let weekIncome = 0
// 	for(let d = 1; d<=7;d++){
// 		let incomeDay = parseFloat(prompt(`Week ${i} day ${d} income :`))
// 		 weekIncome+=incomeDay
// 	}
// 	document.write(`<div style="font-size:30px; margin-bottom:20px">Total income per week ${i} is <strong>${weekIncome}$</strong></div>`)
// 	sum +=weekIncome
// }			
// document.write(`<div style="font-size:30px; gap:20px; max-width:30%; padding:20px;background-color: yellow;">Total income is <strong>${sum}$</strong></div>`)


											//  Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 
// let rowCeils = parseInt(prompt("Enter the rows quantity :"))
// alert(`The rows are ${rowCeils}`)											
// let columnCeils = parseInt(prompt("Enter the columns quantity :"))	
// alert(`The columns are ${columnCeils}`)
// let ammo =parseInt(prompt("Enter the ammo quantity :"))		
// let shipRowPosition = Math.floor(Math.random() * rowCeils) + 1		
// let shipColumnPosition = Math.floor(Math.random() * columnCeils) + 1		
// let shipSank = false
// alert("The ship is on position! Fire")
//  loop : for (let a = ammo; a>0; a-- ){
// 	alert(`You have ${a} shells`)
// 	let shootRowPosition = parseInt(prompt(`Choose your coordinates for rows (from 1 to ${rowCeils}):`))
// 	let shootColumnPosition = parseInt(prompt(`Choose your coordinates for columns (from 1 to ${columnCeils}):`))
// 	if(shipRowPosition === shootRowPosition && shipColumnPosition === shootColumnPosition){
// 		alert(`You nail it! The ship is sinking to feed fish!`) 
// 		shipSank = true
// 		break loop
// 	}
// 	else  
// 		alert(`Miss! Try again`)
	
// }			 
// if(!shipSank)
// 	document.write(`You lost. The ship coordinates were :
// <div>row - <strong>${shipRowPosition}</strong></div>
// <div>column - <strong>${shipColumnPosition}</strong></div>
// <div>
// <img width='700' height='400' src="img/pirate.jpg" alt="Pirate">
// </div>
// `)

