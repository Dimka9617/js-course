'use strict'
// ---------------------------------------------------------------------------------------------
// let price = parseFloat(prompt('Enter the price', ''))
// let budget = parseFloat(prompt('Enter the budget', ''))



// if(budget >= price){
// 	const ticketLottery = 4
// 	alert("The purchase completed")
// 	if( balance >= ticketLottery){
// 		let answerYes = 'yes'
// 		let answerNo = 'no'
// 		let userAnswer = prompt(`Wanna get a ticker lottery? Say ${answerYes} or ${answerNo}`)
// 		if(userAnswer === answerYes)
// 			alert('Yaahooo')
// 		else
// 			alert('Next time')
		
// }
// else
// 	alert("Not enough money")
// }


// if( budget >= price) {
// 	alert("The purchase completed")
// 	const ticketLottery = 4
	
// 	if( balance >= ticketLottery){
// 		let answerYes = 'yes'
// 		let answerNo = 'no'
// 		let userAnswer = prompt(`Wanna get a ticker lottery? Say ${answerYes} or ${answerNo}`)
// 		if( userAnswer === answerYes)
// 			alert('Yaahooo')
// 		else
// 		 	alert('Next time')
// 	}

// }
// else(
// 	alert("Not enough money")
// )

// if ( budget >= price){
// 	alert("The purchase completed")
// 	const ticketLottery = 4
// 	let balance = budget - price
// 	if( balance >= ticketLottery){
// 		let userQuestion = prompt(`Wanna get a lottery ticket? Say YES or NO`)
// 		let answerResult = (userQuestion === 'YES') ? alert('Yaahhoooo') : alert('Next time')
// 	}
// } else
// 	alert('Not enough money')
	


 //З клавіатури вводиться кількість балів. Вивести на екран оцінку прописом (задовільно, добре чи відмінно).
//  let grade = parseInt(prompt("Enter the grade :", ''))
//  let result
//  switch(grade){
// 	case 5 : result = 'perfect'
// 	break
// 	case 4 : result ='good'
// 	break
// 	case 3 : result = 'okay'
// 	break
// 	case 2 :
// 	case 1 : result = 'bad'
// 	break
// 	default : result = 'wrong number'
// 	break
//  }
//  document.write(`Your grade is ${result}`)


   //Міні перекладач. Вводиться одне із слів "table", "car", "bus", 'man'. Вивести переклад
	// let wordToTranslate = prompt("Enter the word :")
	// let meaning
	// switch(wordToTranslate.toLocaleLowerCase()){
	// 	case 'table' : meaning = 'стол'
	// 	break
	// 	case 'car' : meaning = 'авто'
	// 	break
	// 	case 'bus' : meaning = 'автобус'
	// 	break
	// 	case 'man' : meaning = 'мужчина'
	// 	break
	// 	default:
	// 		meaning = "enter the word"
	// 		break
	// }
	// alert(`${meaning}`)


	//Вводиться катеорія користувача. Вивести, які дія він може виконувати
      // admin - read, edit, add
      // manager - read, edit
      // user - read
		// const userType = prompt("User type :")
		// let permission = ''
		// switch(userType){
		// 	case 'admin' :
		// 		permission += 'read, edit, add'
		// 	break
		// 	case 'manager' :
		// 		permission += 'read, edit'
		// 	break
		// 	case 'user' :
		// 		permission += 'read'
		// 	break
		// 	default:
		// 		permission += 'unknown user, error'
				
		// }
		// alert(`Hello ${userType}! You can ${permission}`)

		let month = parseInt(prompt(''))
		let currentM = (month - 1) % 12 + 1
		alert(`${currentM}`)