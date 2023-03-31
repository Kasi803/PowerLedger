Feature: Quotation Feature Tests

    @quotation @request
    Scenario: Request Quotation
        Given the user is logged in successfully
        And user clicks on request quotation button
        When user provides required data and clicks on save quotation
            | breakDownCover | windScreenRepair | incident | registration | annualMileage | estimatedValue | parking       | policyStartDate |
            | European       | YES              | 1        | 123456       | 10000         | 65314          | Locked Garage | 10 January 2015 |
        Then user should see identification number

    @quotation @retrieve
    Scenario: Retreive Quotation
        Given the user is logged in successfully
        And user clicks on retreive quotation button
        When user enters the identification number and click on retreive button
        Then quotation should be displayed