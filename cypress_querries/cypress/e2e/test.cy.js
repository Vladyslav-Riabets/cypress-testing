describe('Find all buttons and links', () => {
  
  beforeEach(() => {
    cy.login();
  });



  context('tests for header', () => {
    it('should find 3 buttons in left header', () => {
      cy.get(".btn.header-link")
        .should("have.length", 3)
    });
  
    it('should find 2 buttons in right header', () => {
      cy.get('.header_right.d-flex.align-items-center button')
        .should('have.length', 2)
    })

    it('should find "Sign In" button ', () => {
      cy.get('.hero-descriptor button')
        .should('exist')
        .should('contain', 'Sign up')
    })
  })

  context('test for footer', () => {
    it('should find 5 links for social media', () => {
      cy.get('.contacts_socials.socials span')
        .should('have.length', 5)
    })

    it('should find 2 links for school and mail', () => {
      cy.get('a.contacts_link')
        .should('have.length', 2)
        .should('contain', 'ithillel.ua')
        .should('contain', 'support@ithillel.ua')
    })

  })


  

});
