import Garage from '../pages/garage'
import FuelExpenses from '../pages/fuelExpenses'

describe('template spec', () => {
  beforeEach(() => {
    cy.loginApp();
    cy.loginUser();
    cy.cleanGarage()
  })

    it('should add one car', () => {
      Garage
        .carForm('BMW', '3', 1)
        .checkAddedCar("BMW", '3')
    })

    it('should add several car', () => {
      Garage
        .carForm('Audi', 'TT', 1)
        .checkAddedCar("Audi", 'TT')
        .carForm('Ford', 'Focus', 1)
        .checkAddedCar("Ford", 'Focus')
    })

    it('should delete car', () => {
      Garage
        .carForm('Audi', 'TT', 1)
        .removeCar()
    })

    it('should add one expense', () => {
      Garage
        .carForm('Audi', 'TT', 1)

      FuelExpenses
        .getPage()
        .addExpenseBtn()
        .expenseForm('Audi TT', '29.01.2026', 5, 10, 20)
        .addBtn()
    })

        it('should delete one expense', () => {
      Garage
        .carForm('BMW', '3', 1)

      FuelExpenses
        .getPage()
        .addExpenseBtn()
        .expenseForm('BMW 3', '29.01.2026', 5, 10, 20)
        .addBtn()
        .deleteExpense()
    })

})