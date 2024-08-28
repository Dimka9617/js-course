"use strict";
// ------------------------
if(confirm('Start')){
	const userNum = parseInt(prompt("Enter the number of values"))
	let arr = new Array(userNum).fill(1,0,5).fill(7,5)
	document.write(`<div>${arr}</div>`)
}