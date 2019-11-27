"use strict";

const dead_ennemi = function(req, res, query, bfld, wave, oppo, heros){

	let tmp;

	for(let i = 0; i < oppo.length; i++){
		tmp = oppo[i];
		if(tmp.life <= 0){
			oppo.splice(i, 1);
			bfld[tmp.x][tmp.y] = " ";
			i = 0;
		}
	}

};

module.exports = dead_ennemi;
