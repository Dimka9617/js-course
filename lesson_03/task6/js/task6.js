'use strict'
// -----------------------------------
let numberOne = 1
let numberTwo = 2
let numberThree = 3
let numberFour = 4
let numberFive = 5
let numberSix = 6
let numberSeven = 7
// ------------------------
let enterNumber = parseInt(prompt('Enter the number from 1 to 7', ''))
// -------------------------------------
if(enterNumber === 1)
	alert("Monday")
else if(enterNumber === ++numberOne)
	alert("Tuesday")
else if(enterNumber === ++numberTwo)
	alert("Wednesday")
else if(enterNumber === ++numberThree)
	alert("Tuesday")
else if(enterNumber === ++numberFour)
	alert("Friday")
else if(enterNumber === ++numberFive)
	alert("Saturday")
else if(enterNumber === ++numberSix)
	alert("Sunday")
else
	alert("Wrong number")