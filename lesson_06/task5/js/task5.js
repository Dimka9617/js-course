'use strict'
// ----------------------------------
const sum = parseInt(prompt("Enter the price for the bank"))
const taxPercent = 5
const bankPercent = 20
const sumPerYear = sum * bankPercent / 100
let totalSum = sum

for (let i = 0; i < 20; i++){
totalSum += sumPerYear
}
let tax = totalSum * taxPercent / 100
document.write(`<div>The tax is <strong>${tax}</strong></div> 
Income is <strong>${totalSum-tax}</strong>
`)