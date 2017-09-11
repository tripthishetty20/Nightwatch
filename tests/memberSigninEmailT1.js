module.exports = {
  'Sign in via email using template 1' : function(driver)
  {
    driver
    .url(driver.launch_url)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("//div[@class='welcome translucent']/div[2]/a[1]")
    .pause(1000)
    .click("//div[5]/div/div/div[2]/div/div/a[1]/div")
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[1]/input")
    .pause(1000)
    .setValue('//div[@class="desktop-container ng-scope"]/div/form/div[1]/input', driver.globals.userNames.memberEmail)
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[2]/input")
    .pause(1000)
    .setValue("//div[@class='desktop-container ng-scope']/div/form/div[2]/input", driver.globals.userNames.memberPassword)
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/button")
    .pause(4000)
    .assert.containsText("//div[@class='content-offer js-content-offer']/h1", 'Offers for You')
    .pause(2000)
    .saveScreenshot('screenshots/siginDashboard.png')
    pause(2000)
    .end();

  }

}
