const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    defaultCommandTimeout: 6000,
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
