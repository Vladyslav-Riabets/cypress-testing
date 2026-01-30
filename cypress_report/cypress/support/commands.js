Cypress.Commands.add('loginApp', () => {
    cy.visit('/', {
        auth: {
            username: Cypress.env('BASIC_AUTH_USER'),
            password: Cypress.env('BASIC_AUTH_PASS')
        }
    })
})

Cypress.Commands.add('loginUser', () => {

    const user = Cypress.env('user')

    cy.get('button.btn.btn-outline-white.header_signin')
        .should('have.text', 'Sign In')
        .click()

    cy.get('input[name="email"]')
        .type(user.email)

    cy.get('input[name="password"]')
        .type(user.password)

    cy.get('.modal-content button.btn.btn-primary')
        .should('have.text', 'Login')
        .click()
})

Cypress.Commands.add('cleanGarage', () => {

  cy.url().should('include', '/panel/garage');

  const removeOneCar = () => {
    cy.get('body').then($body => {

      const cars = $body.find('ul.car-list li.car-item');

      if (!cars.length) {
        cy.log('Garage is clean');
        return;
      }

      cy.wrap(cars[0]).within(() => {
        cy.get('.icon.icon-edit').click({ force: true });
      });

      cy.contains('button', 'Remove car')
        .should('be.visible')
        .click();

      cy.contains('.modal-content button', 'Remove')
        .should('be.visible')
        .click();

      cy.wait(300);
      removeOneCar();
    });
  };

  removeOneCar();
});
