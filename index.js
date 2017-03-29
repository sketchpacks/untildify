'use strict';

const os = require('os');

const home = os.homedir();

function expandPath(str) {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof str}`);
	}

	return home ? str.replace(/^~($|\/|\\)/, `${home}$1`) : str;
}

module.exports = expandPath;
