import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from './../../pages/loginPage';
import { headerPage } from './../../pages/headerPage';

Given('the user is on login page', () => {
  cy.visit('/insurance/v1/index.php');
});

When(
  'user enters email {string} and password {string} and clicks on Log In button',
  (email, password) => {
    loginPage.submitLogin(email, password);
  },
);

Then('user should be logged in successfully', () => {
  cy.url().should('contains', '/header.php');
  headerPage.validatePageHeader();
});

Then('error message should be displayed', () => {
  loginPage.validateErrorMessage();
});
