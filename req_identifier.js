//=========================================================================
// Traitement de "req_identifier"
// Auteurs : P. Thiré & T. Kerbrat
// Version : 12/09/2018
//=========================================================================
"use strict";

const fs = require("fs");
require('remedial');

const trait = function (req, res, query, uuidV4) {

	let marqueurs;
	let pseudo;
	let password;
	let page;
	let membre;
	let contenu_fichier;
	let listeMembres;
	let i;
	let trouve;
	let sid;

	// ON LIT LES COMPTES EXISTANTS

	contenu_fichier = fs.readFileSync("membres.json", 'utf-8');
	listeMembres = JSON.parse(contenu_fichier);

	// ON VERIFIE QUE LE PSEUDO/PASSWORD EXISTE

	trouve = false;
	i = 0;
	while (i < listeMembres.length && trouve === false) {
		if (listeMembres[i].pseudo === query.pseudo) {
			if (listeMembres[i].password === query.password) {
				trouve = true;
			}
		}
		i++;
	}

	// ON RENVOIT UNE PAGE HTML 

	if (trouve === true) {
		
		page = fs.readFileSync('modele_accueil_membre.html', 'UTF-8');
		marqueurs = {};
        marqueurs.sid = uuidV4();
		marqueurs.pseudo = query.pseudo;
        page = page.supplant(marqueurs);

	} else {

		page = fs.readFileSync('modele_accueil.html', 'utf-8');

        marqueurs = {};
        marqueurs.erreur = "ERREUR : compte ou mot de passe incorrect";
        marqueurs.pseudo = "";
        page = page.supplant(marqueurs);

	}

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;
