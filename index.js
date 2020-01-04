//

"use strict";

const http = require("http");
const url = require("url");
let mon_serveur;
let port;
let bfld = []; 
let e1 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
let e2 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e3 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e4 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e5 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e6 = ["1","1","1"," "," "," "," "," "," "," "," "," "," "," ","1"];
let e7 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
bfld.push(e1, e2, e3, e4, e5, e6, e7);

let grille_magasin = [];
let a1 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let a2 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", " ", " "];
let a3 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", " ", " "];
let a4 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", " ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1"];
let a5 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1"];
let a6 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1"];
let a7 = ["1","1","1","1","1","1","1","1","1","m","1", "1", "1", "1", " ", "1", "1", "1", "1", " ", " ", " ", " ", "1", "1", "1"];
let a8 = ["1","1","1","1","1","1","1","1"," "," "," ", "1", "1", " ", " ", "1", "1", "1", "1", " ", " ", " ", " ", " ", " ", " "];
let a9 = ["1","1","1","1","1","1","1","1"," "," "," ", " ", "1", " ", " ", "1", "1", "1", "1", " ", " ", " ", "1", "1", " ", " "];
let a10 = ["1","1","1","1","1","1","1","1"," "," "," ", " ", " ", " ", " ", "1", "1", "1", "1", " ", " ", " ", "1", "1", " ", " "];
let a11 = ["1","1","1","1","1","1","1","1"," "," "," ", " ", " ", " ", " ", "1", "1", "1", "1", " ", " ", " ", " ", " ", " ", " "];
let a12 = ["1","1","1","1","1","1","1","1"," "," "," ", " ", " ", " ", " ", "1", "1", "1", "1", " ", " ", " ", " ", " ", " ", " "];
let a13 = ["1","1","1","1","1","1","1","1"," "," "," ", " ", " ", " ", " ", "1", "1", "1", "1", " ", " ", "1", "1", " ", " ", " "];
let a14 = ["1","1","1","1","1","1","1","1"," "," ","1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", "1", "1", " ", " ", " "];
let a15 = ["1","1","1","1","1","1","1","1"," "," ","1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", "1", "1", " ", " ", " "];
let a16 = ["1","1","1","1","1","1","1"," "," "," ","1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", " ", " ", "1", "1", " "];
let a17 = ["1","1","1","1","1","1","1"," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1", "1", " "];
let a18 = ["1","1","1","1","1","1","1"," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", " "];
let a19 = ["1","1","1"," "," "," "," "," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", " "];
let a20 = ["1","1"," "," "," "," "," "," "," ","1","1", "1", "1", " ", " ", " ", " ", "1", "1", " ", " ", " ", "1", "1", "1", " "];
grille_magasin.push(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);

let grille_shop = [];
let b1 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b2 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b3 = ["1","1","1","1","1","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b4 = ["1"," "," "," "," ","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", " ", "s", "s", "s"];
let b5 = [" "," "," "," "," ","1","1","1","1","1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", " ", " ", " ", " ", " ", " "];
let b6 = [" "," "," "," "," ","1","1","1","c","c","1", "1", "1", "1", "1", "1", "1", "c", "1", "1", "1", " ", " ", " ", " ", " ", " "];
let b7 = ["1","1"," "," "," "," "," "," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
let b8 = ["1","1"," "," "," "," "," "," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1"];
let b9 = ["1","1"," "," "," "," "," "," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1"];
let b10 = ["1","1"," "," "," "," "," "," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1"];
let b11 = ["1","1","1","1","1","1","1","1","1","1"," ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b12 = ["1","1","1","1","1","1","1","1","1","1"," ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b13 = ["1","1","1","1","1","1","1","1","1"," "," ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b14 = ["1","1","1","1","1","1","1","1","1"," "," ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b15 = ["1","1","1","1","1","1","1","1","1","1"," ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b16 = ["1","1","1","1","1","1","1","1","1","1"," ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
let b17 = ["1","1","1","1"," "," ","1","1","1","1"," ", " ", " ", " ", " ", " ", " ", " ", " ", "1", "1", " ", " ", "1", "1", "1", "1"];
let b18 = ["1","1"," "," "," "," "," "," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1"];
let b19 = [" "," "," "," "," "," "," "," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
let b20 = [" "," "," "," "," "," "," "," "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
let b21 = [" "," "," "," "," "," "," "," "," "," "," ", " ", " ", "m", "m", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
grille_shop.push(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21);

let wave = [0];
let niveau = [1];
let heros = [];
let oppo = [];


const req_accueil = require("./req_accueil.js");
const req_commencer = require("./req_commencer.js");
const req_afficher_formulaire_inscription = require("./req_afficher_formulaire_inscription.js");
const req_inscrire = require("./req_inscrire.js");
const req_identifier = require("./req_identifier.js");
const req_debuter = require("./req_debuter.js");
const req_jeu_histoire = require("./req_jeu_histoire.js");
const req_jeu_survie = require("./req_jeu_survie.js");
const req_boutique = require("./req_boutique.js");
const req_shop = require("./req_shop.js");

const move = require("./move.js");
const move_shop = require("./move_shop.js");
const move_inn = require("./move_inn.js");
const move_survie = require("./move_survie.js");

//const req_actualiser = require("./req_actualiser.js");

const req_static = require("./req_statique.js");
const req_erreur = require("./req_erreur.js");

let uuidV4 = require('uuid/v4');


const traite_requete = function (req, res) {

	let requete;
	let pathname;
	let query;
	let sid;

	console.log("URL reçue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;


	try {
		switch (pathname) {
			case '/':
			case '/req_accueil':
				req_accueil(req, res, query);
				break;
			case '/req_commencer':
				req_commencer(req, res, query);
				break;
			case '/req_afficher_formulaire_inscription':
				req_afficher_formulaire_inscription(req, res, query);
				break;
			case '/req_inscrire':
				req_inscrire(req, res, query);
				break;
			case '/req_identifier':
				req_identifier(req, res, query, uuidV4);
				break;
			case '/req_debuter':
				req_debuter(req, res, query, niveau, heros);
				break;
			case '/req_jeu_histoire':
				req_jeu_histoire(req, res, query, bfld, heros, oppo, wave, niveau);
				break;
			case '/move':
				move(req, res, query, bfld, wave, oppo, heros, niveau);
				break;
			case '/req_jeu_survie':
				req_jeu_survie(req, res, query, bfld, heros, oppo, wave);
				break;
			case '/move_survie':
				move_survie(req, res, query, bfld, wave, oppo, heros, niveau);
				break;
			case '/req_boutique':
				req_boutique(req, res, query, grille_magasin);
				break;
			case '/move_shop':
				move_shop(res, req, query, grille_magasin);
				break;
			case '/req_shop':
				req_shop(req, res, query, grille_shop, grille_magasin);
				break;
			case '/move_inn':
				move_inn(res, req, query, grille_shop, grille_magasin);
				break;
			//case '/req_actualiser':
			//	req_actualiser(req, res, query, maj, maj_ennemi);
			//	break;
			default:
				req_static(req, res, query);
				break;
		}
	} catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		//console.trace();
		req_erreur(req, res, query);
	}
};


mon_serveur = http.createServer(traite_requete);
port = 5000;
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);
