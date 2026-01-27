import { generateUniqueEmail } from "../utils"

class Registration {

    getElement(selector) {
        cy.get(selector)
        return this
    }

    click(selector) {
        cy.get(selector).click()
        return this
    }

    type(selector, text) {
        cy.get(selector).type(text)
        return this
    }

    triggerError() {
        cy.get('.modal-content')
            .click(0, 0)
        return this
    }

    enterData(fieldName, fieldValue, options = {}) {
        cy.get(`input[name="${fieldName}"]`)
            .type(fieldValue, options)
        return this
    }

    enterEmail(email = null) {
        const typeValue = email || generateUniqueEmail()

        cy.get('input[name="email"]')
            .type(typeValue)
        return this
    }

    errorBorder(fieldName) {
        cy.get(`input[name="${fieldName}"]`)
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')
        return this
    }

    errorMessage(message) {
        cy.get('.invalid-feedback')
            .should('have.text', message)
            .and('have.css', 'color', 'rgb(220, 53, 69)')
        return this
    }

    errorAbsent(fieldName) {
        cy.get(`input[name="${fieldName}"]`)
            .should('have.css', 'border-color', 'rgb(206, 212, 218)')
            .closest('.invalid-feedback')
            .should('not.exist')
        return this
    }

    buttonDisabled(selector, buttonName) {
        cy.get(selector)
            .should('have.text', buttonName)
            .and('be.disabled')
        return this
    }

    buttonEnabled(selector, buttonName) {
        cy.get(selector)
            .should('have.text', buttonName)
            .and('be.enabled')
        return this
    }    
}

export default new Registration()