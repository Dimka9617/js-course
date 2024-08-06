'use strict'
	// ----------------------------------
	let rowCeils = parseInt(prompt("Enter the rows quantity :"))
	alert(`The rows are ${rowCeils}`)											
	let columnCeils = parseInt(prompt("Enter the columns quantity :"))	
	alert(`The columns are ${columnCeils}`)
	let ammo =parseInt(prompt("Enter the ammo quantity :"))		
	let shipRowPosition = Math.floor(Math.random() * rowCeils) + 1		
	let shipColumnPosition = Math.floor(Math.random() * columnCeils) + 1		
	let shipSank = false
	alert("The ship is on position! Fire")
	 loop : for (let a = ammo; a>0; a-- ){
		alert(`You have ${a} shells`)
		let shootRowPosition = parseInt(prompt(`Choose your coordinates for rows (from 1 to ${rowCeils}):`))
		let shootColumnPosition = parseInt(prompt(`Choose your coordinates for columns (from 1 to ${columnCeils}):`))
		if(shipRowPosition === shootRowPosition && shipColumnPosition === shootColumnPosition){
			alert(`You nail it! The ship is sinking to feed fish!`) 
			shipSank = true
			break loop
		}
		else  
			alert(`Miss! Try again`)
		
	}			 
	if(!shipSank)
		document.write(`<div>You lost. The ship coordinates were :</div>
	<div>row - <strong>${shipRowPosition}</strong></div>
	<div>column - <strong>${shipColumnPosition}</strong></div>
	<div>
	<img width='700' height='400' src="img/pirate.jpg" alt="Pirate">
	</div>
	`)