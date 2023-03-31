class HeaderPage {
  elements = {
    userEmail: () => cy.get('h4'),
    logoutButton: () => cy.contains('Log out'),
    brokerInsuranceTitle: () => cy.get('#tabs-1'),
  };

  validateEmail(email) {
    this.elements.userEmail().should('have.text', email);
  }

  validatePageHeader() {
    this.elements
      .brokerInsuranceTitle()
      .should('contain.text', 'Broker Insurance WebPage');
  }

  clickLogout() {
    this.elements.logoutButton().click();
  }
}
export const headerPage = new HeaderPage();
