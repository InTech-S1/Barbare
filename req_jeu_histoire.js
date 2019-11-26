// Jeu mode histoire

"use strict";

const fs = require("fs");
require('remedial');

const req_jeu_histoire = function (req, res, query, bfld, heros) {

	const setup = require("./setup.js");
	
	let tmp = {"x" : 1, "y" : 1, "life" : 500, "scry" : 1};
	heros.push(tmp);
	setup(req, res, query, bfld);
};

module.exports = req_jeu_histoire;
