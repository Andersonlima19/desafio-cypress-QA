export const CartPage = {
open() { cy.visit('/cart/') },
proceedToCheckout() { cy.get('.checkout-button').click() }
}