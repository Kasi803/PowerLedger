class ProfilePage {
  elements = {
    editProfileTitle: () => cy.get('h1'),
    profileLink: () => cy.get('#ui-id-4'),
    editProfileLink: () => cy.get('#ui-id-5'),
    showTitle: () => cy.get('#showtitle'),
    selectTitle: () => cy.get('#user_title'),
    surname: () => cy.get('#user_surname'),
    firstName: () => cy.get('#user_firstname'),
    phone: () => cy.get('#user_phone'),
    dateOfBirthYear: () => cy.get('#user_dateofbirth_1i'),
    dateOfBirthMonth: () => cy.get('#user_dateofbirth_2i'),
    dateOfBirthDay: () => cy.get('#user_dateofbirth_3i'),
    fullLicenseType: () => cy.get('#user_licencetype_t'),
    proLicenseType: () => cy.get('#user_licencetype_f'),
    licensePeriod: () => cy.get('#user_licenceperiod'),
    occupation: () => cy.get('#user_occupation_id'),
    addresstStreet: () => cy.get('#user_address_attributes_street'),
    addresstCity: () => cy.get('#user_address_attributes_city'),
    addresstCountry: () => cy.get('#user_address_attributes_county'),
    addresstPostCode: () => cy.get('#user_address_attributes_postcode'),
    update: () => cy.get('#edit_user_  .btn-success'),
  };

  clickEditProfileLink() {
    this.elements.editProfileLink().click();
  }

  clickProfileLink() {
    this.elements.profileLink().click();
  }

  validateEditProfileTitle() {
    this.elements
      .editProfileTitle()
      .should('have.text', 'Editing user profile');
  }

  validatProfilePage() {
    this.elements.showTitle().should('not.have.text', ' ');
  }

  selectTitle(val) {
    this.elements.selectTitle().select(val);
  }

  enterSurname(val) {
    this.elements.surname().type(val);
  }

  enterFirstName(val) {
    this.elements.firstName().type(val);
  }

  enterMobileNumber(val) {
    this.elements.phone().type(val);
  }

  selectDateOfBirth(date) {
    this.selectDOBDay(date.split(' ')[0]);
    this.selectDOBMonth(date.split(' ')[1]);
    this.selectDOBYear(date.split(' ')[2]);
  }

  selectDOBYear(val) {
    this.elements.dateOfBirthYear().select(val);
  }

  selectDOBMonth(val) {
    this.elements.dateOfBirthMonth().select(val);
  }

  selectDOBDay(val) {
    this.elements.dateOfBirthDay().select(val);
  }

  selectLicenseType() {
    this.elements.fullLicenseType().check({ force: true });
  }

  selectLicensePeriod(val) {
    this.elements.licensePeriod().select(val);
  }

  selectOccupation(val) {
    this.elements.occupation().select(val);
  }

  enterAddress(val) {
    this.elements.addresstStreet().type(val.split(', ')[0]);
    this.elements.addresstCity().type(val.split(', ')[1]);
    this.elements.addresstCountry().type(val.split(', ')[2]);
    this.elements.addresstPostCode().type(val.split(', ')[3]);
  }

  updateProfile() {
    this.elements.update().click();
  }

  validateUpdateProfile() {}
}
export const profilePage = new ProfilePage();
