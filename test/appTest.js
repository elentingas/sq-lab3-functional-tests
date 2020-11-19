var webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

describe( 'Works correct for inputs' , function(){
  this.timeout(5000);

    before(function(){
        driver.get("http://localhost:3000/create-company");
      });

    after(function(){
       driver.quit();
    });

    it( 'works correctly for all inputs', function(){
      let text;
      driver.sleep(5000);

      driver.wait(until.elementLocated(By.name('companyName')), 50000).then(function(){
          var companyName = driver.findElement(By.name('companyName'));
          companyName.click();
          companyName.sendKeys('Company name');
      });

      driver.wait(until.elementLocated(By.name('email')), 50000).then(function(){
        var email = driver.findElement(By.name('email'));
        email.click();
        email.sendKeys('email@gmgm.com');
      });

      driver.wait(until.elementLocated(By.name('contactPersonFirstName')), 50000).then(function(){
        var contactPersonFirstName = driver.findElement(By.name('contactPersonFirstName'));
        contactPersonFirstName.click();
        contactPersonFirstName.sendKeys('Tom');
      });

      driver.wait(until.elementLocated(By.name('contactPersonLastName')), 50000).then(function(){
        var contactPersonLastName = driver.findElement(By.name('contactPersonLastName'));
        contactPersonLastName.click();
        contactPersonLastName.sendKeys('Smith');
      });
      
      driver.wait(until.elementLocated(By.name('phone')), 50000).then(function(){
        var phone = driver.findElement(By.name('phone'));
        phone.click();
        phone.sendKeys('+45837859');
      });


      driver.wait(until.elementLocated(By.name('buttonSubmit')), 50000).then(function(){
        var buttonSubmit = driver.findElement(By.name('buttonSubmit'));
        buttonSubmit.click();
      });

      return driver.wait(until.elementLocated(By.id('resultText')), 50000).then(async function(){
        var resultText = driver.findElement(By.id('resultText'));
        text = await resultText.getText()
        assert.equal(text, 'Submitted');
      });

    });
  });