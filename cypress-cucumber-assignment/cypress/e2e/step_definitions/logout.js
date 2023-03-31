import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from './../../pages/loginPage';
import { headerPage } from './../../pages/headerPage';

Given('the user is logged in successfully', () => {
  cy.visit('/insurance/v1/index.php');
  loginPage.submitLogin('test@test.com', 'test@123');
  cy.url().should('contains', '/header.php');
});

When('user clicks on logout button', () => {
  headerPage.clickLogout();
});

Then('user should be logged out', () => {
  cy.url().should('contains', '/index.php');
});
