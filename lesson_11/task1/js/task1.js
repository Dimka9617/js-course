"use strict";
// ------------------------
// let arr = [23, 54, 76, 14, 13, 1645]
// const firstEl = arr[0]
// arr.forEach((el, i, baseAr) =>{
// 	if(firstEl < el) baseAr[i] *=2
// })
// document.write(`${arr}`)
// let res = arr.filter(el=>el>30)
// document.write(`${res}`)
// let res = arr.reduce((prev, el) => prev+el)
// document.write(`${res}`)
// arr.includes(0)? document.write('yes'):document.write('no')
// let res = arr.indexOf(0)
// document.write(`${res}`)


// let arr = [[26,20,12], [61,22,53], [96,28,53]]
// let sum = 0
// for(let rowIndex = 1; rowIndex<=2; rowIndex++){
// 	for(let colIndex = 2; colIndex<=2; colIndex++){
// 		sum += arr[rowIndex] [colIndex]
// 	}
// }
// document.write(`${sum}`)



if(confirm("Start")){
	const userRow = parseInt(prompt("Enter the rows number"))
	const userCol = parseInt(prompt("Enter the columns number"))
	const array = getArr()
	

// ------------------------------------------------------------------------------
	function getRandomValue(min,max){
		return min + Math.floor(Math.random() * (max - min + 1));
	}
// ------------------------------------------------------------------------------
	function getArr(){
		const array = []
		for(let i = 0; i<=userRow; i++){
			let row = []
			for(let c = 0; c<=userCol; c++){
				let value = getRandomValue(1,10)
				row.push(value)
			}
			array.push(row)
		}
		return array
	}
	// ------------------------------------------------------------------------------1)	номери рядків від 0 до половини, стовпці від 0 до половини
	let sum = 0
	const middleRow = Math.floor(array.length/2)
	for (let row = 0; row <= middleRow; row++) {
		const middleCol = Math.floor(array[row].length/2)
		for (let col = 0; col <= middleCol; col++) {
			 sum += array[row][col];
		}
  }
  document.write(`<div style="margin-bottom:30px; font-size:20px">номери рядків від 0 до половини, стовпці від 0 до половини : ${sum}</div>`);

  // ------------------------------------------------------------------------------2)	номери рядків від 0 до половини, стовпці від половини до кінця
	let sumTwo = 0
	const middleRowTwo = Math.floor(array.length/2)
  for (let rTwo=0; rTwo<=middleRowTwo; rTwo++){
	const middleColTwo = Math.floor(array[rTwo].length/2)
	for(let cTwo=middleColTwo; cTwo < array[rTwo].length; cTwo++){
		sumTwo += array[rTwo][cTwo]
	}
  }
	document.write(`<div style="margin-bottom:30px; font-size:20px">номери рядків від 0 до половини, стовпці від половини до кінця: ${sumTwo}</div>`)
	// ------------------------------------------------------------------------------3) номери рядків (від половини до кінця, стовпці від 0 до половини
	let sumThree = 0
	const middRowThree = Math.floor(array.length/2)
	for(let r = middRowThree; r<array.length; r++){
		const middleColThree = Math.floor(array[r].length/2)
		for(let c = 0; c<= middleColThree; c++){
			sumThree+=array[r][c]
		}
	}
	document.write(`<div style="margin-bottom:30px; font-size:20px">номери рядків (від половини до кінця, стовпці від 0 до половини: ${sumThree}</div>`)
	// ------------------------------------------------------------------------------4) номери рядків від половини до кінця , стовпці від половини до кінця
	let sumFour = 0
	const midRow = Math.floor(array.length/2)
	for(let rowFour=midRow; rowFour< array.length; rowFour ++){
		const midCol = Math.floor(array[rowFour].length/2)
		for(let colFour = midCol; colFour< array[rowFour].length; colFour++){
			sumFour+= array[rowFour][colFour]
		}
	}
	document.write(`<div style="margin-bottom:30px; font-size:20px">номери рядків від половини до кінця , стовпці від половини до кінця: ${sumFour}</div>`)
	// ------------------------------------------------------------------------------Суму парних рядків
	let sumEvenRow = 0
	for(let rowNum = 0; rowNum < array.length; rowNum++){
		if(rowNum%2===0){
			for(let colNum=0; colNum <array[rowNum].length; colNum++){
				sumEvenRow+=array[rowNum][colNum]
			}
		}
	}
	document.write(`<div style="margin-bottom:30px; font-size:20px">Суму парних рядків: ${sumEvenRow}</div>`)
	// ------------------------------------------------------------------------------Суму непарних стовпців
	let sumOddCol = 0
	for(let rows = 0; rows < array.length; rows++){
		for(let columns = 0; columns < array[rows].length; columns++){
			if(columns%2!==0){
				sumOddCol+=array[rows][columns]
			}
		}
	}
	document.write(`<div style="margin-bottom:30px; font-size:20px">Суму непарних стовпців: ${sumOddCol}</div>`)
	// ------------------------------------------------------------------------------У парних рядках – непарні стовпці, у непарних – парні.
	let sumEvenRowOddCol = 0
	let sumOddRowEvenCol = 0
	for(let rr = 0; rr< array.length; rr++){
		for(let cc=0; cc< array[rr].length; cc++){
			if(rr%2===0 && cc%2!==0){
				sumEvenRowOddCol+=array[rr][cc]
			}
			if(rr%2!==0 && cc%2===0){
				sumOddRowEvenCol+=array[rr][cc]
			}
		}
	}
	document.write(`<div style="margin-bottom:30px; font-size:20px">У парних рядках – непарні стовпці: ${sumEvenRowOddCol}</div>`)
	document.write(`<div style="margin-bottom:30px; font-size:20px">у непарних рядках – парні стовпці: ${sumOddRowEvenCol}</div> <hr>`)
}


