'use strict'
// ------------------------
function createTable (rowNumber, columnNumber, text){
	document.write(`<table border=2px>`)
	for(let r=1; r<=rowNumber; r++){
		document.write(`<tr>`)
		for(let c=1; c<=columnNumber; c++){
			document.write(`<td style='font-size:35px'>${text}</td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table>`)
}																					
const rowNumber = parseInt(prompt("Enter the rows number"))
const columnNumber = parseInt(prompt("Enter the rows number"))
let text = prompt("Enter the text")
// let result = createTable(3,6,'JavaScript')
createTable(rowNumber, columnNumber, text)