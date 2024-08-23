"use strict";
// ------------------------
// function isRetired(age, retiredAge = 65) {
//   return age >= retiredAge;
// }
// let userAge = parseInt(prompt("enter the age"));
// let msg = isRetired(userAge) ? "Rest" : "Work";
// document.write(`${msg}`);
// ================================================================================
// let a = [3, 5, 7];
// let x = a[0];
// console.log(x);
// ================================================================================
// let productPrices = [3, 43, 554, 43];
// let sum = 0;
// for (let i = 0; i < 4; i++) {
//   sum += productPrices[i];
// }
// document.write(`${sum}`);
// ================================================================================
// const productsNumber = parseInt(prompt("number"));
// const productPrices = [];
// let sum = 0;
// for (let i = 0; i < productsNumber; i++) {
//   let productPrice = parseFloat(prompt(`price for the ${i + 1} product`));
//   productPrices.push(productPrice);
//   sum += productPrice;
// }
// document.write(`${sum}`);
// ================================================================================Вводимо вагу вказаної кількості сумок. Знайти загальну ввагу сумок
// const bagsNumber = parseInt(prompt("Enter the number"));
// const bagsWeight = [];
// let totalWeight = 0;
// for (let i = 0; i < bagsNumber; i++) {
//   let bagWeight = parseInt(prompt(`Enter the weight ${i + 1} bag`));
//   bagsWeight.push(bagWeight);
//   totalWeight += bagsWeight[i];
// }
// document.write(`Total weight is ${totalWeight}`);
// ================================================================================Вводимо вагу вказаної кількості сумок. Знайти загальну ввагу сумок тяжелее чем 100
// const bagsNum = parseInt(prompt("Number"));
// const bagsWeights = [];
// let totalWeight = 0;
// for (let i = 0; i < bagsNum; i++) {
//   const bagWeight = parseInt(prompt("Weight"));
//   bagsWeights.push(bagWeight);
//   if (bagWeight > 100) totalWeight += bagsWeights[i];
// }
// document.write(`${totalWeight}`);
// ================================================================================ ЛУЧШЕ ДЕЛАТЬ 2 ЦИКЛА ПОТОМУ ЧТО МАССИВ МОЖЕМ ПОЛУЧАТЬ ИЗ БАЗЫ ДАННЫХ
// const bagsNum = parseInt(prompt("Number"));
// const bagsWeight = [];
// for (let i = 0; i < bagsNum; i++) {
//   const bagWeight = parseInt(prompt("Weight"));
//   bagsWeight.push(bagWeight);
// }
// let totalWeight = 0;
// for (let n = 0; n < bagsWeight.length; n++) {
//   totalWeight += bagsWeight[n];
// }
// document.write(`${totalWeight}`);
// ================================================================================ ЛУЧШЕ ДЕЛАТЬ 2 ЦИКЛА ПОТОМУ ЧТО МАССИВ МОЖЕМ ПОЛУЧАТЬ ИЗ БАЗЫ ДАННЫХ
// const bagsNumber = parseInt(prompt("Number"));
// const bagsWeight = [];
// for (let i = 0; i < bagsNumber; i++) {
//   const bagWeight = parseInt(prompt("Weight"));
//   bagsWeight.push(bagWeight);
// }
// let totalWeight = 0;
// for (let n = 0; n < bagsWeight.length; n++) {
//   if (bagsWeight[n] > 100) totalWeight += bagsWeight[n];
// }
// document.write(`${totalWeight}`);
// ================================================================================Дано випадковим чином сгенероваий масив (-100/100).Заменить отрицательные значения на 0
// const randomNumber = parseInt(prompt("How many numbers"));
// const valuesAr = [];
// for (let i = 0; i < randomNumber; i++) {
//   const value = -100 + Math.floor(Math.random() * (100 - -100 + 1));
//   valuesAr.push(value);
// }
// document.write(`<div>First array ${valuesAr}</div>`);

// for (let n = 0; n < valuesAr.length; n++) {
//   if (valuesAr[n] < 0) valuesAr[n] = 0;
// }
// document.write(`<div>new array ${valuesAr}</div>`);
// ================================================================================
// function sum(...items) {
//   let sum = 0;
//   for (let i = 0; i < items.length; i++) {
//     sum += items[i];
//   }
//   return sum;
// }
// let s = sum(3, 5, 10);
// document.write(`${s}`);

