class RegisterPage {

    selectorsList() {
        const selectors = {
            signUpClick:    "[href='/signup']",
        }
        return selectors
    }

        accessRegisterPage() {
            cy.visit('/signin')
            cy.get(this.SelectorsList().signUpClick).click()
        }

}
export default RegisterPage