"use strict";

const fs = require("fs");
require('remedial');

const req_fin_histoire = function (req, res, query, niveau) {

    let marqueurs;
    let page;


    page = fs.readFileSync('fin_histoire.html', 'utf-8');

    marqueurs = {};
    marqueurs.erreur = ""
	marqueurs.level = niveau[0];
    page = page.supplant(marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
};

module.exports = req_fin_histoire;
