Feature: Accessing the sign-in form 
This is the ability for a user to see a sign-in form.

	Scenario: The user can see the sign-in form
		Given the user clicks the sign-in button
		Then the user should see a sign-in form

	Scenario Outline: The user can add input to the sign-in form
		Given the user has displayed the sign-in form
		Then the user should be able to input <email> and <password>

	Examples: Inputs
		|		email		|		password		|
		|example@gmail.com	|	verysecure123		|
		|example2@gmail.com	|	evenmoresecure		|

	Scenario: The input in the sign-in form should be validated
		Given the user has entered an email
		When the email is incorrect
		Then an error message should be displayed

	Scenario: The user can successfully sign-in using the button
		Given the user entered correct credentials
		When clicking the sign in button
		Then the user should see that he signed in

	Scenario: The user can successfully create an account
		Given the user has clicked create an account
		And filled in all the inputs
		Then the user should successfully be able to create an account

	Scenario: The create an account form should be validated
		Given the user has opened the create account form
		When the user inputs incorrect email 
		Then an error should be displayed

