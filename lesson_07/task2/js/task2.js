'use strict'
// ------------------------
function showTypeDay(){
let dayNumber = parseInt(prompt("Enter the number of day"))
let result
switch(dayNumber){
	case 1 :
	case 2 :
	case 3 :
	case 4 :
	case 5 : result ='Working day'
		break;
	case 6:
	case 7: result ='Day off'
		break;
}
return result
}	
document.write(`<div>${showTypeDay()}</div>`)							