"use strict";
// ------------------------
if(confirm("Start")){
// ------------------------------------------------------------------------------
	function showNames(){
		const names =[]
		const quantityNames = parseInt(prompt("Enter how many names"))
		for(let i =0; i<quantityNames; i++){
			const userName = prompt("enter the students name")
			names.push(userName)
		}
		return names
	}
// ------------------------------------------------------------------------------
function getIvanQuantity(studentsName){
	const nameIvan = 'Ivan'
	let total = 0
	for(let s = 0; s< studentsName.length; s++){
		if(studentsName[s] === nameIvan) total ++
	}
	return total
}
// ------------------------------------------------------------------------------
	const studentsName = showNames()
	const nameIvan = getIvanQuantity(studentsName)
	document.write(`${studentsName}`)
	document.write(`<div>Studetns with name Ivan : ${nameIvan}</div>`)
}																												