// ================================================================================Задача 1. Дано масив, який містить оцінки з К предметів.
// Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
if (confirm("Start")) {
  const subjectNum = parseInt(prompt("Enter the amount of subjects"));
  const grates = getGrates(subjectNum);
  // --------------------------------------------------------------
  function randomGrate(min, max) {
    return 1 + Math.floor(Math.random() * 5);
  }
  // --------------------------------------------------------------
  function getGrates(subjectNum) {
    const grates = [];
    for (let i = 0; i < subjectNum; i++) {
      const grateSubject = randomGrate(1, 5);
      grates.push(grateSubject);
    }
    return grates;
  }
  // --------------------------------------------------------------
  function averageGrate(grates) {
    let sum = 0;

    for (let n = 0; n < grates.length; n++) {
      sum += grates[n];
    }
    const averageValue = sum / grates.length;
    return averageValue;
  }
  // --------------------------------------------------------------
  function getLowestRate(grates) {
    let lowest = grates[0];
    for (let x = 1; x < grates.length; x++) {
      if (grates[x] < lowest) lowest = grates[x];
    }
    return lowest;
  }
  // --------------------------------------------------------------
  function showStatus(grates) {
    const minGrate = getLowestRate(grates);
    let status;
    switch (minGrate) {
      case 5:
        status = "Відмінно";
        break;
      case 4:
        status = "Хорошист";
        break;
      case 3:
        status = "Трійка";
        break;
      case 2:
      case 1:
        status = "Погано";
        break;
    }
    return status;
  }

  document.write(`<div>The grates are: ${grates}</div>`);
  document.write(`<div>Average grate is: ${averageGrate(grates)}</div>`);
  document.write(`<div>${showStatus(grates)}</div>`);
}
// ================================================================================Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
// ●	номери днів, коли кількість відвідувачів була мінімальною;
// ●	номери днів, коли кількість відвідувачів була мінімальною;
// ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
// if (confirm("Start")) {
//   function getRandomValue(min, max) {
//     return min + Math.floor(Math.random() * (max - min + 1));
//   }
//   // GET ARRAY-------------------------------------------------------------------------
//   function getCustomersPerWeek(){
// 	const customersPerWeek = []
// 	for (let i = 0; i<7; i++){
// 		const customerPerDay = getRandomValue(10, 100)
// 		customersPerWeek.push(customerPerDay)
// 	}
// 	return customersPerWeek
//   }
// // RESULT TWO---------------------------------------------------------------------------
//   function getDaysLessThanTwenty(customersPerWeek){
// 	let daysQuantity = []
// 	for(let d=0; d<customersPerWeek.length; d++){
// 		if(customersPerWeek[d] < 20) daysQuantity.push(d+1)
// 	}
// 	return daysQuantity
//   }
//   // RESULT TWO---------------------------------------------------------------------------
//  function getDayMinCustomer(customersPerWeek){
// 	let minCustomer = Math.min(...customersPerWeek)
// 	const minDay = []
// 	for(let d = 0; d<customersPerWeek.length; d++){
// 		if(customersPerWeek[d] === minCustomer) minDay.push(d+1)
// 	}
// 	return minDay
//  }
//  // RESULT THREE---------------------------------------------------------------------------
//  function getDayMaxCustomer(customersPerWeek){
// 	let maxCustomer = Math.max(...customersPerWeek)
// 	const maxDay = []
// 	for(let x=0; x<customersPerWeek.length; x++){
// 		if(customersPerWeek[x] === maxCustomer) maxDay.push(x+1)
// 	}
// 	return maxDay
//  }
//   // RESULT FOUR (WEEK DAYS)---------------------------------------------------------------------------
//   function maxCustomersWeekDays(customersPerWeek){
// 	let total = 0
// 	for(let w =0; w<=4; w++){
// 		total +=customersPerWeek[w]
// 	}
// 	return total
//   }
//   // RESULT FOUR (WEEKEND)---------------------------------------------------------------------------
//   function maxCustomersWeekend(customersPerWeek){
// 	let all = 0
// 	for (let weekday = 5; weekday<customersPerWeek.length; weekday++){
// 		all +=customersPerWeek[weekday]
// 	}
// 	return all
//   }
// // ALL CONSTS---------------------------------------------------------------------------
// const customersPerWeek = getCustomersPerWeek()
// const daysLessTwenty = getDaysLessThanTwenty(customersPerWeek)
// const minDayShow = getDayMinCustomer(customersPerWeek)
// const maxDayShow = getDayMaxCustomer(customersPerWeek)
// const totalWeekDays = maxCustomersWeekDays(customersPerWeek)
// const totalWeekend = maxCustomersWeekend(customersPerWeek)
// // ---------------------------------------------------------------------------
// document.write(`<div style='font-size:30px'>Customers during the week:<br>
// Monday : ${customersPerWeek[0]} <br>
// Tuesday : ${customersPerWeek[1]} <br>
// Wednesday : ${customersPerWeek[2]} <br>
// Thursday : ${customersPerWeek[3]} <br>
// Friday : ${customersPerWeek[4]} <br>
// Saturday : ${customersPerWeek[5]} <br>
// Sunday : ${customersPerWeek[6]} <br>
// </div>`)

