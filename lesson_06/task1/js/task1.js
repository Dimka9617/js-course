'use strict'
// ----------------------------------
const boxes = 15
let total = 0
let transferToCar=0
 do {
	 transferToCar = parseInt(prompt(`We have ${boxes-transferToCar}. How many to transfer ? Left boxes ${boxes - total}`))
	if(transferToCar>(boxes-total) ){
		alert('error ask less')
		
	} else
		total +=transferToCar
	// alert(`Remain ${boxes-total}`)
	
	
} while (boxes > total);
alert('complete')

																				// 1. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.
// let number
// let sum = 0

// do {
// 	number = parseInt(prompt("Enter the number"))
// 	sum += number
// } while (number != 0);
// document.write(`<div style='font-size:30px'>The sum is <strong>${sum}</strong></div>`)

																				// 2.1. З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.
// let rowSymbol = ''
// let symbol
// do {
// 	symbol = prompt("enter the symbol")
// 	rowSymbol += symbol
	
// } while (symbol != 'a');		

// let reverseRowSymbol = rowSymbol.split('').reverse().join('')
// document.write(`${reverseRowSymbol}`)																	

																				// 3. З клавіатури вводиться початкове знчення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.
// let sum = parseInt(prompt("Enter the sum"))
// do {
// 	let numberAdd = parseInt(prompt("Add the number"))
// 	sum += numberAdd
	
// } while (sum < 100);																				
																					// 5. На екрані виводиться меню: 
																					// 1. Сказати «Привіт». 
																					// 2. Сказати «Зачекай». 
																					// 3. Сказати «До побачення». 
																					// 4. Вихід.
																					// Шляхом вибору пунктів меню виводити відповідні повідомлення, поки не буде вибрано пункт номер 4.
// alert(`
// 1. Сказати «Привіт». 
// 2. Сказати «Зачекай». 
// 3. Сказати «До побачення». 
// 4. Вихід.
// `)

// let askUser
// let result
// loop : while(askUser != 4){
// 	 askUser = parseInt(prompt("Enter the number"))
// switch(askUser){
// 	case 1 : result = alert('Hello')
// 	break
// 	case 2 : result =alert('Wait')
// 	break
// 	case 3 : result =alert('Bye')
// 	break
// 	case 4 : result = alert("You chose exit")
// 	break loop
// }
// }
																			// 9.З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його. 
// let userPassword 
// do {
// 	userPassword = parseInt(prompt("Enter the pass"))
// 	if(userPassword === 78)
// 	alert('ok')
// 	else
// 	alert('try again')
	
// } while (userPassword != 78);	
// alert("Succes")													
																		// 8. З клавіатури вводиться число. Знаходити суму цифр до тих пір. Поки сума не стане більшую за 20.
// let number 
// let sum = 0
// do {
// 	number= parseInt(prompt("enter the number"))
// 	sum += number
// 	alert(`The sum now is ${sum}`)
	
// } while (sum < 20);			
// alert(`the sum is ${sum}`)															

																			// 11. Комп’ютер загадує випадкове число від 1 до 10. Вгадати число шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача. 
// let randNumber = 1 + Math.floor(Math.random() * 10)
// alert(`The random number from 1 to 10 has been set`)
// let userAttempt = 0
// let userNumber 
// do {
//  userNumber = parseInt(prompt('Guees the number '))
//  if(userNumber === randNumber){
// 	alert('Wow succes at first try')
//  }
//  else{
// 	alert("Try again")
// 	userAttempt++
//  }
	
// } while (userNumber != randNumber);																		
// alert(`Total attemps :${userAttempt}`)

											// 10.З клавіатури вводиться вартість одиниці товару. Поки користувач не введе суму грошей, яка достатня для купівлі товару або не відмовиться від купівлі давати можливість вводити суму грошей.
// let price =parseInt(prompt("Enter the price"))
// let userMoney = 0
// let userPay=0

// 	let askUser = prompt("Do u want to buy a product? Say yes or no")
// 	if(askUser.toLowerCase()=== 'yes'){
// 		do {
// 			userMoney = parseInt(prompt("Pay"))
// 			userPay+=userMoney
			
// 		} while (userPay<price);
// 		alert('Succes')
// 	}
// 	else 
// 	alert("User refused to buy a product")

																		// 11.1. Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.
