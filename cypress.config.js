import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'https://www.automationexercise.com',
    chromeWebSecurity:false,
    watchForFileChanges:false,
    cacheAcrossSpecs:true,
    video:false,
    downloadsFolder:"cypress/fixtures/downloads",
    pageLoadTimeout:90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
