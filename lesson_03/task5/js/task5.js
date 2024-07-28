'use strict'
// -----------------------------------
const a = 'moto'
const b = 'car'
const c = 'truck'
let enterCategory = prompt('Enter your category: A, B or C')
if(enterCategory === 'A')
	alert(`You can drive ${a}`)
else if(enterCategory === 'B')
	alert(`You can drive ${b}`)
else if(enterCategory === 'C')
	alert(`You can drive ${c}`)
else
	alert("Error")

