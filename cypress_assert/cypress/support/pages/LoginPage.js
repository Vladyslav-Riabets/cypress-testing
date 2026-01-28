class Login {
    enterData(fieldName, fieldValue, options = {}) {
        cy.get(`input[name="${fieldName}"]`)
            .type(fieldValue, options)
        return this
    }

    login() {
        cy.get('.modal-content button.btn.btn-primary')
            .should('have.text', 'Login')
            .click()
    }
}

export default new Login()