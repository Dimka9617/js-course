"use strict"
// --------------------------------------------
let sec = parseInt(prompt('How many seconds passed', ''))
let secondsInMinute = sec / 60
let secondsInHour = secondsInMinute / 60
// --------------------------------------------
alert(`${sec} seconds have been passed, its about :
${secondsInMinute.toFixed(2)} minutes 
${secondsInHour.toFixed(2)} hours
`)
