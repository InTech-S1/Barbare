"use strict";

const fs = require("fs");
require("remedial");

const choix_arme = function(req, res, query, bfld, wave, oppo, heros, niveau, life_enemy, page, marqueurs, reponse){

page = fs.readFileSync('choix.html', 'utf-8');
            
            marqueurs.erreur = "";
            marqueurs.level = wave[0]+2;

            reponse.type = 'update';
            reponse.value = page.supplant(marqueurs);
};

module.exports = choix_arme;
