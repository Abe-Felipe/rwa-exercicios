import HomePage from '../support/pages/HomePage'
import LoginPage from '../support/pages/LoginPage'
import RegisterPage from '../support/pages/RegisterPage'

describe('Login e Registro de Usuário', () => {
  let testData

  before(() => {
    cy.fixture('users').then((data) => {
      testData = data
    })
  })


})