// document.write(`<div style='font-size:30px'>Days with less than 20 customers №: ${daysLessTwenty}</div>`)
// document.write(`<div style='font-size:30px'>Number of day when were min customers is : ${minDayShow}</div>`)
// document.write(`<div style='font-size:30px'>Day when were max customers is number: ${maxDayShow}</div>`)
// document.write(`<div style='font-size:30px'>Customers during the week days : ${totalWeekDays}</div>`)
// document.write(`<div style='font-size:30px'>Customers during the weekend : ${totalWeekend}</div>`)

// }
 



// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
// if(confirm('Start')){
// 	const subjectNum = parseInt(prompt("enter the number of subjects"))
// // --------------------------------------------
// function getRandomValue (min, max){
// 	return 1+ Math.floor(Math.random() * 5)
// }
// // --------------------------------------------
// function getGratesAr(){
// 	const grates =[]
// 	for(let i = 0; i< subjectNum; i++){
// 		grates.push(getRandomValue(1,5))
// 	}
// 	return grates
// }
// // --------------------------------------------
// function getAverageGrate(gratesValue){
// 	let total = 0
// 	for(let d = 0; d<gratesValue.length; d++){
// 		total+=gratesValue[d]
// 	}
// 	const averageGrate = total / gratesValue.length 
// 	return averageGrate
// }
// // --------------------------------------------
// function getMinValue(gratesValue){
// 	let minValue = gratesValue[0]
// 	for(let value = 1; value <= gratesValue.length; value++){
// 		if(minValue > gratesValue[value]) minValue = gratesValue[value]
// 	}
// 	return minValue
// }
// // --------------------------------------------
// function getStatus(gratesValue){
// 	const loweGrate = getMinValue(gratesValue)
// 	let status
// 	switch (loweGrate) {
// 		case 5: status = 'Відмінно'
// 			break;

// 		case 4: status = 'Хорошо'
// 			break;

// 		case 3: status = 'Тройка'
// 			break;

// 		case 2: 
// 		case 1: status = 'Погано'
// 			break;
// 	}
// 	return status
// }
// // --------------------------------------------
// const gratesValue = getGratesAr()
// const averageGrate = getAverageGrate(gratesValue)
// const minValue = getMinValue(gratesValue)
// const statusStudent = getStatus(gratesValue)
// // --------------------------------------------
// document.write(`${gratesValue}`)
// document.write(`<div>${averageGrate}</div>`)
// document.write(`<div>${minValue}</div>`)
// document.write(`<div>${statusStudent}</div>`)
// }
// ================================================================================Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
// ●	номери днів, коли кількість відвідувачів була мінімальною;
// ●	номери днів, коли кількість відвідувачів була мінімальною;
// ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
// function getRandomValue(min,max){
// 	return 1 + Math.floor(Math.random() * (100-1+1))
// }
// // -----------------------------------------------------------
// function getArrCustomers(){
// 	const customers = []
// 	for(let i = 0; i<7; i++){
// 		const customerPerDay = getRandomValue(1, 100)
// 		customers.push(customerPerDay)
// 	}
// 	return customers
// }
// // -номери днів, протягом яких кількість відвідувачів була меншою за 20;----------------------------------------------------------
// function getDaysLessThanTwenty(customers){
// 	const daysLessTwenty =[]
// 	for(let d = 0; d<customers.length; d++){
// 		if(customers[d] < 20) daysLessTwenty.push(d+1)
// 	}
// 	return daysLessTwenty
// }
// // номери днів, коли кількість відвідувачів була мінімальною;----------------------------------------------------------
// function getMinCustomersDay(customers){
// const minCustomerValue = Math.min(...customers)
// const minDay = []
// for(let x = 0; x < customers.length; x++){
// 	if(minCustomerValue === customers[x]) minDay.push(x+1)
// }
// return minDay
// }
// // номери днів, коли кількість відвідувачів була максимальною;----------------------------------------------------------
// function getMaxCustomerDay(customers){
// 	const maxCustomerValue = Math.max(...customers)
// 	const maxDay = []
// 	for(let c= 0; c<customers.length; c++){
// 		if(customers[c] === maxCustomerValue) maxDay.push(c+1)
// 	}
// return maxDay
// }
// // загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних----------------------------------------------------------
// function getCustomersWeekDays(customers){
// 	let customersWeekDays = 0
// 	for(let a = 0; a <=4; a++){
// 		customersWeekDays+=customers[a]
// 	}
// 	return customersWeekDays
// }
// // ----------------------
// function getCustomersWeekend(customers){
// 	let customersWeekend = 0
// 	for(let y = 5; y <=6; y++){
// 		customersWeekend+=customers[y]
// 	}
// 	return customersWeekend
// }
// // -----------------------------------------------------------
// const customers = getArrCustomers()
// const daysTwenty =  getDaysLessThanTwenty(customers)
// const minDay = getMinCustomersDay(customers)
// const maxDay = getMaxCustomerDay(customers)
// const customersWeekDay = getCustomersWeekDays(customers)
// const customerWeekend = getCustomersWeekend(customers)

