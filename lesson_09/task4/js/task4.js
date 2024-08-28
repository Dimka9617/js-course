"use strict";
// ------------------------
if(confirm("Start")){
		const userNum = parseInt(prompt("Enter the number of values"))
		const values = getArrValues()
		// -------------
		function getRandomValues(min,max){
			return 1+ Math.floor(Math.random() * (200-1+1))
		}
		// -------------
		function getArrValues(){
			const values = []
			for(let i=0; i<userNum; i++){
				const value = getRandomValues(1,200)
				values.push(value)
			}
			return values
		}
		document.write(`<div>${values}</div>`)
		// -----------------------------------
		for (const value of values) {
			if(value > 100) document.write(`${value}<br>`)
		}
	}	