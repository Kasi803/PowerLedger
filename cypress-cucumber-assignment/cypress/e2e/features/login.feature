Feature: Login Feature tests

    @login
    Scenario: Successful Login
        Given the user is on login page
        When user enters email "<username>" and password "<password>" and clicks on Log In button
        Then user should be logged in successfully

        Examples:
            | username      | password |
            | test@test.com | test123  |

    @login
    Scenario: Invalid Login
        Given the user is on login page
        When user enters email "<username>" and password "<password>" and clicks on Log In button
        Then error message should be displayed

        Examples:
            | username        | password  |
            | test11@test.com | test11123 |
            | test11@test.com |           |
            |                 | test11123 |