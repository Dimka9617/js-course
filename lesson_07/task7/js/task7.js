'use strict'
// ------------------------
function showImage(){
	const randomImg = 1 + Math.floor(Math.random() * 4)
	document.write(`<div><img src="img/${randomImg}.webp" alt="Image"></div>`)
}																				
showImage()