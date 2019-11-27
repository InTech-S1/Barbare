"use strict";

const fs = require("fs");
require("remedial");

const fin_niveau = function(req, res, query, bfld, wave, oppo, heros, niveau){


	let marqueurs;
	let page;

	if(niveau[0]%2 === 0){
		
		page = fs.readFileSync('palier.html', 'utf-8');
	
		marqueurs = {};
		marqueurs.erreur = "";
		marqueurs.level = niveau[0];
	}else{
		page = fs.readFileSync('palier2.html', 'utf-8');
		marqueurs = {};
		marqueurs.erreur = "";
		marqueurs.level = niveau[0];
	}
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = fin_niveau;
