import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'https://www.automationexercise.com',
    chromeWebSecurity:false,
    watchForFileChanges:false,
    video:false,
    pageLoadTimeout:90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
