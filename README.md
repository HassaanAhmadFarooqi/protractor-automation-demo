protractor-automation-demo
=======

This repo covers protractor automation of a 
[demo calculator page](http://juliemr.github.io/protractor-demo/), 
as described in 
[protractor tutorial](https://www.protractortest.org/#/tutorial),
using JavaScript.

Check 
[this repo](https://github.com/HassaanAhmadFarooqi/protractor-automation-demo-typescript) 
for the TypeScript version of the same.

## How to Run

- Install the dependencies:
    ```
    npm install
    ```
- Run the test  
    Basic:
    ```
    npm run test:basic
    ```
    or Refined:
    ```
    npm run test:refined
    ```
    (Check 
    [package.json](package.json) 
    for more details about these run configurations).

*Note:* If you're using 
[VSCode](https://code.visualstudio.com/), 
then you can run the program using VScode's Run Button also.  
(Configurations for running using Run button are present in 
[.vscode/launch.json](.vscode/launch.json))

## Suites 

### 1. basic

It contains the basic spec code as described in 
[protractor tutorial](https://www.protractortest.org/#/tutorial).

### 2. refined

It uses the same example, but the code has refined form. i.e. 
- [calculator.po.js](refined/calculator.po.js) 
page object has been used for calculator page interactions.
- The test spec has been updated, and it covers other missing test cases.
- *async* and *await* have been used.
