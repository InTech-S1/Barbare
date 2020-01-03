"use strict";

const map = function (bfld, query) {

	let html;
	let i;
	let j;
	let right = false;

	html = '';

	for (i = 0; i < bfld.length; i++) {
		html += '<div class="ligne">';
		for (j = 0; j < bfld[i].length; j++) {
			if (bfld[i][j] === " " || bfld[i][j] === "1"){
                html += '<div class="land">1</div>';
            }else if(bfld[i][j] === "x"){
				if(query.action === "Haut"){
					html += '<div class="land"><div class="perso up"></div></div>';

				} else if(query.action === "Bas"){
					html += '<div class="land"><div class="perso down"></div></div>';
				} else if(query.action === "Attaquer"){
					html += '<div class="land"><img class="perso" src="Knif-right.gif" /></div>';
				} else if(query.action === "Gauche"){
					html += '<div class="land"><div class="perso left"></div></div>';
				}else if(query.action === "Droite"){
					html += '<div class="land"><div class="perso right"></div></div>';
				} else {
					html += '<div class="land"><div class="perso right"></div></div>';
				}

            }else if(bfld[i][j] === "o"){
                html += '<div class="land"><img class="ghost" src="monster.gif" /></div>';
			}

		}
		html += '</div>';
	}

	return html;
};

module.exports = map;
