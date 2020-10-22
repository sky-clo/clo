from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
import time
import unittest
from behave import *

url = "http://localhost:3000"

class TestFrontPage(unittest.TestCase):
	@given("the user has tried to access our webpage")
	def setUp(self):
		self.driver = webdriver.Chrome()
		self.driver.get(url)

	@then("the user should be presented with the search form, buttons and popular locations")
	def testCorrectPage(self):
		found = False
		try:
			fromText = self.driver.find_element_by_id("from")
			toText = self.driver.find_element_by_id("to")
			dateText = self.driver.find_element_by_id("f-date")
			found = True
		except NoSuchElementException:
			pass
		finally:
			assert found

	@when("the user clicks on the {fieldName}")
	def testInputFields(self, fieldName):
		success = False
		try:
			self.driver.find_element_by_id(fieldName).click()
			success = True
		except NoSuchElementException:
			print("Element not found")
		finally:
			assert success

	@then("the user should be able to input {text} into {fieldName}")
	def testInputText(self, text, fieldName):
		success = False
		try:
			field = self.driver.find_element_by_id(fieldName)
			field.clear()
			field.send_keys(text)
			success = (field.get_attribute("value") == text)
		except NoSuchElementException:
			print("Element not found")
		finally:
			assert success

	@then("the data inputted into {to} and {fromLocat} should be valid")
	def testValidateValidInput(self, to, fromLocat):
		succes = False
		try:
			field = self.driver.find_element_by_id("to")
			field.clear()
			field.send_keys(to)
			fromField = self.driver.find_element_by_id("from")
			fromField.clear()
			fromField.sendkeys(fromLocat)
			submitButton = self.driver.find_element_by_attribute("Home-search")
			submitButton.click()
			success = self.driver.current_url == "http://localhost:3000/location"
		except NoSuchElementException:
			print("Element not found")
		finally:
			assert success

	@then("the data inputted into {to} and {fromLocat} should be invalid")
	def testValidateInvalidInput(self, text, fieldName):
		succes = False
		try:
			field = self.driver.find_element_by_id("to")
			field.clear()
			field.send_keys(to)
			fromField = self.driver.find_element_by_id("from")
			fromField.clear()
			fromField.sendkeys(fromLocat)
			submitButton = self.driver.find_element_by_attribute("Home-search")
			submitButton.click()
			success = self.driver.current_url == url
		except NoSuchElementException:
			print("Element not found")
		finally:
			assert success

	@when("the user has clicked sign-in")
	def testIfButtonExists(self):
		found = False
		try:
			signInButton = self.driver.find_element_by_attribute("Header-sign-in")
			found = True
		except NoSuchElementException:
			pass
		finally:
			assert found

	@then("the sign-in form should be displayed")
	def testForSignInForm(self):
		signInButton = self.driver.find_element_by_attribute("Header-sign-in")
		signInButton.click()
		assert "sign-in" in self.driver.current_url

	@when("the user has clicked the create account button")
	def testIfCreateAccountButtonExists(self):
		found = False
		try:
			accountInButton = self.driver.find_element_by_attribute("Header-create-account")
			found = True
		except NoSuchElementException:
			pass
		finally:
			assert found
			 
	def tearDown(self):
		self.driver.close()

if __name__ == "__main__":
    unittest.main()