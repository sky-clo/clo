Feature: Payment Page
	This is the form where you enter your payment details, after you've filled in your flight details


Scenario: The user is presented with the payment page
	Given the user has landed on the payment page
	Then all of the related form elements are loaded and displayed correctly


Scenario Outline: The user tries to input valid data into the payment text fields
	Given the user is on the payment page
	When the user tries to input <text> into the <fieldName> field
	Then the <fieldName> field contains <text> and no validation error message is displayed

    Examples: Account Names
    | text                 | fieldName   |
    | Mr R E Vaughan       | accountName |
    | Mr Marcin Grabarczyk | accountName |
    | Mr Nathan Tuckwell   | accountName |

    Examples: Sort Codes
    | text           | fieldName  |
    | 01-01-01       | sortCode   |
    | 02-02-02       | sortCode   |
    | 03-03-03       | sortCode   |

     Examples: Account Numbers
    | text           | fieldName     |
    | 12345678       | accountNumber |
    | 13246579       | accountNumber |
    | 98765432       | accountNumber |

    Examples: CVVs
    | text    | fieldName |
    | 123     | CVV       |
    | 456     | CVV       |
    | 789     | CVV       |


Scenario Outline: The user tries to input invalid data into the payment form fields
	Given the user is on the payment page
	When the user tries to input <text> into the <fieldName> field
	Then the user is shown the corresponding <fieldNameError> validation error message

    Examples: Invalid Account Names
    | text          | fieldName   | fieldNameError      |
    | ""            | accountName | Invalid accountName |
    | X Æ A-12 Musk | accountName | Invalid accountName |
    | C3P0          | accountName | Invalid accountName |

    Examples: Invalid Sort Codes
    | text          | fieldName  | fieldNameError     |
    | THX 1138      | sortCode   | Invalid sortCode   |
    | 02-02         | sortCode   | Invalid sortCode   |
    | ""            | sortCode   | Invalid sortCode   |

     Examples: Invalid Account Numbers
    | text          | fieldName     | fieldNameError        |
    | 123           | accountNumber | Invalid accountNumber |
    | ""            | accountNumber | Invalid accountNumber |
    | i dunno       | accountNumber | Invalid accountNumber |

    Examples: Invalid CVVs
    | text    | fieldName | fieldNameError |
    | abc     | CVV       | Invalid CVV    |
    | ""      | CVV       | Invalid CVV    |
    | 5       | CVV       | Invalid CVV    |


Scenario: The user tries to click next after filling everything in properly
	Given the user is on the payment page and filled in the form fields correctly
	When the user clicks the "Next" button
	Then they land on the Order Confirmation page


Scenario: The user tries to click next when they haven't filled stuff in properly
	Given the user is on the payment page and at least one field has invalid data in it
	When the user clicks the "Next" button
	Then the user will be prevented from proceeding and shown an error message








