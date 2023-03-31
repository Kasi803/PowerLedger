class LoginPage {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.contains('Log in'),
    errorMessage: () => cy.get('span b'),
  };

  typeEmail(email) {
    if (email === '') this.elements.emailInput().type(email);
  }

  typePassword(password) {
    if (password === '') this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username, password) {
    if (username !== '') this.elements.emailInput().type(username);
    if (password !== '') this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  validateErrorMessage() {
    this.elements
      .errorMessage()
      .should('have.text', 'Enter your Email address and password correct');
  }
}

export const loginPage = new LoginPage();
