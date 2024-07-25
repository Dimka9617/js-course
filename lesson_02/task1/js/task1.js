"use strict"
// --------------------------------------------
let a = parseInt(prompt('Enter the a', ''))
let b = parseInt(prompt('Enter the b', ''))
// -----------------------------------------------
let sum = a + b
let product = a * b
let division = a / b
// --------------------------------------------------
document.write(`
<table border="2px">
<tr>
	<th>Operation</th>
	<th>Value</th>
</tr>
<tr>
	<th>Sum</th>
	<td>${sum}</td>
</tr>
<tr>
	<th>Product</th>
	<td>${product}</td>
</tr>
<tr>
	<th>Division</th>
	<td>${division.toFixed(2)}</td>
</tr>
</table>
`)