// ================================================================================ Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// ====================================================1) загальний прибуток кожного масиву за тиждень;
document.write(`<div style="margin-bottom:30px; font-size:20px">ЗАДАЧА №2</div>`)
let incomes = [
	[143,543,123,345,765,345,876],
	[157,853,896,436,753,976,945],
	[853,132,648,65,756,43,65]
]
document.write(`<div style="margin-bottom:30px; font-size:20px"> The array is: ${incomes}</div>`)
let sumOne=0
for(let week = 0; week<1; week++){
	for(let day = 0; day<=6; day++){
		sumOne+=incomes[week][day]
	}
}
document.write(`<div style="margin-bottom:30px; font-size:20px">The total income of the first shop: ${sumOne}$</div>`)
// ----------------------------------------------------------------------------
let sumTwo = 0
for (let weekTwo = 1; weekTwo<2; weekTwo++){
	for(let dayWeekTwo = 0; dayWeekTwo <7; dayWeekTwo++){
		sumTwo+=incomes[weekTwo][dayWeekTwo]
	}
}
document.write(`<div style="margin-bottom:30px; font-size:20px">The total income of the second shop: ${sumTwo}$</div>`)
// ----------------------------------------------------------------------------
let sumThree = 0
for (let weekThree = 2; weekThree<3; weekThree++){
	for(let dayWeekThree = 0; dayWeekThree <7; dayWeekThree++){
		sumThree+=incomes[weekThree][dayWeekThree]
	}
}
document.write(`<div style="margin-bottom:30px; font-size:20px">The total income of the third shop: ${sumThree}$</div>`)
// =======================================================================2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
let totalSum = 0
// for(let totalWeek= 0; totalWeek < incomes.length; totalWeek++){
// 	for(let dayTotal = 0; dayTotal<7; dayTotal++){
// 		totalSum+=incomes[totalWeek][dayTotal]
// 	}
// }
for(const row of incomes){
	for(const el of row){
		totalSum+=el
	}
}
document.write(`<div style="margin-bottom:30px; font-size:20px">The total income: ${totalSum}$</div>`)
// ==============================================================3) загальний прибуток за робочі дні
let sumWorkingDays = 0
for(let weeks = 0; weeks <incomes.length; weeks++){
	for(let workDay=0; workDay<5; workDay++){
		sumWorkingDays += incomes[weeks][workDay]
	}
}
document.write(`<div style="margin-bottom:30px; font-size:20px">The total income of the working days: ${sumWorkingDays}$</div>`)
// ============================================================================4) загальний прибуток за вихідні дні
let sumWeekends = 0
for(let allWeeks = 0; allWeeks < incomes.length; allWeeks++){
	for(let weekends =5; weekends<7; weekends++){
		sumWeekends += incomes[allWeeks][weekends]
	}
}
document.write(`<div style="margin-bottom:30px; font-size:20px">The total income on the weekends: ${sumWeekends}$</div>`)
// ==============================================================================5) максимальний прибуток за середу
let maxWednesdayIncome = Math.max(...incomes[2])
document.write(`<div style="margin-bottom:30px; font-size:20px">The max income on Wednesday is : ${maxWednesdayIncome}$</div>`)
// ============================================================================6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

// let newAr = []
// for (const subArr of incomes){
// 	for(const el of subArr){
// 		if(el >200){
// 			newAr.push(el)
// 		}
// 	}
// }
// document.write(`<div style="margin-bottom:30px; font-size:20px">The values greater than 200 : ${newAr}$</div>`)
let totalArray = incomes.flat()
let newAr = totalArray.filter((price => price > 200))
document.write(`<div style="margin-bottom:30px; font-size:20px">The values greater than 200 : ${newAr}$</div>`)
// ================================================================================7) відсортувати кожен тиждень за зростанням
incomes.sort((sumOne, sumTwo) =>{
	if(sumOne > sumTwo) return 1
	else if (sumOne < sumTwo) return -1
	return 0
}
)
document.write(`<div style="margin-bottom:30px; font-size:20px">The new array is : ${incomes}</div>`)
// =================================================================================================================



