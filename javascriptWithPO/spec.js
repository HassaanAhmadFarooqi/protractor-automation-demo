let calculator = require('./calculator.po');

describe('Protractor Demo App', function() {
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
        calculator.add(1, 2);
        expect(calculator.getLatestResult()).toEqual((1 + 2).toString());
    });

    it('should add four and six', function() {
        calculator.add(4, 6);
        expect(calculator.getLatestResult()).toEqual((4 + 6).toString());
    });

    it('should read the value from an input', function() {
        calculator.inputFirstNumber(1);
        expect(calculator.getFirstInputValue()).toEqual('1');
    });

    it('should have a history', function() {
        calculator.add(1, 2);
        calculator.add(3, 4);
        expect(calculator.history.count()).toEqual(2);

        calculator.add(5, 6);
        expect(calculator.history.count()).toEqual(3);

        expect(calculator.history.last().getText()).toContain('1 + 2');
        expect(calculator.history.first().getText()).toContain('5 + 6');
    });
});
