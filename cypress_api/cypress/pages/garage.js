class Garage{
    getPage() {
        cy.get('a.btn.header-link[href="/panel/garage"]')
            .should('have.text', 'Garage')
            .click()
        
        return this
    }

    addCarBtn () {
        cy.get('.btn.btn-primary')
            .should('have.text', 'Add car')
            .click()

        return this
    }

    enterData(brand,  model, mileage) {
        cy.get('select[name="carBrandId"]')
            .select(brand)

        cy.get('select[name="carModelId"]')
            .select(model)

        .get('input[name="mileage"]')
            .type(mileage)

        return this
    }

    addBtn() {
        cy.get('.modal-content .btn.btn-primary')
            .should('have.text', 'Add')
            .click()

        return this
    }

    checkAddedCar(brand, model) {
        cy.get('ul.car-list li.car-item')
            .first()
            .should('contain', brand)
            .and('contain', model)

        return this
    }

    removeCar() {
        cy.get('ul.car-list li.car-item')
            .first()
            .within(() => {
                cy.get('.icon.icon-edit')
                    .click()
            })

            cy.get('.btn-outline-danger')
                .should('contain', 'Remove car')
                .click();
                
            cy.get('.modal-content button.btn.btn-danger')
                .should('contain', 'Remove')
                .click();

        return this
    }

    carForm(brand, model, mileage) {
        this.addCarBtn()
        this.enterData(brand, model, mileage)
        this.addBtn()

        return this
    }
}

export default new Garage()