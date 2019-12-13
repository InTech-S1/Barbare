"use strict";

const map = function (bfld) {

	let html;
	let i;
	let j;

	html = '';

	for (i = 0; i < bfld.length; i++) {
		for (j = 0; j < bfld[i].length; j++) {
			if (bfld[i][j] === " "){
                html += '<div class="land"> </div>';
            }else if(bfld[i][j] === "x"){
                html += '<div class="land"><img class="perso" src="hero2.gif" /></div>';
            }else if(bfld[i][j] === "o"){
                html += '<div class="land"><img class="ghost" src="monster.gif" /></div>';
            }

		}
	}

	return html;
};

module.exports = map;
