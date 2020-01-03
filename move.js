"use strict";

const fs = require("fs");
require("remedial");

const map = require('./map.js');
const pop_ennemi = require("./pop_ennemi.js");
const move_ennemi = require("./move_ennemi.js");
const dead_ennemi = require("./dead_ennemi.js");
const attaque_ennemi = require("./attaque_ennemi.js");

const move = function(req, res, query, bfld, wave, oppo, heros, niveau, life_enemy){

	let play = query.action;
	let op = 0;
	let step = 0;
	let perso = heros[0];
	let tmp;
	let target;
	let checktarget = 0;
	let damage;
	let cx;
	let cy;
	let html;
	let ennemi;
	let money;
	let marqueurs;
	let page;
	let reponse;
	

	// On fait apparaitre les ennemis que si le joueur est sur la 4ème ligne.
	for(let i = 0; i < bfld.length; i++){
    	for(let j = 0; j < bfld[0].length; j++){
        	if (bfld[i][j] === "x"){
				cx = i;
				cy = j;

				if (cy === 3 && wave[0] === 0){
					console.log("cy = " + cy);
        			ennemi = pop_ennemi(bfld);
					oppo.push(...ennemi);
        			wave[0] = wave[0] + 1;
					step = 1;
				}
			}
		}
	}

	// Si le joueur n'a pas remplit les conditions, on fait déplacer et attaquer les ennemis.
 	if(step === 0){
	    move_ennemi(bfld, oppo, heros);
	  	attaque_ennemi(oppo, heros);
	}
	
	if (play === "Haut"){
		if (cx !== 0 && op === 0){
			if (bfld[cx-1][cy] === " "){
				bfld[cx-1][cy] = "x";
				bfld[cx][cy] = " ";
				perso.x = perso.x-1;
				op = op + 1;
			}
		}
	}else if(play === "Bas"){
		if (cx !== 5 && op === 0){
            if (bfld[cx+1][cy] === " "){	
				bfld[cx+1][cy] = "x";
            	bfld[cx][cy] = " ";
				perso.x = perso.x + 1;
            	op = op + 1;
			}
        }
	}else if(play === "Gauche"){
		if (cy !== 0 && op === 0){
			if (bfld[cx][cy-1] === " "){
            	bfld[cx][cy-1] = "x";
            	bfld[cx][cy] = " ";
				perso.y = perso.y - 1;
            	perso.scry = 0;
				op = op + 1;
			}else if(bfld[cx][cy-1] === "o"){
				perso.scry = 0;
			}
        }
	}else if (play === "Droite"){
		if (cy !== 11 && op === 0){
            if (bfld[cx][cy+1] === " "){	
				bfld[cx][cy+1] = "x";
            	bfld[cx][cy] = " ";
				perso.y = perso.y + 1;
            	perso.scry = 1;
				op = op + 1;
        	}else if(bfld[cx][cy+1] === "o"){
				perso.scry = 1;
			}
		}
		
	}else if (play === "Attaquer"){
		if(perso.scry === 1){
			for(let k = 0; k < oppo.length; k++){
				tmp = oppo[k];
				if (tmp.x === perso.x && tmp.y === perso.y + 1){
					target = tmp;
					checktarget = checktarget + 1;
				}
			}
			if (checktarget === 1){
				damage = Math.floor(Math.random()*20) + 10;
				target.life = target.life - damage;;
			}
		}else if (perso.scry === 0){
			for(let k = 0; k < oppo.length; k++){
                tmp = oppo[k];
                if (tmp.x === perso.x && tmp.y === perso.y - 1){
                    target = tmp;
					checktarget = checktarget + 1;
                }
            }
			if (checktarget === 1){
            	damage = Math.floor(Math.random()*20) + 10;
				target.life = target.life - damage;
				console.log(target.life);
			}
		}
		life_enemy = target.life;
		console.log(life_enemy);
	}
	
	dead_ennemi(bfld, oppo);

	console.log(bfld);
	console.log(heros);
	console.log(oppo);
	// === Envoi de la page HTML === //

	reponse = {
		"type" : "",
		"value" : "",
		"life": "",
	};
	marqueurs = {};

	if(perso.life <= 0){
		// Quand le joueur n'a plus de vie.
		page = fs.readFileSync('fin_histoire.html', 'utf-8');

		marqueurs.erreur = "";
		marqueurs.level = niveau[0];

		reponse.type = 'update';
		reponse.value = page.supplant(marqueurs);
	}else if(oppo.length === 0 && wave[0]!== 0){
		wave[0] = wave[0] + 1;
		if (wave[0] < 3){
			// Vague suivante (dans le même niveau).
			ennemi = pop_ennemi(bfld);
			oppo.push(...ennemi);

			reponse.type = 'refresh';
			reponse.value = map(bfld, query);
			//reponse.life = attaque_ennemi(oppo, heros);
		}else if (wave[0] === 3){
			// Niveau suivant.
			money = Math.floor(Math.random()*10 + niveau[0]);
			heros[0].pieces = heros[0].pieces + money;
    		niveau[0] = niveau[0] + 1;
			
		/*	page = fs.readFileSync(
				(niveau[0] % 2 === 0 ? 'palier.html' : 'palier2.html'),
				'utf-8'
			);

			marqueurs.erreur = "";
			marqueurs.level = niveau[0];
			if(niveau[0] % 2 === 0) {
				reponse.value = '/req_boutique';
			} else {
				reponse.value = '/req_passer_niveau';
			}*/
			reponse.type = 'update';
			reponse.value = '/req_boutique';
		}
	}else{
		// Continuer le jeu.
		reponse.type = 'refresh';
		reponse.value = map(bfld, query);
		reponse.life = attaque_ennemi(oppo, heros);

		
	
	}

	res.writeHead(200, {'Content-Type' : 'application/json'});
	res.write(JSON.stringify(reponse));
	res.end();
};

module.exports = move;
