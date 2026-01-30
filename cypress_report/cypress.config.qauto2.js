const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto2.forstudy.space",
    setupNodeEvents(on, config) {
      config.env.BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
      config.env.BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS;
      return config;
    },
    env: {
      user: {
        email: "test2026282@testmail.com",
        password: "Test1234",
      },
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results/qauto2',
      overwrite: false,
      html: true,
      json: true,
    },
  }
});
