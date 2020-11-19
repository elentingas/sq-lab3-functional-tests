var webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

describe( 'Company name field' , function(){
  this.timeout(5000);

    before(function(){
        driver.get("http://localhost:3000/create-company");
    });

    beforeEach (function() {
      driver.navigate().refresh();
    })

    after(function(){
      //  driver.quit();
    });

    it( 'cannot be blank', function(){
      let text;
      driver.sleep(5000);

      driver.wait(until.elementLocated(By.name('companyName')), 50000).then(function(){
          var companyName = driver.findElement(By.name('companyName'));
          companyName.click();
          companyName.sendKeys('');
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
        assert.equal(text, 'Company name cannot be blank');
      });

    });
    
    it( 'should not be less than 3 characters', function(){
      let text;
      driver.sleep(5000);

      driver.wait(until.elementLocated(By.name('companyName')), 50000).then(function(){
          var companyName = driver.findElement(By.name('companyName'));
          companyName.click();
          companyName.sendKeys('ab');
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
        assert.equal(text, 'Company name is invalid');
      });

    });
    
    it( 'should not be more than 30 characters', function(){
      let text;
      driver.sleep(5000);

      driver.wait(until.elementLocated(By.name('companyName')), 50000).then(function(){
          var companyName = driver.findElement(By.name('companyName'));
          companyName.click();
          companyName.sendKeys('qwertyuiopqwertyuiopqwertyuiopq');
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
        assert.equal(text, 'Company name is invalid');
      });

    });
    
    it( 'should not contain special characters', function(){
      let text;
      driver.sleep(5000);

      driver.wait(until.elementLocated(By.name('companyName')), 50000).then(function(){
          var companyName = driver.findElement(By.name('companyName'));
          companyName.click();
          companyName.sendKeys('comp$%^$');
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
        assert.equal(text, 'Company name is invalid');
      });

    });
    
  });

  
describe( 'Email field' , function(){
  this.timeout(5000);

    before(function(){
        driver.get("http://localhost:3000/create-company");
      });

    beforeEach (function() {
      driver.navigate().refresh();
    })

    after(function(){
      //  driver.quit();
    });

    it( 'cannot be blank', function(){
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
        email.sendKeys('');
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
        assert.equal(text, 'Email cannot be blank');
      });

    });
    
    it( 'should contain @ character', function(){
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
        email.sendKeys('emailgmail.com');
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
        assert.equal(text, 'Email is invalid');
      });

    });
    
    it( 'should contain . character', function(){
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
        email.sendKeys('email@gmailcom');
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
        assert.equal(text, 'Email is invalid');
      });

    });
       
    it( 'validates correctly', function(){
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
        email.sendKeys('email@gmail.com');
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
  
