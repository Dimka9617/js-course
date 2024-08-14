'use strict'
// ----------------------------------
let randNumberOne = 1 + Math.floor(Math.random() * 10)
	alert(`first number is ready ${randNumberOne}`)
let randNumberTwo = 1 + Math.floor(Math.random() * 10)
	alert(`second number is ready ${randNumberTwo}`)
let userAttempt = 0
let userNumbOne,
	userNumbTwo

do {
	userNumbOne = parseInt(prompt("Guess the first number"))
	userNumbTwo = parseInt(prompt("Guess the second number"))
	if(userNumbOne === randNumberOne && userNumbTwo === randNumberTwo){
		alert("succes")
	}
	else{
		alert("try again")
		userAttempt++
	}

	
} while (userNumbOne !== randNumberOne || userNumbTwo!==randNumberTwo);	
alert(`Total attemps ${userAttempt}`)