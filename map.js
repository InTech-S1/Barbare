"use strict";

const fs = require("fs");
require('remedial');
const move = require('./move.js');
const map = function (req, res, query, bfld) {

	let marqueurs;
	let page;
	let contenu;
	let html;
	let i;
	let j;


	html = '';
	
	for (i = 0; i < bfld.length; i++) {
		for (j = 0; j < bfld[i].length; j++) {
			if (bfld[i][j] === " "){
                html += '<div class="land"></div>';
            }else if(bfld[i][j] === "x"){
                html += "<div class='land'><img class='perso' src='hero2.gif' /></div>";
				for(let a=0; a<html.length; a++){
				if(query.action === "Attaquer"){
					if(html[a] === "<div class='land'><img class='perso' src='hero2.gif' /></div>"){
					html[a] = "<div class='land'><img class='perso' src='attac2.gif /></div>";	
					}
				}
				}
            }else if(bfld[i][j] === "o"){
                html += '<div class="land"><img class="ghost" src="monster.gif" /></div>';
            }

		}
	}

	page = fs.readFileSync('map.html', 'utf-8');

	marqueurs = {};
	marqueurs.land = html;
	page = page.supplant(marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();

    
};

module.exports = map;
