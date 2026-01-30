class FuelExpenses {
    getPage() {
        cy.get('a.btn.header-link[href="/panel/expenses"]')
            .should('have.text', 'Fuel expenses')
            .click()
        
        return this
    }

    addExpenseBtn() {
        cy.get('.btn.btn-primary')
            .should('have.text', 'Add an expense')
            .click()

        return this        
    }

    selectVehicle(vehicle) {
        cy.get('select[name="carId"]')
            .select(vehicle)
        
        return this
    }

    enterDate(date) {
        cy.get('input[name="reportedAt"]')
            .clear()
            .type(date)

        return this
    }

    enterMileage(mileage) {
        cy.get('input[name="mileage"]')
            .clear()
            .type(mileage)
            
        return this
    }

    enterLiters(liters) {
        cy.get('input[name="liters"]')
            .type(liters)
            
        return this
    }

    enterCosts(cost) {
        cy.get('input[name="totalCost"]')
            .type(cost)

        return this
    }

    addBtn() {
        cy.get('.modal-content button.btn.btn-primary')
            .should('have.text', 'Add')
            .click({force: true})

        return this
    }

    deleteExpense() {
        cy.get('.table.expenses_table tbody tr')
            .first()
            .trigger('mouseenter')
            .within(() => {
                cy.get('button.btn.btn-delete')
                    .click({force: true})
            })
        cy.get('.modal-content button.btn.btn-danger')
            .should('have.text', 'Remove')
            .click()
            
        return this
    }

    expenseForm(vehicle, date, mileage, liters, cost) {
        this.selectVehicle(vehicle)
        // this.enterDate(date)
        this.enterMileage(mileage)
        this.enterLiters(liters)
        this.enterCosts(cost)

        return this
    }
}

export default new FuelExpenses()