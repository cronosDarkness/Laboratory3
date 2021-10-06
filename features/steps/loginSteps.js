const { When, Then, Given } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

 
Given('I am on the {string} page', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    this.driver = new Builder()
    .forBrowser('chrome')
    .build();
    await this.driver.get(`https://the-internet.herokuapp.com/${string}`);
    });

When('I login with {string} and {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    this.driver.findElement(By.id("username")).sendKeys(string);
    this.driver.findElement(By.id("password")).sendKeys(string2);
    return 'pending';  
  });

Then('I should see a message saying {string}', function (string) 
{
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

