
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest

class ImdbTestScrape(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

        # Go to Imdb homepage
        self.driver.get("https://www.imdb.com/?ref_=nv_home")

        # The following will make the test fail
        # driver.get("https://www.google.com")

        # Check you made it there successfully
        self.assertIn("IMDb", self.driver.title, "You didn't make it to the website!")

        time.sleep(1)

    """
    This is a test, to check a user can search for Miami to Ibiza.

     Args:
         None
     
     Returns:
         None
         
    Assertions: 
        Checks Rome2rio in page title.
        Checks 'ways to travel' in landing page.
     
     Raises:
         KeyError: Raises an exception.
    """
    def test_imdb_scrapper_show_locations(self):

        driver = self.driver

        # Insert the show name into the search bar
        fromField = driver.find_element_by_id("suggestion-search")
        fromField.clear()
        fromField.send_keys("Game of Thrones")
        time.sleep(2)

        # Select the top suggestion from the show name
        fromField.send_keys(Keys.ARROW_DOWN)
        fromField.send_keys(Keys.ENTER)

        # Wait until the elements in new webpage that will be selected have loaded
        try:
            element = WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".see-more.inline")))
        except:
            driver.quit()

        # Select all elements that are see more links
        seeMoreLocations = driver.find_elements_by_css_selector(".see-more.inline")

        # Select the element that links to the location page
        for seeMore in seeMoreLocations:
            try:
                element = seeMore.find_element_by_tag_name("a")
                link = element.get_attribute("href")
                if "locations?ref" in link:
                    break
            except:
                continue

        # Click the element that links to the filming locations
        seeMore.find_element_by_tag_name("a").click();

        # Wait until the elements in new webpage that will be selected have loaded
        try:
            element = WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, "soda")))
        except:
            driver.quit()

        # Select all elements that have locations stored in them
        locations = driver.find_elements_by_class_name("soda")
        toplocations = []

        # Output locations from elements
        for location in locations:
            #print(location.find_element_by_tag_name("dt").find_element_by_tag_name("a").text,file=open("output.txt","a"))
            print(location.find_element_by_tag_name("dt").find_element_by_tag_name("a").text)
            toplocations.append(location)

        time.sleep(1)

        print("")


    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
