Cypress.Commands.add('typeLogin', (user) =>
 {
    cy.get('#wrapper > div > div > div > form > div:nth-child(1) > div')
    .type(user.email)
    cy.get('#wrapper > div > div > div > form > div:nth-child(2) > div > input[type=password]')
    .type(user.password)
})

