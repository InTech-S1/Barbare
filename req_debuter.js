//=========================================================================
// Traitement de "req_commencer"
// Auteurs : P. Thiré & T. Kerbrat
// Version : 12/09/2018
//=========================================================================
"use strict";

const fs = require("fs");
require('remedial');

const req_debuter = function (req, res, query) {

	let marqueurs;
	let page;
	let sid;

	// AFFICHAGE DE LA PAGE D'ACCUEIL

	page = fs.readFileSync('modele_debuter.html', 'utf-8');

	sid = query.sid;
	fs.writeFileSync("ids/" + sid);

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.pseudo = "";
	marqueurs.sid = sid;
	page = page.supplant(marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = req_debuter;
