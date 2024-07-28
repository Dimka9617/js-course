'use strict'
// ---------------------------------------------------------------------------------------------
let price = parseFloat(prompt('Enter the price', ''))
let budget = parseFloat(prompt('Enter the budget', ''))
let balance = budget - price


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

if ( budget >= price){
	alert("The purchase completed")
	const ticketLottery = 4
	if( balance >= ticketLottery){
		let userQuestion = prompt(`Wanna get a lottery ticket? Say YES or NO`)
		let answerResult = (userQuestion === 'YES') ? alert('Yaahhoooo') : alert('Next time')
	}
} else
	alert('Not enough money')
	
