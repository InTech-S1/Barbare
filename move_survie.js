"use strict";

const fs = require("fs");
require("remedial");

const map_survie = require('./map_survie.js');
const pop_ennemi_survie = require("./pop_ennemi_survie.js");
const move_ennemi = require("./move_ennemi.js");
const dead_ennemi = require("./dead_ennemi.js");
const attaque_ennemi = require("./attaque_ennemi.js");



const move_survie = function(req, res, query, bfld, wave, oppo, heros, niveau, life_enemy){

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

      			if (cy === 5 && wave[0] === 0){
                    console.log("cy = " + cy);
                    ennemi = pop_ennemi_survie(bfld, wave);
                    oppo.push(...ennemi);
                    wave[0] = wave[0] + 1;
                    step = 1;

                }
            }
        }
    }

    // Si le joueur n'a pas remplit les conditions, on fait déplacer et attaquer les ennemis.
    if(step === 0){
		attaque_ennemi(oppo, heros);
		move_ennemi(bfld, oppo, heros);
       
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
        if (cy !== 2 && op === 0){
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
        if (cy !== 13 && op === 0){
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
		} else if (play === "Soigner" && heros[0].potion >= 1) {
            heros[0].life = 100;	
			heros[0].potion = heros[0].potion - 1;

        }else if (play === "Attaquer"){
        // epee niveau 1
		if(perso.scry === 1){
            for(let k = 0; k < oppo.length; k++){
                tmp = oppo[k];
                if (tmp.x === perso.x && tmp.y === perso.y + 1){
                    target = tmp;
                    checktarget = checktarget + 1;
                }
            }
            if (checktarget === 1){
                damage = Math.floor(Math.random()*10) + 10;
                target.life = target.life - damage;
            }
        }else if (perso.scry === 0){
            for(let k = 0; k < oppo.length; k++){
                tmp = oppo[k];
                if (tmp.x === perso.x && tmp.y === perso.y - 1){
                    target = tmp;
                    checktarget = checktarget + 1;
                }
            }
            if (checktarget === 1) {
                if (heros[0].epee === 1) {
					damage = Math.floor(Math.random()*10) + 10;
                	target.life = target.life - damage;
            	}else if (heros[0].epee === 2) {
					damage = Math.floor(Math.random()*10) + 20;
                    target.life = target.life - damage;

				}else if (heros[0].epee === 3 ) {
					damage = Math.floor(Math.random()*10) + 30;
                    target.life = target.life - damage;
				}
			}
		}
	}

    dead_ennemi(bfld, oppo);

    console.log(bfld);
    console.log(heros);
    console.log(oppo);
     
	 // === Envoi de la page HTML === //

    reponse = {
        "type" : "",
        "value" : "",
    };
    marqueurs = {};

    if(perso.life <= 0){
        // Quand le joueur n'a plus de vie.
        page = fs.readFileSync('fin_survie.html', 'utf-8');

        marqueurs.erreur = "";
        marqueurs.level = wave[0];

        reponse.type = 'update';
        reponse.value = page.supplant(marqueurs);
    }else if(oppo.length === 0 && wave[0]!== 0){
        wave[0] = wave[0] + 1;
       if (wave[0] < 100){
            // Vague suivante
            ennemi = pop_ennemi_survie(bfld, wave);
            oppo.push(...ennemi);

            reponse.type = 'refresh';
            reponse.value = map_survie(bfld, query);
          
		if ( wave[0] !== 0){
           // recupère de une potion de vie tout les niveaux paires.
            heros[0].potion = heros[0].potion + 1;
		
		if(wave[0] === 3) {
			heros[0].epee = heros[0].epee + 1;
			damage = Math.floor(Math.random()*10) + 20;
		}
		}else if (wave[0] === 5) {
			heros[0].epee = heros[0].epee + 2;
			damage = Math.floor(Math.random()*10) + 20;
			heros[0].life = 120;
		}
        }
    }else{
       
        reponse.type = 'refresh';
        reponse.value = map_survie(bfld, query);
        reponse.life = attaque_ennemi(oppo, heros);
    }


    console.log(bfld);
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write(JSON.stringify(reponse));
    res.end();
};

module.exports = move_survie;
