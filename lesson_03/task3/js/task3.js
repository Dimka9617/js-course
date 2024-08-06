'use strict'
// -----------------------------------
// const minNumber = 1
// const maxNumber = 5
// alert('You have 2 tries to guess the number from 1 to 5')
// let randomNumber = Math.floor(Math.random() * 5) + 1

// let enterNumber = parseInt(prompt("Enter the number:", ""))
// if(enterNumber === randomNumber){
// 	alert("You got it")
// }
// else if (enterNumber !== randomNumber){
// 	alert("No, you have last try")
// 	 enterNumber = parseInt(prompt("Enter the number:", ""))
// 	if(enterNumber === randomNumber)
// 		alert('Lucky you')
// 	else
// 		alert(`Noo, you lost, the correct number is ${randomNumber}`)
// }

// ПРАВИЛЬНЫЙ ВАРИАНТ КОДА

const minNumber = 1
const maxNumber = 5
alert('You have 2 tries to guess the number from 1 to 5')
let randomNumber = Math.floor(Math.random() * 5) + 1

let enterNumber = parseInt(prompt("Enter the number:", ""))
if(enterNumber === randomNumber){
	alert("You got it")
}
else
alert("No, you have last try")
enterNumber = parseInt(prompt("Enter the number:", ""))
if(enterNumber === randomNumber){
	alert("Lucky you")
}
else
	alert(`Noo, you lost, the correct number is ${randomNumber}`)

	



	


