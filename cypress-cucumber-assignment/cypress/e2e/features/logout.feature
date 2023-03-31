Feature: Logout Feature tests

    @logout
    Scenario: User can Logout
        Given the user is logged in successfully
        When user clicks on logout button
        Then user should be logged out