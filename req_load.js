"use strict";

const fs = require("fs");
require('remedial');

const load = function (req, res, query, bfld, heros, oppo, wave, niveau, save, save2){

	const req_jeu_histoire = require("./req_jeu_histoire.js");
	
	 let tmp = {"x" : 3, "y" : 2, "life" : 200, "scry" : 1, "epee"
: 1, "hache" : 0, "dague" : 0, "huile" : 0, "pieces" : 0};

	if(query.action === "load1"){
		niveau[0] = save[0];
		if(niveau[0] !== 1){
			tmp.life = save[1];
			tmp.epee = save[2];
			tmp.hache = save[3];
			tmp.dague = save[4];
			tmp.huile = save[5];
			tmp.pieces = save[6];
			heros.push(tmp);
		}
	}else if(query.action === "load2"){
		niveau[0] = save2[0];
		if(niveau !== 1){
			tmp.life = save2[1];
            tmp.epee = save2[2];
            tmp.hache = save2[3];
            tmp.dague = save2[4];
            tmp.huile = save2[5];
            tmp.pieces = save2[6];
			heros.push(tmp);
		}
	}
	

	req_jeu_histoire(req, res, query, bfld, heros, oppo, wave, niveau);
};

module.exports = load;
