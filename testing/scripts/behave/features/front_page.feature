Feature: Accessing the landing page
This is the front page that is displayed when the user browsers our webpage. 

	Scenario: The user enters the webpage
		Given the user has tried to access our webpage
		When the user has loaded the correct page
		Then the user should be presented with the search form, buttons and popular locations

	Scenario Outline: The user tries to input something into the form
		Given the user is wanting to input data into <fieldName> 
		When the user clicks on the <fieldName>
		Then the user should be able to input <text>

	Examples: fromInputs
		|	text 	|	fieldName	|	
		|	London	|	from		|
		|	Croatia	|	from		|
		|	Berlin	|	from		|

	Examples: toInputs
		|	text  	|	fieldName	|	
		|	Ibiza	|	to 			|
		|	Warsaw	|	to 			|
		|	Berlin	|	to 			|

	Scenario: The user form input is validated
		Given the user has entered input into the form
		Then the data inputted should be validated

	Scenario: Checking if the data is submitted
		Given the user has clicked the search button
		And the input is valid
		Then the correct next page should be displayed

	Scenario: Checking if user can see sign-in form
		Given the user has clicked sign-in
		Then the sign-in form should be displayed

	Scenario: Checking if user can see create account form
		Given the user has clicked the create account button
		Then the create-account form should be displayed

	Scenario: Correct popular locations details are displayed
		Given the user has clicked on a popular location
		When the location information has been displayed
		Then the information should be correct for that location