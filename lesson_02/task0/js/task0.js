"use strict"
// --------------------------------------------

let a = parseFloat(prompt('Enter the a', ''))
let b = parseFloat(prompt('Enter the b', ''))

// --------------------------------------------

let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * 3)
let s4 = Math.sin(a / -b)

// --------------------------------------------

document.write(`<br>
s1 = ${s1} <br>
s2 = ${s2} <br>
s3 = ${s3} <br>
s4 = ${s4} <br>
`)

// -------------------------------------------