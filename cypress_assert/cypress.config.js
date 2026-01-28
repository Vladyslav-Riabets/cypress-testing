const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      config.env.BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
      config.env.BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS;
      return config;
    },
  },
});
