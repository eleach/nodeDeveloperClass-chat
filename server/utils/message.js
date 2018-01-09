var moment = require('moment');

var generateMessage= ( from, text ) => {

	return {
		from,
		text,
		createdAt: moment().valueOf()
		}
}

var generateLocationMessage = (from, latitude, longitude) => {
	return {

		from,
		url: `https://www.google.com/maps?q${latitude},${longitude}`,
		createdAt: moment().valueOf()
		}
}

// console.log( generateLocationMessage("j", 21.5432, -67.5432 ));


module.exports = { generateMessage, generateLocationMessage };

