import user from '../fixtures/user.json'


describe('02 - Adicionar produto ao carrinho', () => {
before(() => {

cy.login(user.validUser.username, user.validUser.password)

})

it('Deve adicionar um produto ao carrinho e validar o contador', () => {

cy.contains('#primary-menu a', 'Comprar').click()
cy.get('a[title="Aero Daily Fitness Tee"] img.image-hover.unveil-image').click()
cy.get("li[title='XL']").click()
cy.get("li[title='Yellow']").click()
cy.contains('button', 'Comprar').click()
cy.contains('a', 'Ver carrinho').click()
cy.contains('h2', 'Total no carrinho').should('be.visible')

})

})