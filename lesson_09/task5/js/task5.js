"use strict";
// ------------------------
if(confirm('Start')){
	const userNum = parseInt(prompt("Enter the number of values"))
	const values = getArrValues()
// -----------------------------------
	function getRandomValues(min, max){
		return min + Math.floor(Math.random() * (max- min +1))
	}
// -----------------------------------
	function getArrValues(){
		const values = []
		for(let i = 0; i < userNum; i++){
			const value = getRandomValues(-10, 10)
			values.push(value)
		}
		return values
	}
// ---------------------------
let product = 1
function getPosProduct(value){
	if(value>0) product*=value
}
// -----------------------------------
for (const value of values) {
	getPosProduct(value)
}
// -----------------------------------
document.write(`${values}`)
document.write(`<div><strong>The product is: ${product}</strong></div>`)
}