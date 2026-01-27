import Registration from '../support/pages/RegisterPage'
import Login from '../support/pages/LoginPage'
import { generateUniqueEmail } from '../support/utils'

describe('Registration form tests', () => {

  beforeEach(() => {
    cy.loginApp()
    cy.registration()
    cy.fixture('test_data').as('data')
  })

  context('registration form UI test', () => {
    it('should check form title', () => {
      cy.get(".modal-title")
        .should('have.text', 'Registration')
    })

    it('should check all input fields are present', () => {
      cy.get('.form-group')
        .should('have.length', 5)
    })

    it('should check Name is visible', () => {
      cy.get('.form-group label')
        .should('contain', 'Name')
    })

    it('should check Last name is visible', () => {
      cy.get('.form-group label')
        .should('contain', 'Last name')
    })

    it('should check Email is visible', () => {
      cy.get('.form-group label')
        .should('contain', 'Email')
    })

    it('should check Password is visible', () => {
      cy.get('.form-group label')
        .should('contain', 'Password')
    })

    it('should check Re-enter password is visible', () => {
      cy.get('.form-group label')
        .should('contain', 'Re-enter password')
    })

    it('should check close button is visible', () => {
      cy.get('button.close span')
        .should('be.visible')
        .and('contain', '×')
    })

    it('should close registration form', () => {
      cy.get('button.close')
        .click()

      cy.get('.modal-content')
        .should('not.be.visible')
    })

  })

  context('the Name field tests', () => {

    it('should check field accepts valid name', function () {
      const user = this.data.validUser

      Registration
        .enterData('name', user.name)
        .triggerError()
        .errorAbsent('name')
    })

    it('should check field accepts min value name', function () {
      const user = this.data.nameCases.minValue

      Registration
        .enterData('name', user.value)
        .triggerError()
        .errorAbsent('name')
    })
    
    it('should check field accepts max value name', function () {
      const user = this.data.nameCases.maxValue

      Registration
        .enterData('name', user.value)
        .triggerError()
        .errorAbsent('name')
    })   

    it('should check error for empty name filed', function () {
      
      const user = this.data.nameCases.empty
      
      Registration
        .click('input[name="name"]')
        .triggerError()
        .errorBorder('name')
        .errorMessage(user.error)
    })

    it('should check error for short name', function () {
      const user = this.data.nameCases.oneChar

      Registration
        .enterData('name', user.value)
        .triggerError()
        .errorBorder('name')
        .errorMessage(user.error)
    })

    it('should check error for too long name', function () {
      const user = this.data.nameCases.tooLong

      Registration
        .enterData('name', user.value)
        .triggerError()
        .errorBorder('name')
        .errorMessage(user.error)
    })

    it('should check error for name with special symbol', function () {
      const user = this.data.nameCases.specSymbols

      Registration
        .enterData('name', user.value)
        .triggerError()
        .errorBorder('name')
        .errorMessage(user.error)
    })

    it('should check error for name with cyrillic symbols', function () {
      const user = this.data.nameCases.cyrillicSymbols

      Registration
        .enterData('name', user.value)
        .triggerError()
        .errorBorder('name')
        .errorMessage(user.error)
    })
  })

  context('the Last name field tests', () => {

    it('should check field accepts valid Last name', function () {
      const user = this.data.validUser

      Registration
        .enterData('lastName', user.lastName)
        .triggerError()
        .errorAbsent('lastName')
    })

    it('should check field accepts min value Last name', function () {
      const user = this.data.lastNameCases.minValue

      Registration
        .enterData('lastName', user.value)
        .triggerError()
        .errorAbsent('lastName')
    })
    
    it('should check field accepts max value Last name', function () {
      const user = this.data.lastNameCases.maxValue

      Registration
        .enterData('lastName', user.value)
        .triggerError()
        .errorAbsent('lastName')
    })   

    it('should check error for empty Last name filed', function () {
      
      const user = this.data.lastNameCases.empty
      
      Registration
        .click('input[name="lastName"]')
        .triggerError()
        .errorBorder('lastName')
        .errorMessage(user.error)
    })

    it('should check error for short Last name', function () {
      const user = this.data.lastNameCases.oneChar

      Registration
        .enterData('lastName', user.value)
        .triggerError()
        .errorBorder('lastName')
        .errorMessage(user.error)
    })

    it('should check error for too long Last name', function () {
      const user = this.data.lastNameCases.tooLong

      Registration
        .enterData('lastName', user.value)
        .triggerError()
        .errorBorder('lastName')
        .errorMessage(user.error)
    })

    it('should check error for Last name with special symbol', function () {
      const user = this.data.lastNameCases.specSymbols

      Registration
        .enterData('lastName', user.value)
        .triggerError()
        .errorBorder('lastName')
        .errorMessage(user.error)
    })

    it('should check error for Last name with cyrillic symbols', function () {
      const user = this.data.lastNameCases.cyrillicSymbols

      Registration
        .enterData('lastName', user.value)
        .triggerError()
        .errorBorder('lastName')
        .errorMessage(user.error)
    })
  })

  context('the Email field tests', () => {
    it('should check field accepts valid Email', function () {
      const user = this.data.validUser

      Registration
        .enterEmail(user.email)
        .triggerError()
        .errorAbsent('email')
    })

    it('should check error for empty Email field', function () {
      const user = this.data.emailCases.empty

      Registration
        .click('input[name="email"]')
        .triggerError()
        .errorBorder('email')
        .errorMessage(user.error)
    })

    it('should check error for no @ in Email', function () {
      const user = this.data.emailCases.noAt

      Registration
        .enterEmail(user.value)
        .triggerError()
        .errorBorder('email')
        .errorMessage(user.error)
    })

    it('should check error for no domain in Email', function () {
      const user = this.data.emailCases.noDomain

      Registration
        .enterEmail(user.value)
        .triggerError()
        .errorBorder('email')
        .errorMessage(user.error)
    })

    it('should check error for spaces in Email', function () {
      const user = this.data.emailCases.spaces

      Registration
        .enterEmail(user.value)
        .triggerError()
        .errorBorder('email')
        .errorMessage(user.error)
    })
  })

  context('the Password field tests', () => {
    it('should check field accepts valid Password', function () {
      const user = this.data.validUser

      Registration
        .enterData('password', user.password, { sensitive: true })
        .triggerError()
        .errorAbsent('password')
    })

    it('should check field accepts min Password value', function () {
      const user = this.data.passCases.minValue

      Registration
        .enterData('password', user.value, { sensitive: true })
        .triggerError()
        .errorAbsent('password')     
    })

    it('should check field accepts max Password value', function () {
      const user = this.data.passCases.maxValue

      Registration
        .enterData('password', user.value, { sensitive: true })
        .triggerError()
        .errorAbsent('password')     
    })

    it('should check error for empty Password field', function () {
      const user = this.data.passCases.empty

      Registration
        .click('input[name="password"]')
        .triggerError()
        .errorBorder('password')
        .errorMessage(user.error)
    })

    it('should check error for short Password', function () {
      const user = this.data.passCases.tooShort

      Registration
        .enterData('password', user.value, { sensitive: true })
        .triggerError()
        .errorBorder('password')
        .errorMessage(user.error)
    })
    
    it('should check error for long Password', function () {
      const user = this.data.passCases.tooLong

      Registration
        .enterData('password', user.value, { sensitive: true })
        .triggerError()
        .errorBorder('password')
        .errorMessage(user.error)
    })

    it('should check error for Password with no digit', function () {
      const user = this.data.passCases.noDigit

      Registration
        .enterData('password', user.value, { sensitive: true })
        .triggerError()
        .errorBorder('password')
        .errorMessage(user.error)
    })

    it('should check error for Password with no uppercase', function () {
      const user = this.data.passCases.noUppercase

      Registration
        .enterData('password', user.value, { sensitive: true })
        .triggerError()
        .errorBorder('password')
        .errorMessage(user.error)
    })

    it('should check error for Password with no lowercase', function () {
      const user = this.data.passCases.noUppercase

      Registration
        .enterData('password', user.value, { sensitive: true })
        .triggerError()
        .errorBorder('password')
        .errorMessage(user.error)
    })

  })

  context('the Re-enter password field tests', () => {
    it('should check the match with valid password', function () {
      const user = this.data.validUser

      Registration
        .enterData('password', user.password, {sensitive: true})
        .enterData('repeatPassword', user.rePassword, {sensitive: true})
        .triggerError()
        .errorAbsent('repeatPassword')
    })

    it('should check error for empty Re-enter password field', function () {
      const user = this.data.rePassCases.empty

      Registration
        .click('input[name="repeatPassword"]')
        .triggerError()
        .errorBorder('repeatPassword')
        .errorMessage(user.error)
    })

    it('should check error for Re-enter password mismatch', function () {
      const validUser = this.data.validUser
      const invalidUser = this.data.rePassCases.mismatch
      
      Registration
        .enterData('password', validUser.password, {sensitive: true})
        .enterData('repeatPassword', invalidUser.value, {sensitive: true})
        .triggerError()
        .errorBorder('repeatPassword')
        .errorMessage(invalidUser.error)
    })
  })

  context('the Register button tests', () => {
    it('should check button is enabled with valid data', function () {
      const user = this.data.validUser

      Registration
        .enterData('name', user.name)
        .enterData('lastName', user.lastName)
        .enterData('email', user.email)
        .enterData('password', user.password, {sensitive: true})
        .enterData('repeatPassword', user.rePassword, {sensitive: true})
        .buttonEnabled('.modal-footer button.btn.btn-primary', 'Register')
    })

    it('should check button is disabled with invalid data', function () {
      const user = this.data.invalidUser

      Registration
        .enterData('name', user.name)
        .enterData('lastName', user.lastName)
        .enterData('email', user.email)
        .enterData('password', user.password, {sensitive: true})
        .enterData('repeatPassword', user.rePassword, {sensitive: true})
        .buttonDisabled('.modal-footer button.btn.btn-primary', 'Register')
    })

  })

  context('check registartion with valid data', () => {
    it('should open profile page after successfull registration', function () {
      const user = this.data.validUser

      Registration
        .enterData('name', user.name)
        .enterData('lastName', user.lastName)
        .enterEmail(generateUniqueEmail())
        .enterData('password', user.password)
        .enterData('repeatPassword', user.rePassword)
        .click('.modal-footer button.btn.btn-primary')
        
      cy.checkLogin()
    })

    it('should login user with valid credentials', function () {
      const user = this.data.validUser
      this.generatedEmail = generateUniqueEmail()

      Registration
        .enterData('name', user.name)
        .enterData('lastName', user.lastName)
        .enterData('email', this.generatedEmail)
        .enterData('password', user.password)
        .enterData('repeatPassword', user.rePassword)
        .click('.modal-footer button.btn.btn-primary')
      
      cy.logout()

      cy.getLogin()

      Login
        .enterData('email', this.generatedEmail)
        .enterData('password', user.password)
        .login()
      
      cy.checkLogin()      
    })
  })
})