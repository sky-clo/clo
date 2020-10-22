Feature: Accessing the landing page
This is the front page that is displayed when the user browsers our webpage. 

	Scenario: The user enters the webpage
		Given the user has tried to access our webpage
		Then the user should be presented with the search form, buttons and popular locations

	Scenario Outline: The user tries to input something into the form
		Given the user has tried to access our webpage
		When the user clicks on the <fieldName>
		Then the user should be able to input <text> into <fieldName>

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

	Scenario Outline: The user form input is validated when correct
		Given the user has tried to access our webpage
		Then the data inputted into <to> and <fromLocat> should be valid

	Examples: validFromInputs
		|	to 	 	|	fromLocat	|	
		|	London	|	Ibiza		|
		|	Croatia	|	Warsaw		|
		|	Berlin	|	Berlin		|


	Scenario Outline: The user form input is validated when incorrect
		Given the user has tried to access our webpage
		Then the data inputted into <to> and <fromLocat> should be invalid

	Examples: invalidFromInputs
		|	to 		|	fromLocat	|	
		|	1234	|	dk21'		|
		|	$s!'Sd'	|	"    " 		|
		|	"  "   	|	"}[2"		|

	Scenario: Checking if user can see sign-in form
		Given the user has tried to access our webpage
		When the user has clicked sign-in
		Then the sign-in form should be displayed

	# Scenario: Checking if user can see create account form
	# 	Given the user has tried to access our webpage
	# 	When the user has clicked the create account button
	# 	Then the create-account form should be displayed

	# Scenario: Correct popular locations details are displayed
	# 	Given the user has tried to access our webpage
	# 	When the user can see popular location
	# 	Then the user can click on the popular location
