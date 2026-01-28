// Add command to login the Qauto app
Cypress.Commands.add("loginApp", () => {
  cy.visit("/", {
    auth: {
      username: Cypress.env("BASIC_AUTH_USER"),
      password: Cypress.env("BASIC_AUTH_PASS"),
    },
  });
});

// Command to open registration form
Cypress.Commands.add('registration', () => {
    cy.contains('Sign up')
        .click()
})




// Command to hide password
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})

// Command to login registered account
Cypress.Commands.add('getLogin', () => {
  cy.get('button.btn.btn-outline-white.header_signin')
    .should('have.text', 'Sign In')
    .click()
})

// Command to check user logged in
Cypress.Commands.add('checkLogin', () => {

  cy.get('.panel-page h1')
    .should('have.text', 'Garage')
})

// Command to logout user
Cypress.Commands.add('logout', () => {

  cy.get('button.dropdown-toggle')
    .should('have.text', ' My profile ')
    .click()

  cy.get('button.dropdown-item.btn.btn-link.user-nav_link')
    .should('have.text', 'Logout')
    .click()
})