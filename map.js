"use strict";

const map = function (bfld, query) {

	let html;
	let i;
	let j;

	html = '';

	for (i = 0; i < bfld.length; i++) {
		html += '<div class="land-ligne">';
		for (j = 0; j < bfld[i].length; j++) {
			if (bfld[i][j] === " "){
                html += '<div class="land"> </div>';
            }else if(bfld[i][j] === "x"){
                html += '<div class="land"><img class="perso" src="hero2.gif" /></div>';
			/*	if(query.action === "Droite") {
					html += '<div class="land"><img class="perso" src="walk_droite.gif" /></div>';	
				} else if (query.action === "Gauche") {
					html += '<div class="land"><img class="perso" src="walk_gauche.gif" /></div>';	
				} else if (query.action === "Attaquer") {
					
					html += '<div class="land"><img class="perso" src="attaque_gauche.gif" /></div>';	
				} else {
                html += '<div class="land"><img class="perso" src="hero2.gif" /></div>';
					
				}*/
            }else if(bfld[i][j] === "o"){
                html += '<div class="land"><img class="ghost" src="monster.gif" /></div>';
            }

		}
		html += '</div>';
	}

	return html;
};

module.exports = map;
