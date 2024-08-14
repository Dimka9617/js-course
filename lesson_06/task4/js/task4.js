'use strict'
// ----------------------------------
const str = 'o'
const codeStr = str.charCodeAt(0)
console.log(codeStr)		
		
for(let i=0; i<3; i++){
	for(let n = 1; n<=5; n++){
		for(let x = 1; x<=n; x++){
			document.write(`${String.fromCharCode(codeStr)}`)
		}
		document.write("<br>")
	}
}	