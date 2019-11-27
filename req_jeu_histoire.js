// Jeu mode histoire

"use strict";

const fs = require("fs");
require('remedial');

const req_jeu_histoire = function (req, res, query, bfld, heros, oppo, wave) {

	const setup = require("./setup.js");
	
	let tmp = {"x" : 1, "y" : 1, "life" : 500, "scry" : 1, "epee" : 1, "hache" : 0, "dague" : 0, "huile" : 0};
	heros.push(tmp);
	let tmp2 = heros[0];
	tmp2.x = 1;
	tmp2.y = 1;
	
	for(let i = 0; i < bfld.length; i ++){
		for(let j = 0; j< bfld[0].length; j++){
			bfld[i][j] = " ";
		}
	}
	bfld[1][1] = "x";
	wave[0] = 0;
	for(let k = 0; k < oppo.length; k++){
		oppo.splice(k, 1);
		k = k - 1;
	}

	setup(req, res, query, bfld);
};

module.exports = req_jeu_histoire;
