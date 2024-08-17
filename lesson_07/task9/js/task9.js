'use strict'
// ------------------------
function getMinusTemperature(a, b, c, d, x, y, z){
	let minusTemperature = 0
	a < 0 ? minusTemperature++ : 'null'
	b < 0 ? minusTemperature++ : 'null'
	c < 0 ? minusTemperature++ : 'null'
	d < 0 ? minusTemperature++ : 'null'
	x < 0 ? minusTemperature++ : 'null'
	y < 0 ? minusTemperature++ : 'null'
	z < 0 ? minusTemperature++ : 'null'
	// ------------------------------------
	return minusTemperature
}		
document.write(`<div>Days with minus temperature: ${getMinusTemperature(23, 54, 0, -24, -34, 4, 1)}</div>`)	