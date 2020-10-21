Feature: Accessing the confirmation page

    Scenario: The user has progressed from payment page
        Given the user has progressed from the payment page
        When the user has loaded the page
        Then the confirmation page should be displayed
        And the map of the location should be displayed
        And the finish button should be displayed

    