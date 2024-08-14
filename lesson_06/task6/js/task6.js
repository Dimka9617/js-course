'use strict'
// ----------------------------------
const students = parseInt(prompt("enter the quantity of students"))
let studentHeight
let totalHeight=0
for(let s = 1; s<= students; s++){
	studentHeight = parseFloat(prompt("Enter the height"))
	totalHeight+=studentHeight
}
let averageHeight = totalHeight / students
document.write(`<div>Average height among the students is <strong>${averageHeight.toFixed(2)}</strong></div>`)