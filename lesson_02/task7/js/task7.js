"use strict"
// --------------------------------------------
let minMonth = 1
let maxMonth = 12
// -----------------------------
let minDay = 0
let maxDay = 6
// -----------------------------

let month = minMonth + Math.floor(Math.random()*(maxMonth - minMonth + 1))
alert(`Your random number of month is ${month}`)
// --------------------------------------------------------------------------------------

let day = minDay + Math.floor(Math.random()*(maxDay - minDay + 1))
alert(`Your random number of the day of the week is ${day}`)
// ---------------------------------------------------------------------------------------

let randomSum = month + day
alert(`The sum of your random numbers is  ${randomSum}`)