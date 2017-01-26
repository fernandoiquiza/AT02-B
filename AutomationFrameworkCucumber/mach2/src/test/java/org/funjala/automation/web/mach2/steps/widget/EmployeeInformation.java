package org.funjala.automation.web.mach2.steps.widget;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.funjala.automation.web.common.drivers.Driver;
import org.funjala.automation.web.pages.erp.home.OEHomePage;
import org.funjala.automation.web.pages.erp.login.OELoginPage;
import org.funjala.automation.web.pages.erp.search.OESearch;
import org.funjala.automation.web.pages.mach2.login.LoginPage;
import org.funjala.automation.web.pages.mach2.menu.TopMenuPage;
import org.funjala.automation.web.pages.mach2.sidebar.SideBarPage;
import org.funjala.automation.web.pages.mach2.widget.WidgetPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.IOException;
import java.util.List;

import static org.testng.Assert.assertEquals;

/**
 * Created by Angelica Rodriguez on 1/21/2017.
 */
public class EmployeeInformation {
    WebDriver driver;
    TopMenuPage topMenuPage;
    LoginPage loginPage;
    WidgetPage widget;

    @Given("^I am on Mach2 Webpage$")
    public void iAmOnMachWebpage() throws IOException {
        driver = Driver.getDriver().openBrowser(Driver.Mach2);
        loginPage = new LoginPage(driver);
    }

    @And("^I fill username or Mail textfield as \"([^\"]*)\"$")
    public void iFillUsernameOrMailTextfieldAs(String userName) {
        loginPage.setUsernameTextField(userName);
    }

    @And("^I fill Password textfield as \"([^\"]*)\" and press Submit button$")
    public void iFillPasswordTextfieldAsAndPressSubmitButton(String password) {
        loginPage.setPasswordTextField(password);
        topMenuPage = loginPage.clickNextButton();
    }

    @Given("^I have board created$")
    public void iHaveABoardCreated() {
        topMenuPage.addNewBoard();
    }

    @And("^I click on Widget Button$")
    public void iClickOnWidgetButton() {
        widget = topMenuPage.addNewWidget();
    }

    @When("^I click on \"([^\"]*)\" Button on Widget displayed$")
    public void iClickOnTableButtonOnWidgetDisplayed(String widgetType) {
        widget.addWidget(widgetType);
    }

    @And("^I click on \"([^\"]*)\" services$")
    public void iClickOnOpenERPService(String service) {
        widget.clickOnService(service);
    }

    @And("^I select an Option of OpenERP$")
    public void iSelectAnOptionOfOpenERP() {
        widget.selectErpOption();
    }



    @And("^In the option Divisions I select \"([^\"]*)\"$")
    public void iFillDivisionNameOnTextfieldAs(String divisionName) {
        widget.setDivisionName(divisionName);
    }


    @And("^In the option Manager \"([^\"]*)\"$")
    public void iFillManagerNameOnTextfieldAs(String managerName) {
        widget.setManagerName(managerName);
    }

    @And("^I click on save Button$")
    public void iClickOnSaveButton() {
        widget.clickSaveButton();
    }

    @Then("^I have a table widget with \"([^\"]*)\" Division and \"([^\"]*)\" Manager filled$")
    public void iHaveATableWidgetWithFilled(String division, String managerName) throws IOException, InterruptedException {
        int actualResult = widget.verifyCant(managerName);
        System.out.println(">>>>>>>>>>>>>>>>>>>");
        System.out.println(actualResult);
        System.out.println(">>>>>>>>>>>>>>>>>>>");
        SideBarPage sideBarPage = topMenuPage.goToSidebar();
//        sideBarPage.deleteAllBoards();

        //Login OPEN ERP

        driver = Driver.getDriver().openBrowser(Driver.OpenERP);
        OELoginPage loginERP = new OELoginPage(driver);
        loginERP.setUserName("jose6");
        loginERP.setPassword("jose6");
        OEHomePage homeERP = loginERP.clickBtnSubmit();

        //Go to Human Resources

        homeERP.clickHumanResources();
        OESearch searchERP = homeERP.oeSearch();

        //Go to Search
        searchERP.clickSearchArrow();
        searchERP.clickAdvancedSearch();
        searchERP.foundAndClickAdvancedFilterOptions("manager", "is equal to", managerName);
        searchERP.clickAddAConditionButton();
        searchERP.foundAndClickAdvancedFilterOptions("division", "is equal to", division);
        searchERP.clickApplySearch();
        searchERP.clickSwitchList();
        searchERP.clickNumberElement();
        searchERP.clickQuantityButton();
        searchERP.clickUnlimitedOption();
        List<WebElement> listManager = searchERP.listOfAllElements();

        assertEquals(listManager.size(), actualResult);
    }

}