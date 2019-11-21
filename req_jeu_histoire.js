// Jeu mode histoire

"use strict";

const fs = require("fs");
require('remedial');

const req_jeu_histoire = function (req, res, query, bfld) {

	const setup = require("./setup.js");
	
	setup(req, res, query, bfld);
};

module.exports = req_jeu_histoire;
