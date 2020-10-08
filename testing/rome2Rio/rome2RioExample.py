from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import unittest

class TestRome2Rio(unittest.TestCase):
    """
    This is an example test class to demonstrate GUI testing on rome2rio.com.

    Tests:
        That a user can search successfully for Miami to Ibiza.

    """

    def setUp(self):
        """
        This is the Set Up function, which puts the user on rome2rio.com.

        Assertions:
            Checks 'Rome2rio' is in page title.
        """

        self.driver = webdriver.Chrome()

        # Go to Rome2Rio
        self.driver.get("https://www.rome2rio.com")

        # The following will make the test fail
        # driver.get("https://www.google.com")

        # Check you made it there successfully
        self.assertIn("Rome2rio", self.driver.title, "You didn't make it to the website!")

        time.sleep(1)

    def test_search_rome_2_rio(self):
        """
        This checks a user can search successfully for Miami to Ibiza.

        Assertions:
            Checks 'ways to travel' is in the search results page title.

        """

        driver = self.driver

        # Clear 'From' field and type Miami
        fromField = driver.find_element_by_id("search-from")
        fromField.clear()
        fromField.send_keys("Miami")
        fromField.send_keys(Keys.ENTER)

        #time.sleep(1)

        # Clear 'To' field and type Ibiza
        toField = driver.find_element_by_id("search-to")
        toField.clear()
        toField.send_keys("Ibiza")
        toField.send_keys(Keys.ENTER)

        time.sleep(1)

        # Click search button
        driver.find_element_by_id("transport-search").click()

        # Searching opens a booking.com tab by default, so need to switch back to Rome2Rio
        driver.switch_to.window(driver.window_handles[-1])

        time.sleep(1)

        # Check the landing page title, to confirm we're on the correct results page
        self.assertIn("ways to travel", driver.title, "You didn't land on a search results page!")

    def tearDown(self):
        """
        This is the Tear Down function, which closes everything.
        """
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
