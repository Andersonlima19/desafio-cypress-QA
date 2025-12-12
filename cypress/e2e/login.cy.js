import user from '../fixtures/user.json'


describe('01 - Login', () => {
it('Deve fazer login com sucesso', () => {
cy.login(user.validUser.username, user.validUser.password)


cy.get('.woocommerce-MyAccount-content').should('exist')
cy.url().should('include', '/my-account')
})
})