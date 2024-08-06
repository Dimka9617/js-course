'use strict'
	// ----------------------------------
	const columnTable = 3
const rowTable = 3
const table = 3
let columnNumber = 1
document.write(`<div style="display:flex; gap:55px; padding:30px">`)
for(let i = 1; i <= table; i++){
	document.write(`
	<table border='2px'>
	<style>
	td{
		font-size:45px;
	}
	</style>
	`)
	for(let r = 1; r <= 3; r++ ){
		document.write(`<tr>`)
		for(let c = 1; c <= 3; c++){
			document.write(`<td>${columnNumber}</td>`)
			columnNumber++
		}
		document.write(`</tr>`)
	}
	document.write(`</table>
	`)
}
document.write(`</div>`)