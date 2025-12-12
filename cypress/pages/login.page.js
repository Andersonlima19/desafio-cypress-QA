export const LoginPage = {
visit() {
cy.visit('http://lojaebac.ebaconline.art.br')
},
fillUsername(name) { cy.get('#username').clear().type(name) },
fillPassword(pass) { cy.get('#password').clear().type(pass, { log: false }) },
submit() { cy.get('.woocommerce-form .button').click() }
}