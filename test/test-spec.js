var expect = require('chai').expect;

describe('test_suite1', () => {
    describe('test_suite2', () => {
        it('test2', () => {
            expect(false).to.equal(false);
        });
    });
    it('test1', () => {
        expect(true).to.equal(true);
    });
});
