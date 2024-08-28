"use strict";
// ------------------------
if(confirm("Start")){
const userNum = parseInt(prompt("Enter the number of prices"))
const prices = pricesArr()
const limitPrice = 100
const percentDiscount = 30


// -------------------------------
function getRandomPrice(min,max){
	return min+ Math.floor(Math.random() * (max-min+1))
}
// -------------------------------
function pricesArr(){
	const prices = []
	for(let i = 0; i < userNum; i++){
		const price = getRandomPrice(100,5000)
		prices.push(price)
	}
	return prices
}
// -------------------------------
const pricesDiscount = prices.map((element)=> {
	if(element > limitPrice) return element - element*percentDiscount/limitPrice
	else return element.toFixed
})

// -------------------------------
document.write(`<div>${prices}</div><hr>`)
document.write(`<div>${pricesDiscount}</div><hr>`)

// FOREACH---------------------------------------------------------------------------------------------------------
	prices.forEach(element => {
		if(element > 100) {element=element - element*percentDiscount/limitPrice}
		document.write(`<div>${element.toFixed(2)}</div>`)
	});
}