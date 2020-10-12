# 🔍 Test Documentation

## Contents

1.  [Test Stories](#test-stories)
     * [Front Page](#front-page)
     * [Location Page](#location-page)
     * [Sign-in Form](#sign-in-form)
     * [Flying Details Form](#flying-details-form)
     * [Payment Details Form](#payment-details-form)
     * [Confirmation Page](#confirmation-page)
     * [Create an Account](#create-an-account)
2. [Selenium Scripts](#selenium-scripts)

# Test Stories

### Front Page

1. Test if we can access the correct page
2. Check for the presence of the form, buttons and popular locations display 
3. Being able to put input into the form: 
   * From
   * To
   * Date
4. Test the validation of the input form:
   * From
   * To
   * Date
5. Check if the submit of the form works
   * Check if we display the correct page after pressing 'search'
6. Check if you can click sign-in on the nav bar
   * Check if you can see the sign-in form
7. Check if you can click create an account on the nav var
   * Check if you can see the create account form
8. Check if you can click the popular locations and get the correct information

### Location Page

1. Check if the available flights are displayed
2. Check if the map is available
3. Check if clicking the flight displays a sign-in form
4. Check if the map is interactive

### Sign-in Form

1. Check if the sign-in form is available
2. Check if you can input data into:
   * Email
   * Password
3. Check if sign in button works correctly
4. Check if the create account works correctly
5. Check for validation

### Flying Details Form

1. Check if the form displays correctly with all the correct fields
2. Check if you can input data into:
   * First Name
   * Last Name
   * DoB
   * Passport Number
3. Check if you can add anotehr person
4. Check if you can click next
5. Check if the correct page displays
6. Check for validation

### Payment Details Form

1. Check if the form is displayed
2. Check if you can add input into:
   * Account Name
   * Sort Code
   * Account Number
   * CVV
3. Check if you can click next
4. Check for validation

### Confirmation Page

1. Check if we display the confirmation page
2. Check if the map is displayed
3. Check if the finish button is displayed

### Create an Account

1. Check if the create an account form is displayed
2. Check if you can input data in the following fields:
   * First Name
   * Last Name
   * Email
   * Password
   * House Number
   * Postcode
3. Check if you can click the sign in option

# Selenium Scripts

Test scripts corresponding to the above stories can be found in the scripts folder.

### Example

* [Basic example for rome2rio.com](./testing/scripts/rome2RioExample.py)

