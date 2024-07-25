"use strict"
// --------------------------------------------
let birthDate = parseInt(prompt("Enter your birth date, for example 1900", ""))
const currentYear = 2024
// -----------------------------------------------
let age = currentYear - birthDate
// ------------------------------------------------------

// alert(`Your age is ${age}`)
if(age > 50){
	alert(`Your age is ${age} 
	Still young and drunk:)`)
} else(
	alert(`Your age is ${age}`)
)