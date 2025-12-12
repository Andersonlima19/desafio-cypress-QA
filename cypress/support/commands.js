Cypress.Commands.add('login', (username, password) => {
cy.visit('http://lojaebac.ebaconline.art.br/')

cy.visit('http://lojaebac.ebaconline.art.br/')

cy.get('span.dropdown-toggle').click() 
cy.contains('#topmenu a', 'Minha conta').click() 
cy.get('#username').clear().type(username)
cy.get('#password').clear().type(password, { log: false })
cy.get('input[name="login"]').click()

})


Cypress.Commands.add('addProductToCartByName', (productName) => {
cy.get('ul.products').contains(productName).click()
cy.get('button.single_add_to_cart_button').click()
})