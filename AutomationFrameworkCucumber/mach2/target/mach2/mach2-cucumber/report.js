$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/widget/tableEmployeesFilteringByDepartment.feature");
formatter.feature({
  "line": 2,
  "name": "Add Table Widget",
  "description": "",
  "id": "add-table-widget",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@table"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I go to Mach2 web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I set user and password",
  "keyword": "And "
});
formatter.match({
  "location": "TableFilteringByEmployee.iGoToMachWebPage()"
});
formatter.result({
  "duration": 7347705000,
  "status": "passed"
});
formatter.match({
  "location": "TableFilteringByEmployee.iSetUserAndPassword()"
});
formatter.result({
  "duration": 280049800,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Add Table Widget with Employees Personal Information",
  "description": "",
  "id": "add-table-widget;add-table-widget-with-employees-personal-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have a board",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Widget Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Table button on the Widget",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Open ERP service",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Option of Open ERP",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I set department name with \"Security test\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I save that option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I have a table with employees filtered for a \"Security test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TableFilteringByEmployee.iHaveABoard()"
});
formatter.result({
  "duration": 545754600,
  "status": "passed"
});
formatter.match({
  "location": "TableFilteringByEmployee.iClickOnWidgetButton()"
});
formatter.result({
  "duration": 374755700,
  "status": "passed"
});
formatter.match({
  "location": "TableFilteringByEmployee.iClickOnTableButtonOnTheWidget()"
});
formatter.result({
  "duration": 234913900,
  "status": "passed"
});
formatter.match({
  "location": "TableFilteringByEmployee.iClickOnOpenERPService()"
});
formatter.result({
  "duration": 227076800,
  "status": "passed"
});
formatter.match({
  "location": "TableFilteringByEmployee.iSelectOptionOfOpenERP()"
});
formatter.result({
  "duration": 430433400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Security test",
      "offset": 28
    }
  ],
  "location": "TableFilteringByEmployee.iSetDepartmentNameWith(String)"
});
formatter.result({
  "duration": 1143576100,
  "status": "passed"
});
formatter.match({
  "location": "TableFilteringByEmployee.iSaveThatOption()"
});
formatter.result({
  "duration": 300201700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Security test",
      "offset": 46
    }
  ],
  "location": "TableFilteringByEmployee.iHaveATableWithEmployeesFilteredForA(String)"
});
formatter.result({
  "duration": 142279210500,
  "error_message": "org.openqa.selenium.NoSuchElementException: Timed out after 100 seconds. Unable to locate the element\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027at02sela01\u0027, ip: \u002710.28.104.131\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:91)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat org.funjala.automation.web.pages.erp.search.OESearch.clickSearchArrow(OESearch.java:65)\r\n\tat org.funjala.automation.web.mach2.steps.widget.TableFilteringByEmployee.iHaveATableWithEmployeesFilteredForA(TableFilteringByEmployee.java:98)\r\n\tat ✽.Then I have a table with employees filtered for a \"Security test\"(src/test/resources/features/widget/tableEmployeesFilteringByDepartment.feature:17)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027oe_searchview_unfold_drawer\u0027]\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 14.03 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027at02sela01\u0027, ip: \u002710.28.104.131\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2\\scoped_dir2332_10515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2395d31c6827f364db8109687243a8f1\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027oe_searchview_unfold_drawer\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.access$001(AjaxElementLocator.java:41)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator$SlowLoadingElement.isLoaded(AjaxElementLocator.java:157)\r\n\tat org.openqa.selenium.support.ui.SlowLoadableComponent.get(SlowLoadableComponent.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:87)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat org.funjala.automation.web.pages.erp.search.OESearch.clickSearchArrow(OESearch.java:65)\r\n\tat org.funjala.automation.web.mach2.steps.widget.TableFilteringByEmployee.iHaveATableWithEmployeesFilteredForA(TableFilteringByEmployee.java:98)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:84)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\r\n",
  "status": "failed"
});
});