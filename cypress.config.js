const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5mp2xc',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
