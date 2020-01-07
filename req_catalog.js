"use strict";

const fs = require('fs');
require('remedial');

const req_catalog = function(req, res, query){
	
	let marqueurs;
	let page;

	page = fs.readFileSync('catalog.html', 'utf-8');

	marqueurs = {};

	marqueurs.erreur = "";

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

module.exports = req_catalog;
