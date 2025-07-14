import HomePage from '../../support/pages/HomePage'
import LoginPage from '../../support/pages/LoginPage'
import RegisterPage from '../../support/pages/RegisterPage'
import users from '../../fixtures/users.json'

const homePage = new HomePage
const loginPage = new LoginPage
const registerPage = new RegisterPage

describe('Teste de login valido', () => {

    it('Credenciais validas', () => {
        loginPage.accessLoginPage()
        loginPage.submitLoginForm(users.validUser[0].username, users.validUser[0].password)
        cy.get('.NavBar-logo').should('be.visible')
    })
})
