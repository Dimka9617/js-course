"use strict";
// ------------------------
if(confirm("Start")){
	function getRandomValue(min,max){
	return 1 + Math.floor(Math.random() * (100-1+1))
}
// -----------------------------------------------------------
function getArrCustomers(){
	const customers = []
	for(let i = 0; i<7; i++){
		const customerPerDay = getRandomValue(1, 100)
		customers.push(customerPerDay)
	}
	return customers
}
// -номери днів, протягом яких кількість відвідувачів була меншою за 20;----------------------------------------------------------
function getDaysLessThanTwenty(customers){
	const daysLessTwenty =[]
	for(let d = 0; d<customers.length; d++){
		if(customers[d] < 20) daysLessTwenty.push(d+1)
	}
	return daysLessTwenty
}
// номери днів, коли кількість відвідувачів була мінімальною;----------------------------------------------------------
function getMinCustomersDay(customers){
const minCustomerValue = Math.min(...customers)
const minDay = []
for(let x = 0; x < customers.length; x++){
	if(minCustomerValue === customers[x]) minDay.push(x+1)
}
return minDay
}
// номери днів, коли кількість відвідувачів була максимальною;----------------------------------------------------------
function getMaxCustomerDay(customers){
	const maxCustomerValue = Math.max(...customers)
	const maxDay = []
	for(let c= 0; c<customers.length; c++){
		if(customers[c] === maxCustomerValue) maxDay.push(c+1)
	}
return maxDay
}
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних----------------------------------------------------------
function getCustomersWeekDays(customers){
	let customersWeekDays = 0
	for(let a = 0; a <=4; a++){
		customersWeekDays+=customers[a]
	}
	return customersWeekDays
}
// ----------------------
function getCustomersWeekend(customers){
	let customersWeekend = 0
	for(let y = 5; y <=6; y++){
		customersWeekend+=customers[y]
	}
	return customersWeekend
}
// -----------------------------------------------------------
const customers = getArrCustomers()
const daysTwenty =  getDaysLessThanTwenty(customers)
const minDay = getMinCustomersDay(customers)
const maxDay = getMaxCustomerDay(customers)
const customersWeekDay = getCustomersWeekDays(customers)
const customerWeekend = getCustomersWeekend(customers)

document.write(`<div style='font-size:26px'>Customers during the week:<br>
Monday: ${customers[0]}<br>
Tuesday: ${customers[1]}<br>
Wednesday: ${customers[2]}<br>
Thursday: ${customers[3]}<br>
Friday: ${customers[4]}<br>
Saturday: ${customers[5]}<br>
Sunday: ${customers[6]}<br>
${customers}
<hr></div>`)
document.write(`<div style='font-size:26px'>Days number when customers were less than 20: <strong>${daysTwenty}</strong></div>`)
document.write(`<div style='font-size:26px'>The number of day when were min customers is <strong>${minDay}</strong></div>`)
document.write(`<div style='font-size:26px'>The number of day when were max customers is <strong>${maxDay}</strong></div>`)
document.write(`<div style='font-size:26px'>Customers during the week days:  <strong>${customersWeekDay}</strong></div>`)
document.write(`<div style='font-size:26px'>Customers during the weekend:  <strong>${customerWeekend}</strong></div>`)
}