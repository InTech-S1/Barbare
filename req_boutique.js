"use strict";

const fs = require("fs");
require("remedial");

const magasin = require('./magasin.js');

const acces_shop = function(req, res, query, grille_magasin){


	let marqueurs;
	let page;
	let i;
	let j;

 	for(i = 0; i < grille_magasin.length; i ++){
        for(j = 0; j< grille_magasin[i].length; j++){
            if(grille_magasin[i][j] === "1"){
                grille_magasin[i][j] = "";
            
			} else if(grille_magasin[i][j] === "m"){
				grille_magasin[i][j] = "m";
			} else {
				grille_magasin[i][j] = " ";
			}
        }
    }
	grille_magasin[1][25] = "x";
//	console.log(grille_magasin);

	page = fs.readFileSync('palier.html', 'utf-8');
	
	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.grille = magasin(grille_magasin, query);

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = acces_shop;
