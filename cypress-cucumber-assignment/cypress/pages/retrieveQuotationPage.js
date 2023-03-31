class RetrieveQuotationPage {
  elements = {
    title: () => cy.get('font'),
  };

  validateTitle() {
    this.elements.title().should('have.text', 'Retrieve Quotation');
  }
}

export const retrieveQuotationPage = new RetrieveQuotationPage();
