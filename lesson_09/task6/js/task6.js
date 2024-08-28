"use strict";
// ------------------------
if(confirm("Start")){
	const arr = [3, 5, 1, 6, 0, -5]
	document.write(`<div>${arr}</div>`)
	// FOR EACH--------------------------------------------
	arr.forEach((element)=>{
		if(element > arr[0]) element*=2
		document.write(`${element}<br>`)
	})
	document.write(`<hr>`)
	// FOR OF--------------------------------------------
	for (let value of arr) {
		if(value > arr[0]) value*=2
		document.write(`${value}<br>`)
	}
	document.write(`<hr>`)
	// MAP--------------------------------------------
	const arrTwo = arr.map((element,index, baseArr) => 
	{if (element >baseArr[0]) 
	return element*=2
	else 
	return element})
	document.write(`${arrTwo}`)
}