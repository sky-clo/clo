Feature: Creating an account
    This is the form to be able to create an account

    Scenario: User has clicked on create account
        Given the user is on the create account page
        Then the create an account form should be displayed

    Scenario Outline: User has input data
        Given the user is on the create account page
        When the user clicks the <formElement> element of the form
        Then the user should be able to input <text> into the <formElement>

    Examples: First Name
    | text          | formElement   |
    | Nathan        | f-firstname   |
    | Rich          | f-firstname   |
    | Marcin        | f-firstname   |

    Examples: Last Name
    | text          | formElement   |
    | Tuckwell      | f-lastname    |
    | Vaughan       | f-lastname    |
    | Grabarczyk    | f-lastname    |

    Examples: Email
    | text                      | formElement    |
    | nathan.tuckwell@sky.uk    | f-email        |
    | rich.vaughan@sky.uk       | f-email        |
    | marcin.grabarczyk@sky.uk  | f-email        |
    
    Examples: Password
    | text          | formElement     |
    | password123   | f-password      |
    | richIsTheB3st | f-password      |
    | bronzeSmurf   | f-password      |

    Examples: House Number
    | text          | formElement    |
    | 8             | f-housenumber  |
    | 420           | f-housenumber  |
    | 69            | f-housenumber  |

    Examples: Postcode
    | text          | formElement     |
    | AB12 3XY      | f-postcode      |
    | XY32 1AB      | f-postcode      |
    | OP45 6LP      | f-postcode      |

    Scenario: User has completed form with valid input
        Given the user is on the create account page
        When the user has completed the form with valid input and clicked create account
        Then they should be directed to the sign in page

    Scenario Outline: User has completed form with invalid input
        Given the user is on the create account page
        When the user has input <firstName> <lastName> <email> <password> <houseNumber> <postcode> and clicked create account
        Then they should be stay on the current page

    Examples:
    | firstName     | lastName      | email             | password      | houseNumber   | postcode      |
    | 09/'          | Bloggs        | joe@bloggs.com    | password123   | 123           | AB12 3CD      |
    | Joe           | )sd_=0        | joe@bloggs.com    | password123   | 123           | AB12 3CD      |
    | Joe           | Bloggs        | skps9870)-=;'1    | password123   | 123           | AB12 3CD      |
    | Joe           | Bloggs        | joe@bloggs.com    | password123   | no            | AB12 3CD      |
    | Joe           | Bloggs        | joe@bloggs.com    | password123   | 123           | hello         |


     Scenario: User has clicked the sign in option
         Given the user is on the create account page
         When the user has clicked the sign in option
         Then the user should be directed to the sign in page

    