// document.write(`<div style='font-size:26px'>Customers during the week:<br>
// Monday: ${customers[0]}<br>
// Tuesday: ${customers[1]}<br>
// Wednesday: ${customers[2]}<br>
// Thursday: ${customers[3]}<br>
// Friday: ${customers[4]}<br>
// Saturday: ${customers[5]}<br>
// Sunday: ${customers[6]}<br>
// ${customers}
// <hr></div>`)
// document.write(`<div style='font-size:26px'>Days number when customers were less than 20: <strong>${daysTwenty}</strong></div>`)
// document.write(`<div style='font-size:26px'>The number of day when were min customers is <strong>${minDay}</strong></div>`)
// document.write(`<div style='font-size:26px'>The number of day when were max customers is <strong>${maxDay}</strong></div>`)
// document.write(`<div style='font-size:26px'>Customers during the week days:  <strong>${customersWeekDay}</strong></div>`)
// document.write(`<div style='font-size:26px'>Customers during the weekend:  <strong>${customerWeekend}</strong></div>`)


// 																													// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
// if(confirm("Start")){
// // ------------------------------------------------------------------------------
// 	function showNames(){
// 		const names =[]
// 		const quantityNames = parseInt(prompt("Enter how many names"))
// 		for(let i =0; i<quantityNames; i++){
// 			const userName = prompt("enter the students name")
// 			names.push(userName)
// 		}
// 		return names
// 	}
// // ------------------------------------------------------------------------------
// function getIvanQuantity(studentsName){
// 	const nameIvan = 'Ivan'
// 	let total = 0
// 	for(let s = 0; s< studentsName.length; s++){
// 		if(studentsName[s] === nameIvan) total ++
// 	}
// 	return total
// }
// // ------------------------------------------------------------------------------
// 	const studentsName = showNames()
// 	const nameIvan = getIvanQuantity(studentsName)
// 	document.write(`${studentsName}`)
// 	document.write(`<div>Studetns with name Ivan : ${nameIvan}</div>`)
// }																												


																																		// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
																																		// 1)	двійок
																																		// 2)	кількість хороших оцінок (добре, відмінно);
																																		// 3)	кількість оцінок, які нижче середнього.
// if(confirm("Start")){
// 	// -------------------------------------------------------
// 	function getRandomValue(a,b){
// 		return 1 + Math.floor(Math.random() * 5)
// 	}
// 	// -------------------------------------------------------
// 	function getArrayGrades(){
// 		const grades = []
// 		const quantityGrades = parseInt(prompt("Enter the grates quantity:"))
// 		for(let x= 0; x<quantityGrades; x++){
// 			grades.push(getRandomValue(1,5))
// 		}
// 		return grades
// }
// 	// -------------------------------------------------------
// 	function getBadGrades(grades){
// 		const badValue = 2
// 		let totalBad = 0
// 		for(let b = 0; b<grades.length; b++){
// 			if(badValue === grades[b]) totalBad++
// 		}
// 		return totalBad
// 	}
// // -------------------------------------------------------
// function getGoodGrades(grades){
// 	const goodGradeFour = 4
// 	const goodGradeFive = 5
// 	let totalGood = 0
// 	for(let x = 0; x<grades.length; x++){
// 		if(grades[x]=== goodGradeFour || grades[x]=== goodGradeFive) totalGood++
// 	}
// 	return totalGood
// }
// // -------------------------------------------------------
// function getAboveAverage(grades){
// 	const limitGrade = 3
// 	let totalAboveAverage = 0
// 	for(let q= 0; q<grades.length; q++){
// 		if(grades[q] < limitGrade) totalAboveAverage++
// 	}
// 	return totalAboveAverage
// }
// // -------------------------------------------------------
// const grades = getArrayGrades()
// const totalBad = getBadGrades(grades)
// const totalGood = getGoodGrades(grades)
// const totalAboveAverage = getAboveAverage(grades)
// // ------
// document.write(`<div>${grades}</div> <hr>`)
// document.write(`<div>Grade '2': ${totalBad}</div><hr>`)
// document.write(`<div>Good grades : ${totalGood}</div><hr>`)
// document.write(`<div>Grades above 3: ${totalAboveAverage}</div><hr>`)
// }


// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]

// let productPrices = [1000, 200, 30]
// let productsTitles = ['cheese', 'juice', 'bread']

// const userMoney = parseInt(prompt("Enter your budget:"))
// const totalPrice = getTotalPrice(productPrices)
// // -------------------------------------------------------------------------------
// function showResultPurchase(money,price,title){
// 	let result 
// 	if(userMoney >= productPrices[0] && userMoney < totalPrice) 
// 	result = `You can buy ${productsTitles[0]} or ${productsTitles[1]} or ${productsTitles[2]}`
// 	// alert(`You can buy ${productsTitles[0]} or ${productsTitles[1]} or ${productsTitles[2]}`)
// 	else if(userMoney > totalPrice) 
// 	result = "You can buy all"
// 	// alert("You can buy all")
// 	else if(userMoney < (productPrices[1]) && userMoney > productPrices[2]) 
// 	result = `You can buy ${productsTitles[2]}`
// 	// alert(`You can buy ${productsTitles[2]}`)
// 	else if(userMoney <= (productPrices[1]) && userMoney > productPrices[2]) 
// 	result = `You can buy ${productsTitles[1]} or ${productsTitles[2]}`
// 	// alert(`You can buy ${productsTitles[1]} or ${productsTitles[2]}`)
// 	else if(userMoney < productPrices[0] && userMoney > productPrices[1])
// 	result = `You can buy ${productsTitles[1]} or ${productsTitles[2]}`
// 	// alert(`You can buy ${productsTitles[1]} or ${productsTitles[2]}`)
// 	else if(userMoney >= (productPrices[2]) && userMoney < productPrices[1])
// 	result = `You can buy only ${productsTitles[2]}`
// 	// alert(`You can buy only ${productsTitles[2]}`)
// 	else result = "Not enough money"
// 	// ----------------------------------------
// 	return result
// }
// // ------------------------------------------------------------------------------------
// function getTotalPrice(productPrices){
// 	let totalPrice = 0
// 	for(let i = 0; i<productPrices.length; i++){
// 		totalPrice+=productPrices[i]
// 	}
// 	return totalPrice
// }
// // ------------------------------------------------------------------------------------
// const result = showResultPurchase(userMoney, productPrices, productsTitles)
// document.write(`${result}`)


// Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// 1)	за весь рік;
// 2)	у першій половині року;
// 3)	у другій половині року;
// 4)	за літо;
// 5)	за ІІ квартал;
// 6)	за парні місяці (з парними номерами);
// 7)	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
// if(confirm(`Start`)){

