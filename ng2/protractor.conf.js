require('ts-node').register({ project: '' });

var SpecReporter = require('jasmine-spec-reporter');

var Application = require('./e2e/application').Application;
var application = new Application(4000);
exports.config = {
    useAllAngular2AppRoots: true,
    directConnect: true,
    baseUrl: 'http://localhost:' + application.port,
    framework: 'jasmine',
    specs: [
        'e2e/**/*.e2e.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    beforeLaunch: function() {
        application.start();
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter());
    },
    afterLaunch: function() {
        application.stop();
    }
}