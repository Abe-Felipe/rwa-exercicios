import HomePage from '../../support/pages/HomePage'
import LoginPage from '../../support/pages/LoginPage'
import users from '../../fixtures/users.json'

const homePage = new HomePage
const loginPage = new LoginPage

describe('Teste de login invalido', () => {

    it('Credenciais invalidas', () => {
        loginPage.accessLoginPage()
        loginPage.submitLoginForm('usuario_inexistente', 'senha_incorreta')
        cy.get('.MuiAlert-message')
            .should('be.visible')
            .and('contain.text', 'Username or password is invalid')
        cy.url().should('include', '/signin')
    })
})
