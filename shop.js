"use strict";

const fs = require("fs");

const interieur_magasin = function (grille_shop, query) {

    let html;
    let i;
    let j;


    html = '';

    for (i = 0; i < grille_shop.length; i++) {
        html += '<div class="grille-ligne">';

        for (j = 0; j < grille_shop[i].length; j++) {
            if (grille_shop[i][j] === " ") {
                html += '<div class="case"></div>';

            } else if (grille_shop[i][j] === "x") {
                html += '<div class="case"><img class="perso" src="hero.gif"></div>';
			
			} else if (grille_shop[i][j] === "1") {
                html += '<div class="case"></div>';
            } else if(grille_shop[i][j] === "l"){
                html += '<div class="case"></div>';
            } else if(grille_shop[i][j] === "s"){
				html += '<div class="case"></div>';
			} else if(grille_shop[i][j] === "e"){
				html += '<div class="case"></div>';
			}else if(grille_shop[i][j] === "d"){
				html += '<div class="case"></div>';
			}
        }

        html += '</div>';
    }

    return html;

};

module.exports = interieur_magasin;
