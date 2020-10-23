var expect = require('chai').expect;

var initNumber = 40;
var increasedNumber = 10 * 5;

before('root setup code', () => {
    console.log('Root Setup code');
});

after('root teardown code', () => {
    console.log('Root Teardown code');
});

beforeEach('root setup for each test', () => {
    console.log('Setup code for each test');
});

afterEach('root teardown of each test', () => {
    console.log('Root Teardown after each test');
});

describe('test-suite-hooks2', () => {

    it('test3', () => {
        console.log('test3');
        expect(true).to.equal(true);
    });

    it('test4', () => {
        console.log('test4');
        expect(initNumber).to.equal(increasedNumber - 10);
    });
});