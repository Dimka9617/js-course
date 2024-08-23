"use strict";
// ------------------------

if(confirm(`Start`)){

	function getRandomValue(min,max){
		return 100 + Math.floor(Math.random() * (1000-100+1))
	}
// ----------------------------------------------------------------
function getArrPayment(){
	const annualPayment = []
	for(let i = 0; i<12; i++){
		const monthPayment = getRandomValue(100, 1000)
		annualPayment.push(monthPayment)
	}
	return annualPayment
}
// за весь рік----------------------------------------------------------------
function getTotalPriceYear(annualPayment){
	let totalPayment = 0
	for(let m = 0; m < annualPayment.length; m++){
		totalPayment+=annualPayment[m]
	}
	return totalPayment
}
// у першій половині року----------------------------------------------------------------
function getFirstHalfYearPayment(annualPayment){
	let firstHalfPayment = 0
	for(let p = 0; p < 6; p++){
		firstHalfPayment+=annualPayment[p]
	}
	return firstHalfPayment
}
// у другій половині року----------------------------------------------------------------
function getSecondHalfYearPayment(annualPayment){
	let secondHalfPayment = 0
	for(let s=6; s < 12; s++){
		secondHalfPayment+=annualPayment[s]
	}
	return secondHalfPayment
}
// за літо;----------------------------------------------------------------
function getSummerPrice(annualPayment){
	let summerPrice = 0
	for(let l = 5; l < 8; l++){
		summerPrice+=annualPayment[l]
	}
	return summerPrice
}
// за ІІ квартал----------------------------------------------------------------
function getPaymentQuarterTwo(annualPayment){
	let quarterTwoPayment = 0
	for (let q = 3; q < 6; q++){
		quarterTwoPayment += annualPayment[q]
	}
	return quarterTwoPayment
}
// за парні місяці (з парними номерами)----------------------------------------------------------------
function getPaymentEvenMonth(annualPayment){
	let evenMonthPayment = 0
	for(let ev = 1; ev < 12; ev+=2){
		evenMonthPayment+=annualPayment[ev]
	}
	return evenMonthPayment
}
//за місяці, які є початковими у сезоні (весна, літо, осінь, зима)----------------------------------------------------------------
function getPaymentFirstMonthSeason(annualPayment){
	let paymentMonthSeason = 0
	for (let z = 2; z < 12; z+=3){
		paymentMonthSeason+=annualPayment[z]
	}
	return paymentMonthSeason
}

//----------------------------------------------------------------
const annualPayment = getArrPayment()
const totalPayment = getTotalPriceYear(annualPayment)
const firstHalfPayment = getFirstHalfYearPayment(annualPayment)
const secondHalfPayment = getSecondHalfYearPayment(annualPayment)
const summerPrice = getSummerPrice(annualPayment)
const quarterTwoPayment = getPaymentQuarterTwo(annualPayment)
const evenMonthPayment = getPaymentEvenMonth(annualPayment)
const paymentMonthSeason = getPaymentFirstMonthSeason(annualPayment)
// --------------
document.write(`<div style='font-size:25px'>${annualPayment}</div><hr>`)
document.write(`<div style='font-size:25px'>Total payment for year: ${totalPayment}</div><hr>`)
document.write(`<div style='font-size:25px'>Total payment for first half of year: ${firstHalfPayment}</div><hr>`)
document.write(`<div style='font-size:25px'>Total payment for second half of year: ${secondHalfPayment}</div><hr>`)
document.write(`<div style='font-size:25px'>Total payment for summer: ${summerPrice}</div><hr>`)
document.write(`<div style='font-size:25px'>Total payment for II quarter: ${quarterTwoPayment}</div><hr>`)
document.write(`<div style='font-size:25px'>Total payment for even months: ${evenMonthPayment}</div><hr>`)
document.write(`<div style='font-size:25px'>Total payment for first month in each season: ${paymentMonthSeason}</div><hr>`)
}