// ================================================================================Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. 
// Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

// const warShip =[
// 	[0, 1, 2, 3, 4, 5],
// 	[0, 1, 2, 3, 4, 5],
// 	[0, 1, 2, 3, 4, 5],
// 	[0, 1, 2, 3, 4, 5],
// 	[0, 1, 2, 3, 4, 5],
// 	[0, 1, 2, 3, 4, 5]
// ]


// const ammoQuantity = parseInt(prompt("Enter the number of ammo"))
// const totalShips = 5
// let shipSank = false

// function getRandomValue(minValue, maxValue){
// 	return minValue + Math.floor(Math.random() * maxValue-minValue+1)
// }

// let shipRowCoordinate
// let shipColCoordinate
// for(let ship=0; ship<5; ship++){
// 	 shipRowCoordinate = getRandomValue(0,5)
// 	 shipColCoordinate = getRandomValue(0,5)
// }

// do {
// 	const userShootRow = parseInt(prompt("Enter the rows number"))
// 	const userShootCol = parseInt(prompt("Enter the columns number"))
// 	if(userShootRow === shipRowCoordinate && userShootCol === shipColCoordinate){
// 		totalShips--
// 		ammoQuantity--
// 		document.write(`Minuus one`)
// 	}
	
// } while (ammoQuantity > 0 || totalShips > 0);













// let scores = [
// 	-56, -78, 252, 23, -122, 0, 122, 436, -111, 0, 344, 21, 3, -356, 342,
//  ]
// document.write(`<div style='font-size:25px'> The array is: ${scores}</div>`)
//     //  7) Підрахувати кількість значень більших за 100
// 	 let total = 0
// 	 let resSeven = scores.filter((el=> el > 100? total++ : total))
// 	 document.write(`<div> Підрахувати кількість значень більших за 100: ${total}</div>`)

//       //  10) Сформувати список тих, які були після першого нуля (<0)
// 		let indexOfZero = scores.indexOf(0)
// 		let resultTen = scores.slice(indexOfZero+1)
// 		document.write(`<div> Сформувати список тих, які були після першого нуля: ${resultTen}</div>`)

//       //  11) Сформувати список тих, які були після останнього нуля (<0)
// 		let lastIndexZero = scores.lastIndexOf(0)
// 		let resultEleven = scores.slice(lastIndexZero+1)
// 		document.write(`<div> Сформувати список тих, які були після останнього нуля: ${resultEleven}</div>`)

//       //  12) Видалити ті, які є меншими за 20
//  		let resultTwelve = scores.filter((el=> el >= 20))
// 		document.write(`<div>Видалити ті, які є меншими за 20: ${resultTwelve}</div>`)

//       //  13) Видалити нулі
// 		let resultThirteen = scores.filter((el=> el !==0))
// 		document.write(`<div>Видалити нулі: ${resultThirteen}</div>`)

//       //  14) Видалити перше нульове значення
// 		let firstZero = scores.findIndex((el=> el===0))
// 		let eliminate = scores.splice(firstZero, 1)
// 		document.write(`<div>${eliminate}</div>`)
// 		document.write(`<div>${scores}</div>`)


//       //  15) Упорядквати за зростанням
// 		scores.sort((elOne, elTwo) =>{
// 			if(elOne > elTwo) return 1
// 			else if(elOne < elTwo) return -1
// 			return 0
// 		}
// 		)
// 		document.write(`<div>Упорядквати за зростанням: ${scores}</div>`)

//       //  16) Упорядквати за спаданням
// 		scores.sort((elOne, elTwo)=> {
// 			if(elOne > elTwo) return -1
// 			else if(elOne < elTwo) return 1
// 			return 0
// 		})
// 		document.write(`<div>Упорядквати за спаданням: ${scores}</div>`)

//       //  17) Упорядкувати так, щоб спочатку були від"ємні (без зміни їх слідування), потім всі інші(без зміни їх слідування)
// 		let negativeArr = scores.filter((el=> el < 0))
// 		let positiveArr = scores.filter((el=> el >= 0))
// 		let resultSeventeen = [...negativeArr, ...positiveArr]
// 		document.write(`<div>${resultSeventeen}</div>`)

//       //  18) Упорядкувати так, щоб спочатку були нулі, потім від"ємні, потім додатні
// 		let arrZero = scores.filter((el=> el === 0))
// 		let negativesEl = scores.filter((el=> el < 0))
// 		let positivesEl = scores.filter((el=> el > 0))
// 		let resultEighteen = [...arrZero, ...negativeArr, ...positivesEl]
// 		document.write(`<div>${resultEighteen}</div>`)

//       //  19) Упорядкувати так, щоб спочатку були виграші >200, потім всі інші
// 		let arrOverTwoH = scores.filter((el => el > 200))
// 		let otherArr = scores.filter((el=> el < 200))
// 		let resultNineteen = [...arrOverTwoH, ...otherArr]
// 		document.write(`<div>${resultNineteen}</div>`)