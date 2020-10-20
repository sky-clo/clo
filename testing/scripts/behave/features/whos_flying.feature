Feature: Whos Flying?
	This is the form you go through after you've selected a flight and signed in


Scenario: The user is presented with the Who's Flying? form
	Given the user has landed on the Who's Flying page
	Then all of the related form elements are loaded and displayed correctly


Scenario Outline: The user tries to input valid data into the Who's Flying text fields
	Given the user is on the Who's Flying page
	When the user tries to input <text> into the <fieldName> field
	Then the <fieldName> field contains <text> and no validation error message is displayed

    Examples: First Names
    | text          | fieldName |
    | Rich          | firstName |
    | Marcin        | firstName |
    | Nathan        | firstName |

    Examples: Last Names
    | text          | fieldName  |
    | Vaughan       | lastName   |
    | Grabarczyk    | lastName   |
    | Tuckwell      | lastName   |

     Examples: Passport Numbers
    | text          | fieldName      |
    | M09933535     | passportNumber |
    | 123456789     | passportNumber |
    | 1AB2C3D45     | passportNumber |


Scenario Outline: The user tries to input invalid data into the Who's Flying text fields
	Given the user is on the Who's Flying page
	When the user tries to input <text> into the <fieldName> field
	Then the user is shown the corresponding <fieldNameError> validation error message

    Examples: Invalid First Names
    | text          | fieldName | fieldNameError         |
    | Rich!         | firstName | Invalid first name     |
    | ""            | firstName | Invalid first name     |
    | X Æ A-12      | firstName | Invalid first name     |

    Examples: Invalid Last Names
    | text          | fieldName | fieldNameError          |
    | Vaughan!      | lastName  | Invalid last name       |
    | ""            | lastName  | Invalid last name       |
    | 0800 00 1066  | lastName  | Invalid last name       |

     Examples: Invalid Passport Numbers
    | text                                     | fieldName      | fieldNameError             |
    | abc                                      | passportNumber | Invalid passportNumber     |
    | ""                                       | passportNumber | Invalid passportNumber     |
    | washing machines live longer with calgon | passportNumber | Invalid passportNumber     |


Scenario: The user tries to pick a date from the date picker
	Given the user is on the Who's Flying page
        When the user selects a date from the date picker
        Then the DoB field shows the date that they picked


Scenario: The user tries to add another person to the booking
	Given the user is on the Who's Flying page
	When the user clicks the "Add Another Person" button
	Then extra form fields appear on the page to add another person


Scenario: The user tries to click next after filling everything in properly
	Given the user is on the Who's Flying page and filled in the form fields correctly
	When the user clicks the "Next" button
	Then they land on the Payment page


Scenario: The user tries to click next when they haven't filled stuff in properly
	Given the user is on the Who's Flying page and at least one field has invalid data in it
	When the user clicks the "Next" button
	Then the user will be prevented from proceeding and shown an error message








