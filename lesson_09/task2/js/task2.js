"use strict";
// ------------------------
if(confirm('Start')){
	const userNum = parseInt(prompt("Enter the number of values"))
	let arr = new Array(userNum).fill(1,0, userNum/2).fill(7,userNum/2)
	document.write(`<div>${arr}</div>`)
}