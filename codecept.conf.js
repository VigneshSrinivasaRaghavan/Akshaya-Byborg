exports.config = {
  output: './reports',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.oranum.com/',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: 60,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/features/*.feature',
    steps: './tests/step_definitions/*.js',
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Akshaya-Byborg'
}