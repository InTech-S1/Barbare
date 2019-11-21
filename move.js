"use strict";

const move = function(req, res, query, bfld, wave, oppo, heros){

	const setup = require("./setup.js");
	const pop_ennemi = require("./pop_ennemi.js");
	const move_ennemi = require("./move_ennemi.js");

	let play = query.action;
	let op = 0;
	let step = 0;
	let perso = heros[0];
	let cx;
	let cy;

	for(let i = 0; i < bfld.length; i++){
    	for(let j = 0; j < bfld[0].length; j++){
        	if (bfld[i][j] === "x"){
				cx = i;
				cy = j;
				if (cy === 3 && wave[0] === 0){
					console.log("cy = " + cy);
        			pop_ennemi(req, res, query, bfld, oppo);
        			wave[0] = wave[0] + 1;
					step = 1;
    			}else{
					step = 0;
				}
			}
		}
	}
	
 	if(step === 0){
        move_ennemi(req, res, query, bfld, oppo, heros);
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
		if (cx !== 3 && op === 0){
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
            	op = op + 1;
			}
        }
	}else if (play === "Droite"){
		if (cy !== 7 && op === 0){
            if (bfld[cx][cy+1] === " "){	
				bfld[cx][cy+1] = "x";
            	bfld[cx][cy] = " ";
				perso.y = perso.y + 1;
            	op = op + 1;
        	}
		}
	}else if (play === "Attaquer"){
		

	}
	
	console.log(heros);
	console.log(bfld);
	console.log(oppo);
	setup(req, res, query, bfld);
	console.log(bfld);

};

module.exports = move;
