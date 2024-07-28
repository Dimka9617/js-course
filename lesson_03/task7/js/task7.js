'use strict'
// -----------------------------------
let enterNumber = parseInt(prompt("Enter the number of month :", ''))
if(enterNumber === 12 || enterNumber=== 2 || enterNumber === 1)
	alert("Winter")
else if ( enterNumber >= 3 && enterNumber <= 5)
	alert("Spring")
else if ( enterNumber >= 6 && enterNumber < 9)
	alert("Summer")
else if ( enterNumber >= 9 && enterNumber < 12)
	alert("Autumn")
else
	alert("Wrong number")
	

