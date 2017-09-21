module.exports = {
  'Creating an activity' : function(driver)
  {
    driver
    .url(driver.globals.userNames.adminURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("//input[@id='admin_email']")
    .pause(2000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.adminEmail)
    .pause(2000)
    .click("//input[@id='admin_password']")
    .pause(2000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(2000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(4000)
    //.assert.visible("//h1[@class='pull-left']")
    .click("//a[@class='test-nav-hubs']")
    .pause(4000)
    .assert.containsText("//h1[@class='pull-left']", "Mission Hubs")
    .click("//a[@class='btn btn-default btn-icon-add test-hub-new']")
    .pause(2000)
    .click("//div[@id='new_mission_hub']/div/div/div[2]/div/div/input")
    .pause(2000)
    .setValue("//div[@id='new_mission_hub']/div/div/div[2]/div/div/input", "Sharing Tools")
    .pause(2000)
    .click("//div[@class='modal-footer ng-scope']/button")
    .pause(2000)
    .click("//li[@class='q-builder-click test-hub-new-activity']")
    .pause(2000)
    .click("//a[@class='rowclick test-hub-structure-item-link ng-binding']")
    .pause(2000)
    .click("//button[@class='btn-edit']")
    .pause(2000)
    .clearValue("//div[@class='ng-isolate-scope ng-pristine ng-valid']/input")
    .pause(2000)
    .setValue("//div[@class='ng-isolate-scope ng-pristine ng-valid']/input", "Sharing Tools Activity")
    .pause(2000)
    .click("//textarea[@class='mission-page-title test-activity-name ng-pristine ng-valid placeholder']")
    .pause(2000)
    .setValue("//textarea[@class='mission-page-title test-activity-name ng-pristine ng-valid placeholder']", "Sharing Tool Activity name")
    .pause(2000)
    .click("//textarea[@class='q-field q-field-medium test-activity-tagline ng-pristine ng-valid placeholder']")
    .pause(2000)
    .setValue("//textarea[@class='q-field q-field-medium test-activity-tagline ng-pristine ng-valid placeholder']", "Mission offer")
    .pause(2000)
    .click("//input[@id='switch_cb_activity.page.show_image']")
    .pause(2000)
    .click("//input[@id='switch_cb_activity.page.show_details']")
    .pause(2000)
    .click("//sml-medium-editor[@ng-model='activity.page.description']/div/div[1]")
    .pause(2000)
    .setValue("//sml-medium-editor[@ng-model='activity.page.description']/div/div[1]", "Mission Details")
    .pause(2000)
    .click("//sml-medium-editor[@ng-model='activity.page.details']/div/div[1]")
    .pause(2000)
    .setValue("//sml-medium-editor[@ng-model='activity.page.details']/div/div[1]", "Description of the product")
    .pause(2000)
    .setValue("//input[@class='js-description-image-field']", "C:/Users/Tripthi/Pictures/Brandconnect.jpe")
    .pause(4000)
    .click("//input[@id='switch_cb_activity.page.show_content_url']")
    .pause(2000)
    .click("//div[@ng-show='activity.page.show_content_url']/input")
    .pause(2000)
    .setValue("//div[@ng-show='activity.page.show_content_url']/input", "https://www.youtube.com/watch?v=_UR-l3QI2nE")
    .pause(2000)
    .click("//input[@ng-model='activity.goal']")
    .pause(2000)
    .setValue("//input[@ng-model='activity.goal']", "50")
    .pause(2000)
    .assert.visible("//div[@ng-show='activity.page.show_content_url']/input")
    .pause(2000)
    .click("//input[@id='switch_cb_activity.show_badge']")
    .pause(2000)
    .setValue("//input[@class='js-badge-image-field']", "C:/Users/Tripthi/Pictures/Brandconnect.jpe")
    .pause(2000)
    .click("//textarea[@ng-model='activity.badge.name']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.badge.name']", "Badge name goes here")
    .click("//input[@id='switch_cb_rating']")
    .pause(2000)
    .click("//input[@id='switch_cb_facebook']")
    .pause(2000)
    .click("//input[@id='switch_cb_facebook_page']")
    .pause(2000)
    .execute('scrollTo(1000,1000)')
    .pause(2000)
    .click("//input[@id='switch_cb_twitter']")
    .pause(2000)
    .click("//input[@id='switch_cb_face2face']")
    .pause(2000)
    .click("//input[@id='switch_cb_upload_photo_facebook']")
    .pause(2000)
    .click("//input[@id='switch_cb_upload_photo_fb_page']")
    .pause(2000)
    .click("//input[@id='switch_cb_upload_photo_twitter']")
    .pause(2000)
    .click("//input[@id='switch_cb_blog']")
    .pause(2000)
    .click("//input[@id='switch_cb_youtube']")
    .pause(2000)
    .click("//input[@id='switch_cb_pinterest']")
    .pause(2000)
    .click("//input[@id='switch_cb_instagram']")
    .pause(2000)
    .click("//input[@id='switch_cb_brand_connect']")
    .pause(2000)
    .click("//input[@id='switch_cb_retail_review']")
    .pause(2000)
    .click("//input[@id='switch_cb_email_group_invite']")
    .pause(2000)
    .execute('scrollTo(1700,1700)')
    .pause(2000)
    .click("//input[@id='switch_cb_bazaarvoice']")
    .pause(2000)
    .click("//input[@id='switch_cb_share_link']")
    .pause(2000)
    .click("//input[@ng-model='activity.facebook.seed_url']")
    .pause(2000)
    .setValue("//input[@ng-model='activity.facebook.seed_url']", "https://www.socialmedialink.com/")
    .pause(2000)
    .click("//textarea[@ng-model='activity.facebook.suggested_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.facebook.suggested_phrase']", "Faceook Suggested Phrase")
    .pause(2000)
    .click("//input[@ng-model='activity.facebook_page.seed_url']")
    .pause(2000)
    .setValue("//input[@ng-model='activity.facebook_page.seed_url']", "https://www.socialmedialink.com/")
    .pause(2000)
    .click("//textarea[@ng-model='activity.facebook_page.suggested_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.facebook_page.suggested_phrase']", "Facebook page Suggested Phrase")
    .pause(2000)
    .click("//input[@ng-model='activity.twitter.seed_url']")
    .pause(2000)
    .setValue("//input[@ng-model='activity.twitter.seed_url']", "https://www.socialmedialink.com/")
    .click("//textarea[@ng-model='activity.twitter.seed_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.twitter.seed_phrase']", "Twitter page Seed Phrase")
    .pause(2000)
    .pause(2000)
    .click("//textarea[@ng-model='activity.twitter.suggested_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.twitter.suggested_phrase']", "Twitter page Suggested Phrase")
    .pause(2000)
    .click("//textarea[@ng-model='activity.upload_photo_facebook.suggested_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.upload_photo_facebook.suggested_phrase']", "Upload photo to Facebook suggested phrase")
    .pause(2000)
    .click("//textarea[@ng-model='activity.upload_photo_fb_page.suggested_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.upload_photo_fb_page.suggested_phrase']", "Upload photo to Facebook page suggested phrase")
    .pause(2000)
    .click("//textarea[@ng-model='activity.upload_photo_twitter.seed_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.upload_photo_twitter.seed_phrase']", "Upload photo to Twitter seed phrase")
    .pause(2000)
    .click("//textarea[@ng-model='activity.upload_photo_twitter.suggested_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.upload_photo_twitter.suggested_phrase']", "Upload photo to Twitter suggested phrase")
    .pause(2000)
    .click("//input[@ng-model='activity.pinterest.seed_url']")
    .pause(2000)
    .setValue("//input[@ng-model='activity.pinterest.seed_url']", "https://www.socialmedialink.com/")
    .pause(2000)
    .setValue("//input[@class='js-pinterest-image']", "C:/Users/Tripthi/Pictures/Brandconnect.jpe")
    .pause(4000)
    .click("//textarea[@ng-model='activity.pinterest.suggested_phrase']")
    .pause(3000)
    .setValue("//textarea[@ng-model='activity.pinterest.suggested_phrase']", "Description of the Pinterest Pin")
    .pause(2000)
    .assert.visible("//textarea[@ng-model='activity.instagram.seed_phrase']")
    .pause(3000)
    .click("//textarea[@ng-model='activity.instagram.seed_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.instagram.seed_phrase']", "Instagram Instructions")
    .pause(2000)
    .execute('scrollTo(4200,4200)')
    .pause(2000)
    .click("//div[@id='s2id_topic-search']")
    .pause(2000)
    .click("//ul[@id='select2-results-3']/li[1]")
    .pause(2000)
    .click("//textarea[@ng-model='activity.retail_review.seed_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.retail_review.seed_phrase']", "Instructions for Retail Review")
    .pause(2000)
    .click("//textarea[@id='custom_landing_page_url']")
    .pause(2000)
    .setValue("//textarea[@id='custom_landing_page_url']", "https://www.socialmedialink.com/")
    .pause(2000)
    .click("//textarea[@ng-model='activity.bazaarvoice.bazaarvoice_client_token']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.bazaarvoice.bazaarvoice_client_token']", "ca8YG3gyZph6ZaZxUxm8ep2pD9ZDJE3jneBRs89WwnZiA")
    .pause(2000)
    .click("//textarea[@ng-model='activity.bazaarvoice.bazaarvoice_encoding_key']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.bazaarvoice.bazaarvoice_encoding_key']", "6VgQ5XhdqOaVnj2FlvjqjMTxc")
    .pause(2000)
    .click("//textarea[@ng-model='activity.bazaarvoice.bazaarvoice_product_id']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.bazaarvoice.bazaarvoice_product_id']", "Product10")
    .pause(2000)
    .click("//textarea[@ng-model='activity.bazaarvoice.seed_phrase']")
    .pause(2000)
    .setValue("//textarea[@ng-model='activity.bazaarvoice.seed_phrase']", "Instructions for member")
    .pause(2000)
    .click("//input[@ng-model='activity.share_link.seed_url']")
    .pause(2000)
    .setValue("//input[@ng-model='activity.share_link.seed_url']", "https://www.socialmedialink.com/")
    .pause(2000)
    .execute('scrollTo(1750,1750)')
    .assert.visible("//button[@ng-click='save()']")
    .pause(2000)
    .click("//button[@ng-click='save()']")
    .pause(1000)
    .saveScreenshot('screenshots/confirmCreateActivity1.png')
    .pause(1000)
    .execute('scrollTo(4000,4000)')
    .saveScreenshot('screenshots/confirmCreateActivity2.png')
    .pause(1000)
    .execute('scrollTo(6000,6000)')
    .saveScreenshot('screenshots/confirmCreateActivity3.png')
    .pause(2000)
    .execute('scrollTo(0,0)')
    .pause(2000)
    .click("//div[@class='topbar']/ul/li[3]")
    .pause(4000)
    .click("//nav[@class='survey-navbar affix-top']/ul/li[3]")
    .pause(4000)
    .click("//a[@class='mlogic-link test-hub-logic-item-view ng-scope']")
    .pause(1000)
    .saveScreenshot('screenshots/missionLogicPage.png')
    .pause(2000)
    .click("//input[@id='date-start']")
    .pause(2000)
    .click("//td[@class='active day']/preceding-sibling::td[@class='day'][1]")
    .pause(2000)
    .click("//button[@class='mlogic-add-group']")
    .pause(2000)
    .click("//span[text()='All Members']")
    .pause(2000)
    .click("//button[@class='btn btn-primary test-hub-logic-item-group-save']")
    .pause(2000)
    .click("(//span[@class='control-checkbox control-checkbox-dark'])[1]")
    .pause(2000)
    .click("(//label[@class='control-checkbox control-checkbox-primary'])[1]")
    .pause(2000)
    .click("//input[@class='form-control ng-pristine ng-valid ng-valid-number']")
    .pause(2000)
    .setValue("//input[@class='form-control ng-pristine ng-valid ng-valid-number']","1")
    .pause(2000)
    .click("//label[@class='switcher ng-scope']")
    .pause(2000)
    .click("//button[@class='btn btn-default pull-right test-hub-logic-save']")
    .pause(2000)
    .saveScreenshot("screenshots/missionLogicSaved.png")
    .assert.visible("//button[@class='btn btn-default pull-right test-hub-logic-save']")
    .pause(5000)
    .end();
  }



}
