Feature: Creating an account
    This is the form to be able to create an account

    Scenario: User has clicked on create account
        Given the user has clicked on a create account button
        When the user has loaded the page
        Then the create an account form should be displayed

    Scenario Outline: User has input data
        Given the user is on the create account page
        When the user types <text> into the <form element> element of the form
        Then the text should be input into the <form element> element of the form

    Examples: First Name
    | text          | form element  |
    | Nathan        | first name    |
    | Rich          | first name    |
    | Marcin        | first name    |

    Examples: Last Name
    | text          | form element  |
    | Tuckwell      | last name     |
    | Vaughan       | last name     |
    | Grabarczyk    | last name     |

    Examples: Email
    | text                      | form element |
    | nathan.tuckwell@sky.uk    | email        |
    | rich.vaughan@sky.uk       | email        |
    | marcin.grabarczyk@sky.uk  | email        |
    
    Examples: Password
    | text          | form element  |
    | password123   | password      |
    | richIsTheB3st | password      |
    | bronzeSmurf   | password      |

    Examples: House Number
    | text          | form element  |
    | 8             | house number  |
    | 420           | house number  |
    | 69            | house number  |

    Examples: Postcode
    | text          | form element  |
    | AB12 3XY      | postcode      |
    | XY32 1AB      | postcode      |
    | OP45 6LP      | postcode      |

    Scenario: User has completed input
        When the user has completed input in a form element
        Then the input should be validated

     Scenario: User has clicked the sign in option
        When the user has clicked the sign in option
        Then the user should be able to sign in

    