//=========================================================================
// Traitement de "req_commencer"
// Auteurs : P. Thiré & T. Kerbrat
// Version : 12/09/2018
//=========================================================================
"use strict";

const fs = require("fs");
require('remedial');

const req_survie = function (req, res, query) {

	const setup = require("./setup.js");

	let marqueurs;
	let page;
	
	setup(req, res, query);
};
//--------------------------------------------------------------------------

module.exports = req_survie;
