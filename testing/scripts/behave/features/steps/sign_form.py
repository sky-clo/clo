from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException, UnexpectedAlertPresentException
import time
import unittest
from behave import *

url = "http://localhost:3000"

class TestSignInPage(unittest.TestCase):

	@given("the user clicks the sign-in button")
	def setUp(self):
		self.driver = webdriver.Chrome()
		self.driver.get(url)
		signInButton = self.driver.find_element_by_xpath("//a[@data-test='Header-sign-in']")
		signInButton.click()

	@then("the user should see a sign-in form")
	def testCorrectForm(self):
		found = False
		try:
			email = self.driver.find_element_by_id("f-email")
			password = self.driver.find_element_by_id("f-password")
			found = True
		except NoSuchElementException:
			pass
		finally:
			assert found

	@then("the user should be able to input {email} and {password}")
	def testInputOfData(self, email, password):
		found = False
		try:
			email = self.driver.find_element_by_id("f-email")
			password = self.driver.find_element_by_id("f-password")
			email.clear()
			email.send_keys(email)
			password.clear()
			password.send_keys(password)
			found = True
		except NoSuchElementException:
			pass
		finally:
			assert found

	@then("an error message should be displayed with incorrect e-mail")
	def testIncorrectEmail(self):
		found = False
		try:
			email = self.driver.find_element_by_id("f-email")
			email.clear()
			email.send_keys("wrongemail")
			update = self.driver.find_element_by_css_selector("input:invalid")
			next_button = self.driver.find_element_by_xpath("//button[@data-test='SignIn-next']")
			next_button.click()
			found = True
		except NoSuchElementException:
			pass
		finally:
			assert found

	@when("clicking the sign in button")
	def testSignInButtonThere(self):
		found = False
		try:
			email = self.driver.find_element_by_id("f-email")
			email.clear()
			email.send_keys("correct@mail.com")
			password.clear()
			password.send_keys("password")
			found = True
		except NoSuchElementException:
			pass
		except UnexpectedAlertPresentException:
			pass
		finally:
			assert found

	@then("the user should see that he signed in")
	def testIfUserCanSignIn(self):
		found = False
		try:
			email = self.driver.find_element_by_id("f-email")
			email.clear()
			email.send_keys("ryanimpey78@example.org")
			password.clear()
			password.send_keys("jeffbezos")
		except NoSuchElementException:
			pass
		except UnexpectedAlertPresentException:
			found = True
		finally:
			assert found

	@when("the user clicked create an account")
	def testClickingCreateAccount(self):
		try:
			create_account = self.driver.find_element_by_xpath("//a[@data-test='SignIn-create-an-account']")
			create_account.click()
			assert True
		except NoSuchElementException:
			assert False

	@then("the user should successfully be able to see create-account page")
	def testCreateAccountFormIsPresent(self):
		assert "create-an-account" in self.driver.currrent_url
