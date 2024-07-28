'use strict'
// -----------------------------------
let emotionOne = 1
let emotiontwo = 2
let emotionthree = 3

let enterNumber = parseInt(prompt("Enter the number from 1 to 3", ''))
if(enterNumber === emotionOne)
	document.write(`
	<img src="/img/smile/happy.jpg" alt="Happy smile">
	`)
else if (enterNumber === emotiontwo)
	document.write(`
	<img src="/img/smile/sad.webp" alt="Sad smile">
	`)
else
document.write(`
	<img src="/img/smile/angry.jpg" alt="Angry smile">
	`)
