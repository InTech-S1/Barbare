// Jeu mode histoire

"use strict";

const fs = require("fs");
require('remedial');

const map = require("./map.js");

const req_jeu_histoire = function (req, res, query, bfld, heros, oppo, wave, niveau){
	
	let marqueurs;
	let page;
	let tmp = {"x" : 3, "y" : 0, "life" : 200, "scry" : 1, "epee" : 1, "hache" : 0, "dague" : 0, "huile" : 0, "pieces" : 0};
	if(niveau[0] === 1){
		heros.splice(0, 1);
		heros.push(tmp);
	}else{
		heros[0].x = 3;
		heros[0].y = 0;
	}	

//	let tmp2 = heros[0];
//	tmp2.x = 1;
//	tmp2.y = 1;
	
	for(let i = 1; i < bfld.length - 1; i ++){
		for(let j = 1; j< bfld[0].length - 1; j++){
			bfld[i][j] = " ";
		}
	}

	bfld[3][0] = "x";
	wave[0] = 0;
	for(let k = 0; k < oppo.length; k++){
		oppo.splice(k, 1);
		k = k - 1;
	}
		
	console.log(bfld);
	
	let n = niveau[0];
	page = fs.readFileSync("map" + n +".html", "utf-8");
	marqueurs = {};
	marqueurs.land = map(bfld);

	res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(page.supplant(marqueurs));
    res.end();
};

module.exports = req_jeu_histoire;
