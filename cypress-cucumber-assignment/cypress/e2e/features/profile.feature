Feature: Profile Feature tests

    @editprofile
    Scenario: Edit Profile
        Given the user is logged in successfully
        And user clicks on edit profile button
        When user enters the data and click on update
            | title | surname | firstName | mobile     | dateOfBirth     | licenseType | licesnePeriod | occupation | address                               |
            | Mrs   | Test    | User      | 9999999999 | 10 January 1990 | Full        | 5             | Doctor     | Test Street, Bangaluru, India, 123456 |
        Then data should be updated successfully

    @viewprofile
    Scenario: View Profile
        Given the user is logged in successfully
        And user clicks on profile button
        Then user should see the profile details