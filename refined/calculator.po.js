class CalculatorRefined {
    constructor() {
        this.firstNumber = element(by.model('first'));
        this.secondNumber = element(by.model('second'));
        this.operatorSelector = element(by.model('operator'));
        this.goButton = element(by.id('gobutton'));
        this.latestResult = element(by.binding('latest'));
        this.history = element.all(by.repeater('result in memory'));

        this.operators = {
            add: 'ADDITION',
            subtract: 'SUBTRACTION',
            multiply: 'MULTIPLICATION',
            divide: 'DIVISION',
            modulo: 'MODULO',
        }
    }

    async loadPage() {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }

    async inputFirstNumber(input) {
        await this.firstNumber.clear();
        await this.firstNumber.sendKeys(input);
    }

    async inputSecondNumber(input) {
        await this.secondNumber.clear();
        await this.secondNumber.sendKeys(input);
    }

    async getFirstInputValue() {
        return this.firstNumber.getAttribute('value');
    }

    async getSecondInputValue() {
        return this.secondNumber.getAttribute('value');
    }

    async selectOperator(operator) {
        await this.operatorSelector.click();
        await this.operatorSelector.element(by.css(`[value=${operator}]`)).click();
    }

    async performOperation(operator, firstInput, secondInput) {
        await this.inputFirstNumber(firstInput);
        await this.inputSecondNumber(secondInput);
        await this.selectOperator(operator);
        await this.goButton.click();
    }

    async getLatestResult() {
        return this.latestResult.getText();
    }
}

module.exports = new CalculatorRefined();
