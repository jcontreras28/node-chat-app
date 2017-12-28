var expect = require('expect');
var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Me';
        var text = 'The message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from: from,
            text: text
        });

    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Me';
        var lat = '55';
        var long = '77';
        var url = `https://www.google.com/maps?q=${lat},${long}`;
        var message = generateLocationMessage(from, lat, long);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from: from,
            url: url
        });

    });
});