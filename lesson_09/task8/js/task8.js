"use strict";
// ------------------------
if(confirm('Start')){
const names = ['Dima', 'Anton', 'Olya', 'Vika']
document.write(`<div>${names}</div>`)

const firstLetterName = names.map((element) => element[0])
document.write(`<div>${firstLetterName}</div>`)
}