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
				if(query.action === "Haut"){
                    html += '<div class="land"><div class="perso up"></div></div>';

                } else if(query.action === "Bas"){
                    html += '<div class="land"><div class="perso down"></div></div>';

                } else if(query.action === "Gauche"){
                    html += '<div class="land"><div class="perso left"></div></div>';

                } else if(query.action === "Droite"){
                    html += '<div class="land"><div class="perso right"></div></div>';
				} else {
                    html += '<div class="land"><div class="perso left"></div></div>';

                }

			} else if (grille_magasin[i][j] === "1") {
				html += '<div class="land"></div>';
			} else if(grille_magasin[i][j] === "m"){
				html += '<div class="land">m</div>';
			}
		}

		html += '</div>';
	}
	
	return html;

};

module.exports = magasin;
