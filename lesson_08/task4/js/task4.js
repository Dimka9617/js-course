"use strict";
// ------------------------
if(confirm("Start")){
	// -------------------------------------------------------
	function getRandomValue(a,b){
		return 1 + Math.floor(Math.random() * 5)
	}
	// -------------------------------------------------------
	function getArrayGrades(){
		const grades = []
		const quantityGrades = parseInt(prompt("Enter the grates quantity:"))
		for(let x= 0; x<quantityGrades; x++){
			grades.push(getRandomValue(1,5))
		}
		return grades
}
	// -------------------------------------------------------
	function getBadGrades(grades){
		const badValue = 2
		let totalBad = 0
		for(let b = 0; b<grades.length; b++){
			if(badValue === grades[b]) totalBad++
		}
		return totalBad
	}
// -------------------------------------------------------
function getGoodGrades(grades){
	const goodGradeFour = 4
	const goodGradeFive = 5
	let totalGood = 0
	for(let x = 0; x<grades.length; x++){
		if(grades[x]=== goodGradeFour || grades[x]=== goodGradeFive) totalGood++
	}
	return totalGood
}
// -------------------------------------------------------
function getAboveAverage(grades){
	const limitGrade = 3
	let totalAboveAverage = 0
	for(let q= 0; q<grades.length; q++){
		if(grades[q] < limitGrade) totalAboveAverage++
	}
	return totalAboveAverage
}
// -------------------------------------------------------
const grades = getArrayGrades()
const totalBad = getBadGrades(grades)
const totalGood = getGoodGrades(grades)
const totalAboveAverage = getAboveAverage(grades)
// ------
document.write(`<div>${grades}</div> <hr>`)
document.write(`<div>Grade '2': ${totalBad}</div><hr>`)
document.write(`<div>Good grades : ${totalGood}</div><hr>`)
document.write(`<div>Grades below 3: ${totalAboveAverage}</div><hr>`)
}
