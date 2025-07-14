import HomePage from '../../support/pages/HomePage'
import LoginPage from '../../support/pages/LoginPage'
import users from '../../fixtures/users.json'

const homePage = new HomePage
const loginPage = new LoginPage

describe('Teste de login valido', () => {

    it('Credenciais validas', () => {
        loginPage.accessLoginPage()
        loginPage.submitLoginForm(users.loginInfo[0].username, users.loginInfo[0].password)
        cy.get('.NavBar-logo')
            .should('be.visible')
    })
})
