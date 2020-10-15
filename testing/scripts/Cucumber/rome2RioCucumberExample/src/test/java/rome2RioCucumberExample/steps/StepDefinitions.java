package rome2RioCucumberExample.steps;

import javax.inject.Inject;
import org.openqa.selenium.*;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import java.util.Set;
import static org.junit.Assert.assertTrue;

public class StepDefinitions {

    // Set everything up
    @Inject
    private WebDriver dr;
    private WebElement fromField;
    private WebElement toField;
    private String handle;
    private static boolean dunit = false;

    @Given("^that I am on the Rome2Rio homepage$")
    public void navigate(){

        // Go to Rome2Rio and check you made it there successfully
        dr.get("http://www.rome2rio.com");
        assertTrue(dr.getTitle().contains("Rome2rio"));
    }

    @When("^I search from \"([^\"]*)\" to \"([^\"]*)\"$")
    public void search(String from, String to) {

        //Clear 'From' field and type Miami
        fromField = dr.findElement(By.id("search-from"));
        fromField.clear();
        fromField.sendKeys(from);
        fromField.sendKeys(Keys.ENTER);

        // Clear 'To' field and type Ibiza
        toField = dr.findElement(By.id("search-to"));
        toField.clear();
        toField.sendKeys(to);
        toField.sendKeys(Keys.ENTER);

        // Click search button
        dr.findElement(By.id("transport-search")).click();
    }

    @Then("^the landing page title should contain \"([^\"]*)\" and \"([^\"]*)\"$")
    public void showResults(String from, String to) throws InterruptedException {

        // Pause to allow the page to fully load (there are better ways to do this)
        Thread.sleep(2750);

        // Keep track of the auto-opening booking.com tab, and switch back to R2R
        Set<String> handles = dr.getWindowHandles();
        handle = (String) handles.toArray()[1];
        dr.switchTo().window(handle);

        // Check the landing page title, to confirm we're on the correct results page
        String regexString = ".*"+from+".*"+to+".*";
        assertTrue(dr.getTitle().matches(regexString));

    }

    // The below is a DIY approach at implementing beforeAll() and afterAll() functionality,
    // since it's not available in Cucumber
    @Before
    public void beforeAll() {
        if(!dunit) {
            Runtime.getRuntime().addShutdownHook(new Thread() {
                public void run() {
                    dr.quit();
                }
            });
            System.out.println("STARTING TESTS");
            dunit = true;
        }
    }
}