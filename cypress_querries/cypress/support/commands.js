Cypress.Commands.add("login", () => {
  cy.visit("/", {
    auth: {
      username: Cypress.env("BASIC_AUTH_USER"),
      password: Cypress.env("BASIC_AUTH_PASS"),
    },
  });
});
