exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        js: 'javascript/spec.js',
        jsWithPO: 'javascriptWithPO/spec.js',
        jsWithPORefined: 'javascriptWithPORefined/spec.js',
    },
}
