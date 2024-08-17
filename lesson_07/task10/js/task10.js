'use strict'
// ------------------------
function getAveragePositiveTemp(){
	let positiveNumber = 0
	let positiveSum = 0
	// -------------------------------------------------------------------------
	for(let i = 1; i <=12; i++){
		const userTemperature = parseInt(prompt("Enter the temperature"))
		if( userTemperature > 0){
			positiveNumber++
			positiveSum+=userTemperature
		}
	}
	// -------------------------------------------------------------------------
	let averagePositiveTemp = positiveSum / positiveNumber
	return averagePositiveTemp
}						
document.write(`<div>During the year average positive temperature was: <strong>${getAveragePositiveTemp().toFixed(1)}C</strong></div>`)	