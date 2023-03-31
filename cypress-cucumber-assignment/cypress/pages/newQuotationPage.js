class NewQuotationPage {
  elements = {
    idNumber: () => cy.get('body'),
    requestQuotationLink: () => cy.get('#ui-id-2'),
    retrieveQuotationLink: () => cy.get('#ui-id-3'),
    breakDownCover: () => cy.get('#quotation_breakdowncover'),
    windScreenRepair: () => cy.get('#quotation_windscreenrepair_t'),
    incidents: () => cy.get('#quotation_incidents'),
    registration: () => cy.get('#quotation_vehicle_attributes_registration'),
    annualMileage: () => cy.get('#quotation_vehicle_attributes_mileage'),
    estimatedValue: () => cy.get('#quotation_vehicle_attributes_value'),
    parkingLocation: () =>
      cy.get('#quotation_vehicle_attributes_parkinglocation'),
    stateOfPolicyYear: () =>
      cy.get('#quotation_vehicle_attributes_policystart_1i'),
    stateOfPolicyMonth: () =>
      cy.get('#quotation_vehicle_attributes_policystart_2i'),
    stateOfPolicyDay: () =>
      cy.get('#quotation_vehicle_attributes_policystart_3i'),
    save: () => cy.get('#new_quotation > .actions > .btn-success'),
    indetificationNumberField: () => cy.get('input[name=id]'),
    retrieveButton: () => cy.get('#getquote'),
  };

  clickRequestQuotation() {
    this.elements.requestQuotationLink().click();
  }

  clickRetrieveQuotation() {
    this.elements.retrieveQuotationLink().click();
  }

  selectBreakDownCover(cover) {
    this.elements.breakDownCover().select(cover);
  }

  selectWindScreenRepairTrue() {
    this.elements.windScreenRepair().check({ force: true });
  }

  enterIncidents(count) {
    this.elements.incidents().type(count);
  }

  enterRegistration(reg) {
    this.elements.registration().type(reg);
  }

  enterAnnMileage(val) {
    this.elements.annualMileage().type(val);
  }

  enterEstimatedValue(val) {
    this.elements.estimatedValue().type(val);
  }

  selectParkingLocation(loc) {
    this.elements.parkingLocation().select(loc);
  }

  selectDate(date) {
    this.selectDay(date.split(' ')[0]);
    this.selectMonth(date.split(' ')[1]);
    this.selectYear(date.split(' ')[2]);
  }

  selectYear(val) {
    this.elements.stateOfPolicyYear().select(val);
  }

  selectMonth(val) {
    this.elements.stateOfPolicyMonth().select(val);
  }

  selectDay(val) {
    this.elements.stateOfPolicyDay().select(val);
  }
  saveQuotation() {
    this.elements.save().click();
  }

  enterItentificationNumber(id) {
    this.elements.indetificationNumberField().type(id);
  }

  clickGetQuoteButton() {
    this.elements.retrieveButton().click();
  }

  getIdNumber() {
    this.elements.idNumber().then(function ($ele) {
      const text = $ele.text();
      cy.log(text);
      const arr = text.split(' ');
      const id = arr[10].split('P');
      cy.log(id[0]);
      cy.fixture('quotation').then((data) => {
        cy.log(data.id);
        data.id = id[0];
        cy.writeFile('cypress/fixtures/quotation.json', {
          quotation_id: id[0],
        });
      });
    });
  }
}

export const newQuotationPage = new NewQuotationPage();
