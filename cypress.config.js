import { defineConfig } from "cypress";
import fs from 'fs'
import dotenv from 'dotenv';
const environment = process.env.ENV || 'qa';
dotenv.config({path:`.env.${environment}`})

export default defineConfig({
  e2e: {
    baseUrl:'https://www.automationexercise.com',
    chromeWebSecurity:false,
    watchForFileChanges:false,
    cacheAcrossSpecs:true,
    video:true,
    downloadsFolder:"cypress/fixtures/downloads",
    pageLoadTimeout:90000,
    // retries:2,
    grepFilterSpecs: true,
    env:{
      userLogin:"fromEnvFile",
      userName:process.env.username
    },
    setupNodeEvents(on, config) {
      on('task', {
        addLogs(message) {
          fs.writeFile('cypress/logs/reporter.txt', message, { flag: 'a+' }, err => {});
          return null; // Must return something, null is fine for no output
        },
      });
    },
  },
});
