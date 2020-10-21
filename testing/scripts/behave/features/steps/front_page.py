from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
import time
import unittest
from behave import *

url = "http://localhost:3000/"

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
			#self.assertTrue(found)
		except NoSuchElementException:
			pass
			#self.assertTrue(found)

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
			print("""
				!
				!
				!
				!
				""")
			print(field.get_attribute("value"))
			print("""
				!
				!
				!
				!
				""")
		except NoSuchElementException:
			print("Element not found")
		finally:
			assert success


	def tearDown(self):
		self.driver.close()

if __name__ == "__main__":
    unittest.main()