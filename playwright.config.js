// @ts-check
import { defineConfig, devices } from '@playwright/test';
// import { trace } from 'console';
// import { on } from 'events';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig ({  // defineConfig is configuration object
  testDir: './tests',  // used which test to run
  timeout: 30 * 1000, // by default it is 3o secs, but if you want to give it explicit.
  expect: {
    //timeout:5000, // timeout for assertion level.
  },
   reporter:[['list'],
            ['html'],    // used to report test case
            ['junit',{outputFile:'results.xml'}],
            ['json',{outputFile:'results.json'}],
            ['allure-playwright',{outputFolder:'my-allure-results'}]
], 
  
  use: {
  
     browserName: 'chromium'  // here webkit is Safari browser.
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
     // headless : false,  // instead of putting --headed in terminal we can put it here as well.
     // screenshot : 'on',
     // trace : 'retain-on-failure',  // this will only give if particular test fails. off, on , retain-on-failure.

  },


});
module.exports = config;


