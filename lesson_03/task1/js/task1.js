'use strict'
// -------------------------------------------------
let nameKidOne = prompt('Enter the name', '')
let candyAmountKidOne = parseInt(prompt('Enter the amout of first child candies', ''))
if(isNaN(candyAmountKidOne)){
	alert(`${candyAmountKidOne} is not a number, try again`)
	candyAmountKidOne = parseInt(prompt('Enter the amout of first child candies', ''))
}

// --------------
let nameKidTwo = prompt('Enter the name', '')
let candyAmountKidTwo = parseInt(prompt('Enter the amount of second child candies', ''))
if(isNaN(candyAmountKidTwo)){
	alert(`${candyAmountKidTwo} is not a number, try again`)
	candyAmountKidTwo = parseInt(prompt('Enter the amout of second child candies', ''))
}

if(candyAmountKidOne > candyAmountKidTwo)
	alert(`${nameKidOne} has more`)
else if(candyAmountKidOne < candyAmountKidTwo)
	alert(`${nameKidTwo} has more`)
else if(candyAmountKidOne === 'number' && candyAmountKidTwo === 'number' && candyAmountKidOne === candyAmountKidTwo)
	alert('Equal amount')
else
	alert('Something wrong')
// ------------------------

// ==============================================================================================

