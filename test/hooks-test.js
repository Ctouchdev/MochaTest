var expect = require('chai').expect;

var initNumber = 40;
var increasedNumber = 10 * 5;

describe('test-suite-hooks', () => {
    before('setup code', () => {
        console.log('Setup code');
    });

    after('teardown code', () => {
        console.log('Teardown code');
    });

    beforeEach('setup for each test', () => {
        console.log('Setup code for each test');
    });

    afterEach('teardown of each test', () => {
        console.log('Teardown after each test');
    });

    it('test1', () => {
        console.log('test1');
        expect(true).to.equal(true);
    });

    it('test2', () => {
        console.log('test2');
        expect(initNumber).to.equal(increasedNumber - 10);
    });
});