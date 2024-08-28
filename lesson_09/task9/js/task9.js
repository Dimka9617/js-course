"use strict";
// ------------------------
if(confirm('Start')){
// ---------------------------------
function getRandomValue(min, max){
	return min + Math.floor(Math.random()* (max-min + 1))
}
// ---------------------------------
function getArrPrices(){
	const prices = []
	for(let i = 0; i < 5; i++){
		const price = getRandomValue(300,500)
		prices.push(price)
	}
	return prices
}
// ---------------------------------
const prices = getArrPrices()
const tax = 20
// ---------------------------------
const taxValue = prices.map(
	(value) =>value*tax/100
)
// ---------------------------------
document.write(`<div>${prices}</div>`)
document.write(`<div>${taxValue}</div>`)
}