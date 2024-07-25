"use strict"
// --------------------------------------------
let cm = parseInt(prompt("Choose the length", ""))
let metr = cm / 100 
let kmM = metr / 1000 
// ------------------------------------------------------
alert(`${cm}cm this is 
m: ${metr}
km: ${kmM.toFixed(2)}`)