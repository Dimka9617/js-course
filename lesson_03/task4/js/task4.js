'use strict'
// -----------------------------------
let age = parseInt(prompt("Enter the age, remember 0 - is not an age", ''))
if( age <= 5)
	alert("Kinder")
else if( age < 18)
	alert ('School')
else if( age < 28)	
	alert('Student')
else if( age < 60)
	alert('Worker')
else
	alert('Retired')