'use strict'
// ------------------------
function getCmToInches(lengthNumber){
	return lengthNumber * 0.39
}
let resultInch = getCmToInches(5)
document.write(`<div style='font-size:24px'>${resultInch.toFixed(2)} inches</div>`)
// ------------------------------------------------------------------------------------------------
function getKgToPounds(kgAmount){
	return kgAmount * 0.45
}
let resultPounds = getKgToPounds(300)
document.write(`<div style='font-size:24px'>${resultPounds.toFixed(2)} pounds</div>`)
// ------------------------------------------------------------------------------------------------
function getKmToMiles(kmNum){
	return kmNum * 0.6213
}
let resultMiles = getKmToMiles(100)
document.write(`<div style='font-size:24px'>${resultMiles.toFixed(2)} miles</div>`)