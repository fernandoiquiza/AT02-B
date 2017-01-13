package org.funjala.automation.web.pivotal.steps.task;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

import org.funjala.automation.web.common.api.ApiProjects;
import org.funjala.automation.web.common.drivers.Driver;
import org.funjala.automation.web.pages.pivotal.home.HomePage;
import org.funjala.automation.web.pages.pivotal.login.LoginPage;
import org.funjala.automation.web.pages.pivotal.projects.CreateProjectPage;
import org.funjala.automation.web.pages.pivotal.projects.ProjectMenuPage;
import org.funjala.automation.web.pages.pivotal.stories.SideBarStoriesPage;
import org.funjala.automation.web.pages.pivotal.stories.StoryPage;
import org.funjala.automation.web.pages.pivotal.task.TaskPage;

import org.openqa.selenium.WebDriver;


public class TaskSteps {
  WebDriver driver;
  LoginPage login;
  HomePage home;
  CreateProjectPage project;
  ProjectMenuPage projectMenuPage;
  SideBarStoriesPage sideBarStories;
  StoryPage storyPage;
  TaskPage taskPage;

  @Given("^I am on Pivotal Tracker page$")
  public void onPivotalTrackerPage() throws IOException {
    driver = Driver.getDriver().openBrowser();
    login = new LoginPage(driver);
  }

  @And("^I put a ([^\"]*) and press Next button$")
  public void putNameAndPressNextButton(String userName) {
    login.setUserName(userName);
    login.clickContinue();
  }

  @And("^I put a ([^\"]*) and press Submit button$")
  public void putPasswordAndPressSubmitButton(String password) {
    login.setPassword(password);
    home = login.clickSubmit();
  }

  @And("^I create a project as a ([^\"]*)$")
  public void createProject(String projectName) {
    project = home.clickCreateProject();
    project.setProjectName(projectName);
  }

  @And("^I select an account as a ([^\"]*)$")
  public void selectAccount(String account) {
    project.clickSelectAccount(account);
    projectMenuPage = project.clickCreate();
  }

  /**
   * Create a Story to add Task.
   *
   * @param storyName name of the story for the test.
   */
  @When("^I create a story as a (.*)$")
  public void createAStoryWithXName(String storyName) {
    sideBarStories = projectMenuPage.sideBarStories();
    storyPage = sideBarStories.clickOnAddStoryButton();
    storyPage.setTitleStory(storyName);
    taskPage = storyPage.clickCreateTask(driver);
  }

  @And("^I add a task as a (.*)$")
  public void addATaskWithXName(String taskName) {
    taskPage.addTask(taskName);
    storyPage.clickOnCreateStory();
  }

  @Then("^A task named (.*) should be created$")
  public void taskCalledXShouldBeCreated(String expectedTaskName) {
    storyPage.clickOnExpandStory();
    assertEquals(1, taskPage.sizeContentNameTask(expectedTaskName));
  }

  /**
   * Add multiple task with the same name.
   *
   * @param taskName for the test.
   */
  @And("^I add multiple tasks with the same name as ([^\"]*)$")
  public void addMultipleTasksWithSameName(String taskName) {
    taskPage.addTask(taskName);
    taskPage.addTask(taskName);
    taskPage.addTask(taskName);
    taskPage.addTask(taskName);
    taskPage.addTask(taskName);
  }

  @And("^I click on save story with tasks$")
  public void clickOnSaveStoryWithTasks() {
    storyPage.clickOnCreateStory();
    storyPage.clickOnExpandStory();
  }

  @Then("^I should have created (\\d+) tasks with the same name as ([^\"]*)$")
  public void verifyTasksWasCreate(int tasks, String nameTask) {
    assertEquals(tasks, taskPage.sizeContentNameTask(nameTask));
  }
  //*******************************************************

  @And("^I have a task (.*?) and (.*?) created$")
  public void createTasks(String taskNameOne, String taskNameTwo) throws Throwable {
    taskPage = storyPage.clickCreateTask(driver);
    taskPage.addTask(taskNameOne);
    taskPage.addTask(taskNameTwo);
  }

  @When("^I delete (.*?)$")
  public void deleteTask(String taskName) throws Throwable {
    taskPage.deleteTask(taskName);

  }


  @Then("^(.*?) should be deleted$")
  public void taskDeletedVerification(String taskName) throws Throwable {
    storyPage.clickOnCreateStory();
    storyPage.clickOnExpandStory();
    assertEquals(0, taskPage.sizeContentNameTask(taskName));
  }
  @When("^I change the name of (.*?) for (.*?)$")
  public void editTask(String taskName, String taskNameUpdate) throws Throwable {
    taskPage.editTask(taskName);
    taskPage.inputNewName(taskNameUpdate);
    storyPage.clickOnCreateStory();
  }


  @Then("^The task should be change to (.*?)$")
  public void taskEditVerification(String taskName) throws Throwable {
    storyPage.clickOnExpandStory();
    assertEquals(1, taskPage.sizeContentNameTask(taskName));
  }

  @When("^I press add new task without name$")
  public void iPressAddNewTaskWithoutName() {
    taskPage.addTask("");
  }

  @Then("^I expect an alert message$")
  public void iExpectAnAlertMessage() {
    assertTrue(taskPage.alertDialog().contains("Cannot Save Task"));
    taskPage.clickButtonOk();
    storyPage.clickOnCreateStory();
  }

  /**
   * Method to clean up scenario.
   */
  @After
  public void logout() throws IOException {
    ApiProjects apiProjects = new ApiProjects();
    apiProjects.deleteAllProjects();
    home.logOut();

    driver.get("https://www.pivotaltracker.com/signin?signin_with_different=true");
  }
}
