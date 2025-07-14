class LoginPage {

    selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton:   ".SignInForm-submit",
        signUpClick:   "[href='/signup']",
    }

    accessLoginPage() {
        cy.visit('/signin')
    }
    /**
     * @param {string} username
     * @param {string} password
     */
    submitLoginForm(username, password) {
        cy.get(this.selectors.usernameField).type(username)
        cy.get(this.selectors.passwordField).type(password)
        cy.get(this.selectors.loginButton).click()
    }
}

export default LoginPage