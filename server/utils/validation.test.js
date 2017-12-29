const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var text = 55;
        var res = isRealString(text);

        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var text = '    ';
        var res = isRealString(text);

        expect(res).toBe(false);
    });

    it('should accept valid string', () => {
        var text = 'test string';
        var res = isRealString(text);

        expect(res).toBe(true);
    });
});
