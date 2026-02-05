import Garage from '../pages/garage'
import FuelExpenses from '../pages/fuelExpenses'



describe('API tests', () => {
  
  beforeEach(() => {
    cy.loginApp();
    cy.loginUser();
    cy.loginApi();
    cy.fixture('test_data').as('data');
  })

  after(() => {
    cy.cleanGarage();
  })
  
  let carId;

  it('TASK 1: Create car, validate status code and get ID', () => {
    
    cy.intercept('POST', '**/api/cars').as('createCar')

    Garage
      .carForm('Fiat', 'Ducato', 1)

    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      carId = interception.response.body.data.id
    })

    cy.then(() => {
      cy.log(`Created car id: ${carId}`);
    });    
  })

  it('TASK 2: Get list of cars and validate created car via UI and ID', () => {
    
    Garage
      .carForm('Audi', 'TT', 1)
      .carForm('Ford', 'Fiesta', 1)
    
    // cy.loginApi()
    cy.request('GET', '/api/cars').then((response) => {
      expect(response.status).to.eq(200);

      let createdCar = response.body.data.find((car) => car.id === carId)

      // expect(createdCar).to.exist;
      expect(createdCar.brand).to.eq('Fiat');
      expect(createdCar.model).to.eq('Ducato');  
    })
  })

  it('TASK 3: create expense for car ID via custom command', function () {
    
    const data = this.data.enter;
    
    cy.apiAddExpense(carId, data.mileage, data.liters, data.totalCost).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.keys('id', 'carId', 'reportedAt', 'mileage', 'liters', 'totalCost')
    })
  })

  it('TASK 4: validate created expense for car ID via UI', function() {
    const data = this.data.validation;

    FuelExpenses
      .getPage()
      .checkExpense(data.mileage, data.liters, data.totalCost)

    Garage
      .getPage()

  })
})