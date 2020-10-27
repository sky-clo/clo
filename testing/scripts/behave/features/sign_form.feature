Feature: Accessing the sign-in form 
This is the ability for a user to see a sign-in form.

	Scenario: The user can see the sign-in form
		Given the user clicks the sign-in button
		Then the user should see a sign-in form

	Scenario Outline: The user can add input to the sign-in form
		Given the user clicks the sign-in button
		Then the user should be able to input <email> and <password>

	Examples: Inputs
		|		email		|		password		|
		|example@gmail.com	|	verysecure123		|
		|example2@gmail.com	|	evenmoresecure		|

	Scenario: The input in the sign-in form should be validated
		Given the user clicks the sign-in button
		Then an error message should be displayed with incorrect e-mail

	Scenario: The user can successfully sign-in using the button
		Given the user clicks the sign-in button
		When clicking the sign in button
		Then the user should see that he signed in

	Scenario: The user can successfully create an account
		Given the user clicks the sign-in button
		When the user clicked create an account
		Then the user should successfully be able to see create-account page
