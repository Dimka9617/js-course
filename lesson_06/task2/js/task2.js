'use strict'
// ----------------------------------
alert(`
1. Сказати «Привіт». 
2. Сказати «Зачекай». 
3. Сказати «До побачення». 
4. Вихід.
`)

let askUser
let result
loop : while(askUser != 4){
	 askUser = parseInt(prompt("Enter the number"))
switch(askUser){
	case 1 : result = alert('Hello')
	break
	case 2 : result =alert('Wait')
	break
	case 3 : result =alert('Bye')
	break
	case 4 : result = alert("You chose exit")
	break loop
}
}