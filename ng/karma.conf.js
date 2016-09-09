module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/vendor.ts',
            'src/test-setup.ts',
            'src/**/spec.ts'
        ],
        exclude: [
        ],
        preprocessors: {
            'src/vendor.ts': ['webpack'],
            'src/test-setup.ts': ['webpack'],
            'src/**/spec.ts': ['webpack']
        },
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        webpack: require('./webpack.test')
    })
};

