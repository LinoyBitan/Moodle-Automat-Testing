package hellocucumber;

import graphql.Assert;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;
import io.cucumber.java.After;
import io.cucumber.java.en.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.regex.Matcher;
import java.util.regex.Pattern;



public class StepDefinitions {

    private final static String CHROME_DRIVER_PATH = "C:\\Users\\User\\Desktop\\2023-mbt-80-55-main\\chromedriver_gil.exe";
    private ChromeDriver driver;
    private WebDriverWait wait;



    // Starts a new session for the student, placing him in the home page of Moodle
    @Given("Student is on Home Page")
    public void StudentIsOnHomePage() {
        System.setProperty("webdriver.chrome.driver", CHROME_DRIVER_PATH);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(60));
        driver.manage().window().maximize();
        driver.get("http://localhost/");

    }

    // Logs the student into the Moodle site with his username and password
    @When("Student is logged in with {string} and {string}")
    public void StudentIsLoggedInWithUserNameAndPassword(String Username, String Password) {

        //From home page to log-in (top right)
        driver.findElement(By.xpath("//*[@id=\"usernavigation\"]/div/div/span/a")).click();

        //Enter username and password
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys(Username);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys(Password);

        // Login
        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    // Student chooses a course and star it
    @And("Student defines course as starred")
    public void StudentDefinesCourseAsStarred() {

        // Press "My Courses"
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/nav/div[1]/nav/ul/li[3]/a"))).click();

        //Press 3 dots option on the course
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div[2]/div/div/button/i"))).click();

        //Star the course
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div[2]/div/div/div/a[1]"))).click();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // Checks that the course has been marked as star successfully
    @Then("Course successfully marked as starred")
    public void CourseSuccessfullyMarkedAsStarred() {

        // check that the star icon is not hidden
        WebElement star = driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div[1]/div/div/a/span[1]/span"));
        String starClass = star.getAttribute("class"); //retrieve class attributes from the element

        Pattern pattern = Pattern.compile("\\btext-primary-hidden\\b");
        Matcher matcher = pattern.matcher(starClass);

        assertFalse(matcher.find());
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // Logs out the student from the Moodle site
    @After("@Student")
    public void StudentLogOut() {

        //Press drop menu on the right
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/nav/div[2]/div[3]/div/div/a"))).click();

        //press Log out
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/nav/div[2]/div[3]/div/div/div/div/div/div/a[7]"))).click();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.quit();
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Starts a new session for the teacher, placing him in the home page of Moodle
    @Given("Teacher is on Home Page")
    public void TeacherIsOnHomePage() {
        System.setProperty("webdriver.chrome.driver", CHROME_DRIVER_PATH);
        this.driver = new ChromeDriver();
        driver.manage().window().maximize();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));

        driver.get("http://localhost/");

    }


    // Logs the teacher into the Moodle site with his username and password
    @When("Teacher is logged in with {string} and {string}")
    public void TeacherIsLoggedInWithUserNameAndPassword(String Username, String Password) {

        driver.findElement(By.xpath("//*[@id=\"usernavigation\"]/div/div/span/a")).click(); //From home page to log-in (top right)

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys(Username);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys(Password);
        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click(); // Login
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // Teacher navigate to the course he desires to delete and deletes it.
    @And("Teacher deletes the course")
    public void TeacherDeletesTheCourse() {

        //Site Administration
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("/html/body/div[2]/nav/div[1]/nav/ul/li[4]/a")))).click();

        //Courses
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("/html/body/div[2]/div[3]/div/div[2]/nav/ul/li[3]/a")))).click();

        //Manage courses and categories
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("/html/body/div[2]/div[3]/div/div[3]/div/section/div/div/div[3]/div/div[1]/div[2]/ul/li[1]/a")))).click();

        //Clicks garbage icon
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("/html/body/div[4]/div[3]/div/div[3]/div/section/div/form/div[2]/div[2]/div/div/ul/li/div/div[3]/span/a[3]/i")))).click();

        //Confirm delete
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("/html/body/div[2]/div[3]/div/div[3]/div/section/div/div/div/div[3]/div/div[2]/form/button")))).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    // Checks that the course has been successfully deleted
    @Then("Course successfully deleted from Moodle")
    public void CourseSuccessfullyDeletedFromMoodle() {

        // Scroll down to the "Course has been completely deleted" sentence
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight);");

        //Search for "Course has been completely deleted"
        WebElement checkForSuccess = driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[3]/div/section/div/div/h2"));
        // Retrieve the text of the element
        String Text = checkForSuccess.getText();

        // Define a regex pattern to extract the number
        Pattern pattern = Pattern.compile("has been completely deleted");
        Matcher matcher = pattern.matcher(Text);
        assertTrue(matcher.find());
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    // Logs out the teacher from Moodle site
    @After("@Teacher")
    public void TeacherLogOut(){

        //Continue button
        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[3]/div/section/div/div/div[15]/form/button")).click();

        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/nav/div[2]/div[3]/div/div/a"))).click(); // Logout
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/nav/div[2]/div[3]/div/div/div/div/div/div/a[7]"))).click(); // Logout

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.quit();

    }

}
