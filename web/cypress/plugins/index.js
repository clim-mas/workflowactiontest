/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

module.exports = async (on, config) => {
    await require('cypress-testrail-simple/src/plugin')(on, config);
}