// let randNumberOne = 1 + Math.floor(Math.random() * 10)
// 	alert(`first number is ready ${randNumberOne}`)
// let randNumberTwo = 1 + Math.floor(Math.random() * 10)
// 	alert(`second number is ready ${randNumberTwo}`)
// let userAttempt = 0
// let userNumbOne,
// 	userNumbTwo

// do {
// 	userNumbOne = parseInt(prompt("Guess the first number"))
// 	userNumbTwo = parseInt(prompt("Guess the second number"))
// 	if(userNumbOne === randNumberOne && userNumbTwo === randNumberTwo){
// 		alert("succes")
// 	}
// 	else{
// 		alert("try again")
// 		userAttempt++
// 	}

	
// } while (userNumbOne !== randNumberOne || userNumbTwo!==randNumberTwo);	
// alert(`Total attemps ${userAttempt}`)

																					// 1. Використовуючи цикли вивести на екран 20 символів «о».
// for(let i = 0; i< 20; i++){
// 	document.write("o")
// }
																								// 2. Відобразити трикутник за допомогою символів «о»
// const str = 'o'
// const codeStr = str.charCodeAt(0)
// console.log(codeStr)

// // for(let i = 1; i <= 7; i++){
// // 	for(let n = 1; n <= i; n++){
// // 		document.write(`${String.fromCharCode(codeStr)}`)
// // 	}
// // 	document.write(`<br>`)
// // }
																					
// document.write(`<div width:40; style='text-align:center'>`)
// for(let i = 1; i <= 7; i++){
// 	for(let n = 1; n <= i; n++){
// 		document.write(`${String.fromCharCode(codeStr)}`)
// 	}
// 	document.write(`<br>`)
// }
// document.write(`</div>`)



// const str = 'o'
// const codeStr = str.charCodeAt(0)
// console.log(codeStr)
// for (let i = 1; i<=10; i++){
// 	for(let n = 10; n >=i; n--){
// 		document.write(`${String.fromCharCode(codeStr)}`)
// 	}
// 	document.write(`<br>`)
// }



// const str = 'o'
// const codeStr = str.charCodeAt(0)
// console.log(codeStr)
// document.write("<div style='text-align:center'>")
// for (let i = 1; i<=10; i++){
// 		for(let n = 10; n >=i; n--){
// 			document.write(`${String.fromCharCode(codeStr)}`)
// 		}
// 		document.write(`<br>`)
// 	}
// 	document.write("</div>")
																																	// 4. Побудувати ялинку
// const str = 'o'
// const codeStr = str.charCodeAt(0)
// console.log(codeStr)		
		
// for(let i=0; i<3; i++){
// 	for(let n = 1; n<=5; n++){
// 		for(let x = 1; x<=n; x++){
// 			document.write(`${String.fromCharCode(codeStr)}`)
// 		}
// 		document.write("<br>")
// 	}
// }																												

																								// 5. Інвестор вклав   тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

// const sum = parseInt(prompt("Enter the price for the bank"))
// const bankPercent = 20
// let totalSum=sum
// const sumPerYear = sum * bankPercent / 100
// for(let y = 1; y <=20; y++){
	
// 	totalSum+=sumPerYear
// }
// document.write(`Total income after 20 years - ${totalSum}`)


																								// 6. Інвестор вклав   тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.
// const sum = parseInt(prompt("Enter the price for the bank"))
// const taxPercent = 5
// const bankPercent = 20
// const sumPerYear = sum * bankPercent / 100
// let totalSum = sum

// for (let i = 0; i < 20; i++){
// totalSum += sumPerYear
// }
// let tax = totalSum * taxPercent / 100
// document.write(`The tax is <strong>${tax}</strong> <br>
// Income is <strong>${totalSum-tax}</strong>
// `)

																									// 16. У бригаді, що працює на сінокосі, є N сінокосарок. Перша сінокосарка працювала m годин, а кожна наступна на 10 хв більше, ніж попередня. Скільки годин працювала вся бригада?
// const quantityEquip = parseInt(prompt('Enter the quantity'))
// let workHoursPerOne = parseInt(prompt("Enter the hours"))
// const min = 10
// const hours = min/60
// let workHoursNext 

//  for(let i = 1; i<=4; i++){
// 	workHoursPerOne+=hours
//  }
//  document.write(`Total hours is ${workHoursPerOne}`)
