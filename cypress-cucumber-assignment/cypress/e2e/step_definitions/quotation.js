import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { newQuotationPage } from './../../pages/newQuotationPage';
import { retrieveQuotationPage } from './../../pages/retrieveQuotationPage';

Given('user clicks on request quotation button', () => {
  newQuotationPage.clickRequestQuotation();
});

Given('user clicks on retreive quotation button', () => {
  newQuotationPage.clickRetrieveQuotation();
});

When(
  'user enters the identification number and click on retreive button',
  () => {
    cy.fixture('quotation').then((data) => {
      newQuotationPage.enterItentificationNumber(data.quotation_id);
    });
    newQuotationPage.clickGetQuoteButton();
  },
);

When('user provides required data and clicks on save quotation', (data) => {
  data.hashes().forEach((data) => {
    newQuotationPage.selectBreakDownCover(data.breakDownCover);
    newQuotationPage.selectWindScreenRepairTrue();
    newQuotationPage.enterIncidents(data.incident);
    newQuotationPage.enterRegistration(data.registration);
    newQuotationPage.enterAnnMileage(data.annualMileage);
    newQuotationPage.enterEstimatedValue(data.estimatedValue);
    newQuotationPage.selectParkingLocation(data.parking);
    newQuotationPage.selectDate(data.policyStartDate);
    newQuotationPage.saveQuotation();
  });
});

Then('user should see identification number', () => {
  newQuotationPage.getIdNumber();
});

Then('quotation should be displayed', () => {
  retrieveQuotationPage.validateTitle();
});
