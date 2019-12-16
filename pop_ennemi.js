"use strict";

const move = require('./move.js');

const pop_ennemi = function(bfld){

	let oppo;
	let i;
	let j;
	let espace = [];
	let random;
	let x, y;
	let coor;
	let nvEnnemi;

	oppo = [];

	for (i = 0; i < bfld.length; i++) {
		for (j = 0; j < bfld[i].length; j++) {
			if (bfld[i][j] === " ") {
				espace.push([i,j]);
			}
		}
	}

	for (i = 0; i < 3; i++) {
		random = Math.floor(Math.random()*espace.length);
		coor = espace.splice(random)[0]; 
		console.log("longueur des cases vides = " + espace.length);
		x = coor[0];
		y = coor[1];
		console.log(x, y);
		bfld[x][y] = "o";
		nvEnnemi = { "x": x, "y": y, "life": 60, "scry": 0 };
		oppo.push(nvEnnemi);
	}

	return oppo;
};

module.exports = pop_ennemi;
