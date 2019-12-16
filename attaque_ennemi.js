"use strict";

// TODO: Supprimer les paramètres inutiles de la fonction.
const attaque_ennemi = function(req, res, query, bfld, wave, oppo, heros, niveau){

	let degats;
	let perso = heros[0];
	let tmp;
	let target;
	let checktarget = 0;
	let succes;

	for(let i = 0; i < oppo.length; i++){
		tmp = oppo[i];
		if(tmp.scry === 1){	
			if (tmp.x === perso.x && tmp.y === perso.y -1){
				checktarget = checktarget + 1;
			}else if(tmp.x === perso.x && tmp.y === perso.y + 1){
				tmp.scry = 0;
			}
		}
		if (checktarget === 1){
			degats = Math.floor(Math.random()*10);
			succes = Math.floor(Math.random()*3);
			if (succes === 2){
				perso.life = perso.life - degats;
			}
		}else{
			checktarget = 0;
		}
	}

	for(let j = 0; j < oppo.length; j++){
        tmp = oppo[j];
        if(tmp.scry === 0){ 
            if (tmp.x === perso.x && tmp.y === perso.y +1){
                checktarget = checktarget + 1;
            }else if(tmp.x === perso.x && tmp.y === perso.y -1){
				tmp.scry = 1;
			}
        }
        if (checktarget === 1){
            degats = Math.floor(Math.random()*10);
            succes = Math.floor(Math.random()*3);
            if (succes === 2){
                perso.life = perso.life - degats;
            }
        }else{
            checktarget = 0;
        }
    }


};

module.exports = attaque_ennemi;
