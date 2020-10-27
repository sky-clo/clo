from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException, UnexpectedAlertPresentException
import time
import unittest
from behave import *

url = "http://localhost:3000"

class TestFrontPage(unittest.TestCase):
    @given("the user has tried to access our webpage")
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get(url)

    @then("the create an account form should be displayed")
    def testFormDisplayed(self):
        success = False
        try:
            self.driver.find_element_by_id("f-firstname")
            self.driver.find_element_by_id("f-lastname")
            self.driver.find_element_by_id("f-email")
            self.driver.find_element_by_id("f-password")
            self.driver.find_element_by_id("f-housenumber")
            self.driver.find_element_by_id("f-postcode")
            success = True
        except NoSuchElementException:
            print("Element not found")
        finally:
            assert success

    @when("the user clicks the {formElement} element of the form")
    def testInputFields(self, formElement):
        success = False
        print(formElement)
        try:
            self.driver.find_element_by_id(formElement).click()
            success = True
        except NoSuchElementException:
            print("Element not found")
        finally:
            assert success

    @then("the user should be able to input {text} into the {formElement}")
    def testInputText(self, text, formElement):
        success = False
        try:
            field = self.driver.find_element_by_id(formElement)
            field.clear()
            field.send_keys(text)
            success = (field.get_attribute("value") == text)
        except NoSuchElementException:
            print("Element not found")
        finally:
            assert success


    @when("the user has completed the form with valid input and clicked create account")
    def testValidInput(self):

        self.driver.find_element_by_id("f-firstname").send_keys("Joe")
        self.driver.find_element_by_id("f-lastname").send_keys("Joe")
        self.driver.find_element_by_id("f-email").send_keys("Joe@joe.uk")
        self.driver.find_element_by_id("f-password").send_keys("Joe")
        self.driver.find_element_by_id("f-housenumber").send_keys("Joe")
        self.driver.find_element_by_id("f-postcode").send_keys("Joe")
        self.driver.find_element_by_xpath("//button[@data-test='CreateAnAccount-next']").click()
        assert True

    @then("they should be directed to the sign in page")
    def testValidInputResult(self):
        assert "sign-in" in self.driver.current_url

    @when("the user has input {firstName} {lastName} {email} {password} {houseNumber} {postcode} and clicked create account")
    def testInvalidInput(self,firstName,lastName,email,password,houseNumber,postcode):

        self.driver.find_element_by_id("f-firstname").send_keys(firstName)
        self.driver.find_element_by_id("f-lastname").send_keys(lastName)
        self.driver.find_element_by_id("f-email").send_keys(email)
        self.driver.find_element_by_id("f-password").send_keys(password)
        self.driver.find_element_by_id("f-housenumber").send_keys(houseNumber)
        self.driver.find_element_by_id("f-postcode").send_keys(postcode)
        self.driver.find_element_by_xpath("//button[@data-test='CreateAnAccount-next']").click()
        assert True

    @then("they should be stay on the current page")
    def testValidInputResult(self):
        assert "create-an-account" in self.driver.current_url


    @when("the user has clicked the sign in option")
    def testSignInLinkClick(self):
        success = False
        try:
            self.driver.find_element_by_xpath("//a[@data-test='CreateAnAccount-sign-in']").click()
            success = True
        except NoSuchElementException:
            print("Element could not be found")
        finally:
            assert success

    @then("the user should be directed to the sign in page")
    def testSignInLink(self):
        assert "sign-in" in self.driver.current_url