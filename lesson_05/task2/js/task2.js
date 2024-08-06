	'use strict'
	// ----------------------------------
	document.write(`<table style='margin:40px 0px' border='2px'>`)
	for(let p = 1; p <=10; p++){
		let priceProduct = ((Math.random() *100) +1).toFixed(2)
		document.write(`<tr>
		 <th>Product ${p}</th>
		 <td>${priceProduct}$</td>
		</tr>`)
	}
	document.write(`</table>`)