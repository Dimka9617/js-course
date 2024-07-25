"use strict"
// --------------------------------------------
let iceCreamQuantity = parseInt(prompt('Quantity of ice-cream :', '')) 
let iceCreamPriceTotal = parseFloat(prompt('Total price $:', ''))
let iceCreamPrice = iceCreamPriceTotal / iceCreamQuantity
// -------------

let candiesQuantity = parseInt(prompt('Quantity of candies :', ''))
let candiesPriceTotal = parseFloat(prompt('Total price $:', ''))
let candiesPrice = candiesPriceTotal / candiesQuantity
// --------------------

let gumQuantity = parseInt(prompt('Quantity of gums :', ''))
let gumPriceTotal = parseFloat(prompt('Total price $:', ''))
let gumPrice = gumPriceTotal / gumQuantity

// ------------------------
let totalBill = iceCreamPriceTotal + candiesPriceTotal + gumPriceTotal

// ----------------------
document.write(`
<table border="3px">
<tr>
	<th>Goods</th>
	<th>Quantity</th>
	<th>Price per 1</th>
	<th>Price total</th>
</tr>
<tr>
	<th>Ice-cream</th>
	<td>${iceCreamQuantity}</td>
	<td>${iceCreamPrice.toFixed(2)}$</td>
	<td>${iceCreamPriceTotal.toFixed(2)}$</td>
</tr>
<tr>
	<th>Candies</th>
	<td>${candiesQuantity}</td>
	<td>${candiesPrice.toFixed(2)}$</td>
	<td>${candiesPriceTotal.toFixed(2)}$</td>
</tr>
<tr>
	<th>Gum</th>
	<td>${gumQuantity}</td>
	<td>${gumPrice.toFixed(2)}$</td>
	<td>${gumPriceTotal.toFixed(2)}$</td>
</tr>
<tr border='3px'>
	<th>Bill to pay</th>
	<td></td>
	<td></td>
	<td>${totalBill}$</td>
</tr>
</table>
`)