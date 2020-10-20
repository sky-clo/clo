Feature: Accessing the location flight page

	Scenario: The user can see available flight for a location
		Given the user has selected a location
		Then the user should see available flights

	Scenario: The user can see a map of the route
		Given the user has selected a location
		When there is an available route
		Then a map should be seen displaying the route

	Scenario: The user clicks on a flight and sees a sign-in form
		Given the user has selected a flight
		And the user hasn't logged in before
		Then the user should see a sign-in form

	Scenario: The user can interact with the map
		Given the user has selected a flight and see's a map
		When the user interact with the map
		Then the map should respond
