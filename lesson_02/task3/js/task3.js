"use strict"
// --------------------------------------------
let price = parseFloat(prompt("Enter the price", ""))
let quantity = parseInt(prompt("Enter the quantity", ""))
const percentage = 5
// --------------------------------------------------

let totalPrice = price * quantity
let pdv = totalPrice * 5 / 100

// ----------------------------------------------

alert(`Total price : ${totalPrice.toFixed(2)}$
PDV : ${pdv.toFixed(2)}$`)