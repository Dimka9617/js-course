'use strict'
// ------------------------
function getMathSum (a, b, x, y){
let sum = a + b + x + y
return sum
}
let sumResult = getMathSum(4, 19, 54, 43)
document.write(`<div>The sum is: ${sumResult}</div>`)
// -------------------------------------------------------
function getMathProduct (a, b, x, y){
	let product = a * b * x * y
	return product
}
let productResult = getMathProduct(12, 3, 2, 1)
document.write(`<div>The product is: ${productResult}</div>`)
// --------------------------------------------------------
function getMathAverage (a, b, x, y){
	let average = (a + b + x + y) / 4
	return average
}
let averageResult = getMathAverage(54, 79, 434, 4)
document.write(`<div>The average value is: ${averageResult}</div>`)
// --------------------------------------------------------
function getMinValue( a, b, x, y){
	let minValue
	// -------------------------------------
	minValue = a < b ? a : b
	minValue = minValue < x ? minValue : x
	minValue = minValue < y ? minValue : y
	// -------------------------------------
return minValue
}
let minResult = getMinValue(235, 5, -90, -1100)
document.write(`<div>The minimum value is: ${minResult}</div>`)