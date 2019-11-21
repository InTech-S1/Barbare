"use strict";

const move = function(req, res, query, bfld){

	const setup = require("./setup.js");

	let play = query.action;
	let op = 0;

	if (play === "Haut"){
		for(let i = 0; i < bfld.length; i++){
			for(let j = 0; j < bfld[0].length; j++){
				if (bfld[i][j] === "x" && op === 0){
					if (i !== 0){
						bfld[i-1][j] = "x";
						bfld[i][j] = " ";
						op = op + 1;
					}
				}
			}
		}
	}else if(play === "Bas"){
		for(let i = 0; i < bfld.length; i++){
            for(let j = 0; j < bfld[0].length; j++){
                if (bfld[i][j] === "x" && op === 0){
                    if (i !== 3){	
						bfld[i+1][j] = "x";
                    	bfld[i][j] = " ";
                		op = op + 1;
					}
				}
            }
        }
	}else if(play === "Gauche"){
		for(let i = 0; i < bfld.length; i++){
            for(let j = 0; j < bfld[0].length; j++){
                if (bfld[i][j] === "x" && op === 0){
                    if (j !== 0){
						bfld[i][j-1] = "x";
                    	bfld[i][j] = " ";
                		op = op + 1;
					}
				}
            }
        }
	}else if(play === "Droite"){
		for(let i = 0; i < bfld.length; i++){
            for(let j = 0; j < bfld[0].length; j++){
                if (bfld[i][j] === "x" && op === 0){
                    if (j !== 7){
						bfld[i][j+1] = "x";
                    	bfld[i][j] = " ";
                		op = op + 1;
					}
				}
            }
        }
	}

	setup(req, res, query, bfld);

};

module.exports = move;
