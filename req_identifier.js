"use strict";

const fs = require("fs");
require('remedial');

const trait = function (req, res, query, uuidV4, save, save2) {

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
				save[0] = Number(listeMembres[i].sauvegarde1);
				save[1] = Number(listeMembres[i].pv1);
				save[2] = Number(listeMembres[i].epee1);
				save[3] = Number(listeMembres[i].hache1);
				save[4] = Number(listeMembres[i].dague1);
				save[5] = Number(listeMembres[i].huile1);
				save[6] = Number(listeMembres[i].pieces1);


				save2[0] = Number(listeMembres[i].sauvegarde2);
				save2[1] = Number(listeMembres[i].pv2);
                save2[2] = Number(listeMembres[i].epee2);
                save2[3] = Number(listeMembres[i].hache2);
                save2[4] = Number(listeMembres[i].dague2);
                save2[5] = Number(listeMembres[i].huile2);
                save2[6] = Number(listeMembres[i].pieces2);

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
