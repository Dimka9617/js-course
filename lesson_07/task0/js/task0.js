'use strict'
// ------------------------
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

function getSeasonOfYear(){
	let monthNumber = parseInt(prompt("Enter the month number"))
	let result
	if(monthNumber <= 2 || monthNumber === 12)
	result ='Its winter'
	else if (monthNumber <= 5)
	result ='Its spring'
	else if(monthNumber <=8)
	result ='Its summer'
	else if(monthNumber <=11)
	result = 'Its autumn'
// ----------------------
	return result
}
let season = getSeasonOfYear()
document.write(`<div>${season}</div>`)