var expect = require('expect');


var {generateMessage, generateLocationMessage} = require('./message')


describe('generateMessage', () => {

	it('should generate the correct message object', () => {

		var from = 'jen';
		var text = 'text';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({ from, text } );

	});

});

describe('generateLocationMessage', () => {

	it('should generate correct location object', () => {

	var from = "jen";
	var lat = 6;
	var long = 2;

	var message = generateLocationMessage(from, lat, long);

	expect(message.from).toBeA('string');
	expect(message.url).toInclude('google');
	expect(message.url).toMatch('https://www.google.com/maps?q6,2');
	expect(message.createdAt).toBeA('number');

	});

});







