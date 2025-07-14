class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField:  "[name='username']",
            passwordField:  "[name='password']",
            loginButton:    ".SignInForm-submit",
            signUpClick:    "[href='/signup']",
        }
        return selectors
}

    accessLoginPage() {
        cy.visit('/signin')
}

    loginValidCredentials() {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
}

    loginInvalidCredentials() {

}



}
export default LoginPage