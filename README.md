protractor-automation-demo
=======

This repo contains the actual and refined code for doing automation of a 
[demo calculator page](http://juliemr.github.io/protractor-demo/), 
using protractor as described in 
[protractor tutorial](https://www.protractortest.org/#/tutorial).

## Suites

#### 1. js

- Command to run: `protractor conf.js --suite js`
- Folder: `javascript`
- `javascript/spec.js` has the spec code as described in 
[protractor tutorial](https://www.protractortest.org/#/tutorial).

#### 2. jsWithPO

The same test with a refactored code i.e. with addition of page object.

- Command to run: `protractor conf.js --suite jsWithPO`
- Folder: `javascriptWithPO`
- `javascriptWithPO/calculator.po.js`: page object for the spec.
- `javascriptWithPO/spec.js`: refactored spec code.

#### 3. jsWithPORefined

Updated test spec with the addition of other calculator operations. 
Used *async / await*, refined and cleaned the code.   

- Command to run: `protractor conf.js --suite jsWithPORefined`
- Folder: `javascriptWithPORefined`
- `javascriptWithPORefined/calculator.po.js`: page object for the spec.
- `javascriptWithPORefined/spec.js`: updated and refined spec code.
