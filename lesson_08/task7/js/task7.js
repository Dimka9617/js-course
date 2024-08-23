"use strict";
// ------------------------
if(confirm(`Start`)){
// -------------------------------------------------------------
function getRandomValue(minValue, maxValue){
	return -500 + Math.floor(Math.random() * (500 - -500 + 1))
}
// -------------------------------------------------------------
function getArrayPrize(){
	const arrPrizes = []
	for(let i = 0; i < 10; i++){
		const arrPrize = getRandomValue(-500,500)
		arrPrizes.push(arrPrize)
	}
	return arrPrizes
}
// -------------------------------------------------------------
function getUserPrize(arrPrizes){
	let totalPrize = 0
	let userAnswer = 'yes'
	
 while (userAnswer === 'yes') {
	userAnswer = prompt('Game yes/no')
	if(userAnswer !== 'yes') break
	let userNumber = parseInt(prompt("Enter the number 1 to 10"))
	alert(`You won ${arrPrizes[userNumber - 1]}`)
		totalPrize+=arrPrizes[userNumber-1]
 }
 return totalPrize
}
// -------------------------------------------------------------
const arrPrizes = getArrayPrize()
const result = getUserPrize(arrPrizes)
// ------------
document.write(`<div>${arrPrizes}</div><hr>`)
document.write(`<div>You won: ${result}</div><hr>`)
}