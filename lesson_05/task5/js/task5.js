'use strict'
// ----------------------------------
let total = 0		
document.write(`<table style="font-size:25px" border='2px'>`)
document.write(`<tr>
	<th>Month</th>
	<th>Temperature</th>
</tr>`)
for (let i = 1; i <= 12; i++){
	let temperature = parseInt(prompt("Enter the temperature:"))
	total += temperature
	document.write(`<tr>
	<th>${i}</th>
	<th>${temperature}C</th>
	</tr>
	`)
}
document.write(`<tr>
<th>Average</th>
<th>${(total / 12).toFixed(1)}C</th>
</tr>`)
document.write(`</table>`)