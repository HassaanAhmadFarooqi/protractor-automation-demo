class Calculator {
    constructor() {
        this.firstNumber = element(by.model('first'));
        this.secondNumber = element(by.model('second'));
        this.goButton = element(by.id('gobutton'));
        this.latestResult = element(by.binding('latest'));
        this.history = element.all(by.repeater('result in memory'));
    }

    inputFirstNumber(input) {
        this.firstNumber.sendKeys(input);
    }

    inputSecondNumber(input) {
        this.secondNumber.sendKeys(input);
    }

    getFirstInputValue() {
        return this.firstNumber.getAttribute('value');
    }

    add(firstInput, secondInput) {
        this.inputFirstNumber(firstInput);
        this.inputSecondNumber(secondInput);
        this.goButton.click();
    }

    getLatestResult() {
        return this.latestResult.getText();
    }
}

module.exports = new Calculator();
