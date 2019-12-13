"use strict";

const fs = require("fs");
require("remedial");

const fin_niveau = function(req, res, query, bfld, wave, oppo, heros){


	let marqueurs;
	let page;

	page = fs.readFileSync('shop.html', 'utf-8');
	
	marqueurs = {};
	marqueurs.erreur = "";

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = fin_niveau;
