"use strict";

const fs = require("fs");

const magasin = function (grille_magasin, query) {

	let html;
	let i;
	let j;


	html = '';

	for (i = 0; i < grille_magasin.length; i++) {
		html += '<div class="grille-ligne">';

		for (j = 0; j < grille_magasin[i].length; j++) {
			if (grille_magasin[i][j] === " ") {
				html += '<div class="land"></div>';

			} else if (grille_magasin[i][j] === "x") {
				html += '<div class="land"><img class="perso" src="hero.gif"></div>';
				/*if(query.action == "Droite"){
					if(grille_magasin[i][j+1] === ""){
						html += '<h5 id="h5">NON</h5>';
					}
				} else if (query.action === "Gauche"){
					if(grille_magasin[i][j-1] === ""){
						html += '<h5 id="h5">NON</h5>';
					}
				} else if (query.action === "Haut") {
					if(grille_magasin[i-1][j] === ""){
						html += '<h5 id="h5">NON</h5>';
					}
				} else if (query.action === "Bas"){
					if(grille_magasin[i+1][j] === ""){
						html += '<h5 id="h5">NON</h5>';
					}
				}*/
			} else if (grille_magasin[i][j] === "") {
				html += '<div class="land"></div>';
			} else if(grille_magasin[i][j] === "m"){
				html += '<div class="land"></div>';
			}
		}

		html += '</div>';
	}

	return html;

};

module.exports = magasin;
