"use strict";
// ------------------------
if(confirm('Start')){
	let productPrices = [1000, 200, 30]
	let productsTitles = ['cheese', 'juice', 'bread']
	
	const userMoney = parseInt(prompt("Enter your budget:"))
	const totalPrice = getTotalPrice(productPrices)
	// -------------------------------------------------------------------------------
	function showResultPurchase(money,price,title){
		let result 
		if(userMoney >= productPrices[0] && userMoney < totalPrice) 
		result = `You can buy ${productsTitles[0]} or ${productsTitles[1]} or ${productsTitles[2]}`
		// alert(`You can buy ${productsTitles[0]} or ${productsTitles[1]} or ${productsTitles[2]}`)
		else if(userMoney > totalPrice) 
		result = "You can buy all"
		// alert("You can buy all")
		else if(userMoney < (productPrices[1]) && userMoney > productPrices[2]) 
		result = `You can buy ${productsTitles[2]}`
		// alert(`You can buy ${productsTitles[2]}`)
		else if(userMoney <= (productPrices[1]) && userMoney > productPrices[2]) 
		result = `You can buy ${productsTitles[1]} or ${productsTitles[2]}`
		// alert(`You can buy ${productsTitles[1]} or ${productsTitles[2]}`)
		else if(userMoney < productPrices[0] && userMoney > productPrices[1])
		result = `You can buy ${productsTitles[1]} or ${productsTitles[2]}`
		// alert(`You can buy ${productsTitles[1]} or ${productsTitles[2]}`)
		else if(userMoney >= (productPrices[2]) && userMoney < productPrices[1])
		result = `You can buy only ${productsTitles[2]}`
		// alert(`You can buy only ${productsTitles[2]}`)
		else result = "Not enough money"
		// ----------------------------------------
		return result
	}
	// ------------------------------------------------------------------------------------
	function getTotalPrice(productPrices){
		let totalPrice = 0
		for(let i = 0; i<productPrices.length; i++){
			totalPrice+=productPrices[i]
		}
		return totalPrice
	}
	// ------------------------------------------------------------------------------------
	const result = showResultPurchase(userMoney, productPrices, productsTitles)
	document.write(`<div>${result}</div>`)
}
