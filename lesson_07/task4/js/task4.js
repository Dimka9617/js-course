'use strict'
// ------------------------
function getNumbersInfo(){
	let even = 0
	let positive = 0
	let greaterOneHundred = 0
// ----------------------------------------------------------
	for(let i = 0; i < 3; i++){
		let userNumber = parseFloat(prompt("Enter the number"))
		userNumber % 2 === 0 ? even++ : 'null'
		userNumber > 0 ? positive++ : 'null'
		userNumber > 100 ? greaterOneHundred++ : 'null'
	}
	// -------------------------------------------------------
	document.write(`<div>even: ${even}</div> 
			<div>positive: ${positive} </div>
			greater than 100: ${greaterOneHundred}
	`)
	// -------------------------------------------------------
	return{
		even,
		positive,
		greaterOneHundred
	}
}
getNumbersInfo()