module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai', 'riot'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
			'karma-chrome-launcher',
      'karma-riot',
			'karma-sinon-chai'
    ],
    files: [
      '*.tag',
      'test/**/*.js'
    ],
    preprocessors: {
      '**/*.tag': ['riot']
    },
    browsers: ['Chrome'],
    reporters: ['mocha'],

    client: {
      chai: {
        includeStack: true
      }
    }
  })
}
