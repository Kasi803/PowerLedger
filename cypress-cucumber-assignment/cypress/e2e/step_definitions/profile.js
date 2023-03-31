import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { profilePage } from './../../pages/profilePage';

Given('user clicks on profile button', () => {
  profilePage.clickProfileLink();
});

Given('user clicks on edit profile button', () => {
  profilePage.clickEditProfileLink();
  profilePage.validateEditProfileTitle();
});

When('user enters the data and click on update', (data) => {
  data.hashes().forEach((data) => {
    profilePage.selectTitle(data.title);
    profilePage.enterSurname(data.surname);
    profilePage.enterFirstName(data.firstName);
    profilePage.enterMobileNumber(data.mobile);
    profilePage.selectDateOfBirth(data.dateOfBirth);
    profilePage.selectLicenseType(data.licenseType);
    profilePage.selectLicensePeriod(data.licesnePeriod);
    profilePage.selectOccupation(data.occupation);
    profilePage.enterAddress(data.address);
    profilePage.updateProfile();
  });
});

Then('data should be updated successfully', () => {
  profilePage.validateUpdateProfile();
});

Then('user should see the profile details', () => {
  profilePage.validatProfilePage();
});
