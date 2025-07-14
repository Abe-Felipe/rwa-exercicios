import HomePage from '../../support/pages/HomePage'
import LoginPage from '../../support/pages/LoginPage'
import users from '../../fixtures/users.json'

const homePage = new HomePage
const loginPage = new LoginPage

describe('Teste de login invalido', () => {

    it('Credenciais invalidas', () => {
        loginPage.accessLoginPage()
        loginPage.submitLoginForm(users.loginInfo[0].username, users.loginInfo[1].password)
        cy.get('.MuiAlert-message').should('be.visible')
    })
})
