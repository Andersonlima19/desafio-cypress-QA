const { defineConfig } = require('cypress')


module.exports = defineConfig({
e2e: {
baseUrl: 'https://lojaebac.ebaconline.art.br',
supportFile: 'cypress/support/e2e.js',
specPattern: 'cypress/e2e/**/*.cy.js',
setupNodeEvents(on, config) {
// implement node event listeners here if necessário
return config
}
}
})