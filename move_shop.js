"use strict";

const fs = require('fs');
require('remedial');

const magasin = require('./magasin.js');
//const shop = require("./shop.js");
//const req_shop = require('./req_shop.js');

const move_shop = function(res, req, query, grille_magasin) {

	let page;
	let marqueurs;
	let i, j;
	let play = query.action;
	let reponse;
	let cx;
	let cy;
	let max = false;

	for(i = 0; i < grille_magasin.length; i ++){
        for(j = 0; j< grille_magasin[i].length; j++){
        	if(grille_magasin[i][j] === "x"){
				cx = i;
				cy = j;
        	}
		}
    }

	if (play === "Haut"){
       if (cx !== 0){
           if (grille_magasin[cx-1][cy] === " "){
               grille_magasin[cx-1][cy] = "x";
               grille_magasin[cx][cy] = " ";
           } else if (grille_magasin[cx-1][cy] === "m"){
				console.log('ok');
				max = true;
			}
        }
    }else if(play === "Bas"){
        if (cx !== 19){
            if (grille_magasin[cx+1][cy] === " "){ 
                grille_magasin[cx+1][cy] = "x";
                grille_magasin[cx][cy] = " ";
            }
        }
    }else if(play === "Gauche"){
        if (cy !== 0){
            if (grille_magasin[cx][cy-1] === " "){
                grille_magasin[cx][cy-1] = "x";
                grille_magasin[cx][cy] = " ";
 			} else if(grille_magasin[cx][cy-1] === "m"){
				console.log('ok');
				max = true;
			}
        }
    }else if (play === "Droite"){
        if (cy !== 25 ){
            if (grille_magasin[cx][cy+1] === " "){
                grille_magasin[cx][cy+1] = "x";
                grille_magasin[cx][cy] = " ";
            } 
		}
	} 

    reponse = {
        "type" : "",
        "value" : "",
    };
    marqueurs = {};

	if(max === true){
		 // Afficher l'intérieur du magasin 

		reponse.type = 'update';
		reponse.value = '/req_shop';
		console.log(reponse);
	}else{
        // Sortir du magasin par la porte d'entrée.
        reponse.type = 'refresh';
        reponse.value = magasin(grille_magasin, query);
    }

	//console.log(grille_shop);
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write(JSON.stringify(reponse));
    res.end();



};

module.exports = move_shop;