// 	function getRandomValue(min,max){
// 		return 100 + Math.floor(Math.random() * (1000-100+1))
// 	}
// // ----------------------------------------------------------------
// function getArrPayment(){
// 	const annualPayment = []
// 	for(let i = 0; i<12; i++){
// 		const monthPayment = getRandomValue(100, 1000)
// 		annualPayment.push(monthPayment)
// 	}
// 	return annualPayment
// }
// // за весь рік----------------------------------------------------------------
// function getTotalPriceYear(annualPayment){
// 	let totalPayment = 0
// 	for(let m = 0; m < annualPayment.length; m++){
// 		totalPayment+=annualPayment[m]
// 	}
// 	return totalPayment
// }
// // у першій половині року----------------------------------------------------------------
// function getFirstHalfYearPayment(annualPayment){
// 	let firstHalfPayment = 0
// 	for(let p = 0; p < 6; p++){
// 		firstHalfPayment+=annualPayment[p]
// 	}
// 	return firstHalfPayment
// }
// // у другій половині року----------------------------------------------------------------
// function getSecondHalfYearPayment(annualPayment){
// 	let secondHalfPayment = 0
// 	for(let s=6; s < 12; s++){
// 		secondHalfPayment+=annualPayment[s]
// 	}
// 	return secondHalfPayment
// }
// // за літо;----------------------------------------------------------------
// function getSummerPrice(annualPayment){
// 	let summerPrice = 0
// 	for(let l = 5; l < 8; l++){
// 		summerPrice+=annualPayment[l]
// 	}
// 	return summerPrice
// }
// // за ІІ квартал----------------------------------------------------------------
// function getPaymentQuarterTwo(annualPayment){
// 	let quarterTwoPayment = 0
// 	for (let q = 3; q < 6; q++){
// 		quarterTwoPayment += annualPayment[q]
// 	}
// 	return quarterTwoPayment
// }
// // за парні місяці (з парними номерами)----------------------------------------------------------------
// function getPaymentEvenMonth(annualPayment){
// 	let evenMonthPayment = 0
// 	for(let ev = 1; ev < 12; ev+=2){
// 		evenMonthPayment+=annualPayment[ev]
// 	}
// 	return evenMonthPayment
// }
// //за місяці, які є початковими у сезоні (весна, літо, осінь, зима)----------------------------------------------------------------
// function getPaymentFirstMonthSeason(annualPayment){
// 	let paymentMonthSeason = 0
// 	for (let z = 2; z < 12; z+=3){
// 		paymentMonthSeason+=annualPayment[z]
// 	}
// 	return paymentMonthSeason
// }

// //----------------------------------------------------------------
// const annualPayment = getArrPayment()
// const totalPayment = getTotalPriceYear(annualPayment)
// const firstHalfPayment = getFirstHalfYearPayment(annualPayment)
// const secondHalfPayment = getSecondHalfYearPayment(annualPayment)
// const summerPrice = getSummerPrice(annualPayment)
// const quarterTwoPayment = getPaymentQuarterTwo(annualPayment)
// const evenMonthPayment = getPaymentEvenMonth(annualPayment)
// const paymentMonthSeason = getPaymentFirstMonthSeason(annualPayment)
// // --------------
// document.write(`<div style='font-size:25px'>${annualPayment}</div><hr>`)
// document.write(`<div style='font-size:25px'>Total payment for year: ${totalPayment}</div><hr>`)
// document.write(`<div style='font-size:25px'>Total payment for first half of year: ${firstHalfPayment}</div><hr>`)
// document.write(`<div style='font-size:25px'>Total payment for second half of year: ${secondHalfPayment}</div><hr>`)
// document.write(`<div style='font-size:25px'>Total payment for summer: ${summerPrice}</div><hr>`)
// document.write(`<div style='font-size:25px'>Total payment for II quarter: ${quarterTwoPayment}</div><hr>`)
// document.write(`<div style='font-size:25px'>Total payment for even months: ${evenMonthPayment}</div><hr>`)
// document.write(`<div style='font-size:25px'>Total payment for first month in each season: ${paymentMonthSeason}</div><hr>`)
// }

// Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). 
// Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.
// if(confirm(`Start`)){
// // -------------------------------------------------------------
// function getRandomValue(minValue, maxValue){
// 	return -500 + Math.floor(Math.random() * (500 - -500 + 1))
// }
// // -------------------------------------------------------------
// function getArrayPrize(){
// 	const arrPrizes = []
// 	for(let i = 0; i < 10; i++){
// 		const arrPrize = getRandomValue(-500,500)
// 		arrPrizes.push(arrPrize)
// 	}
// 	return arrPrizes
// }
// // -------------------------------------------------------------
// function getUserPrize(arrPrizes){
// 	let totalPrize = 0
// 	let userAnswer = 'yes'
	
//  while (userAnswer === 'yes') {
// 	userAnswer = prompt('Game yes/no')
// 	if(userAnswer !== 'yes') break
// 	let userNumber = parseInt(prompt("Enter the number 1 to 10"))
// 	alert(`You won ${arrPrizes[userNumber - 1]}`)
// 		totalPrize+=arrPrizes[userNumber-1]
//  }
//  return totalPrize
// }
// // -------------------------------------------------------------
// const arrPrizes = getArrayPrize()
// const result = getUserPrize(arrPrizes)
// // ------------
// document.write(`<div>${arrPrizes}</div><hr>`)
// document.write(`<div>You won: ${result}</div><hr>`)
// }