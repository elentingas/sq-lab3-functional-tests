var webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

describe( '>>>>>>>>>>>>>>>> Company name field' , function(){
  this.timeout(12000);

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

  
describe( '>>>>>>>>>>>>>>>> Email field' , function(){
  this.timeout(12000);

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
  

describe( '>>>>>>>>>>>>>>>> Contact person first name field' , function(){
  this.timeout(12000);

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
        email.sendKeys('email@gmail.com');
      });

      driver.wait(until.elementLocated(By.name('contactPersonFirstName')), 50000).then(function(){
        var contactPersonFirstName = driver.findElement(By.name('contactPersonFirstName'));
        contactPersonFirstName.click();
        contactPersonFirstName.sendKeys('');
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
        assert.equal(text, 'Contact person first name cannot be blank');
      });

    });
    
    it( 'should not contain special characters', function(){
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
        contactPersonFirstName.sendKeys('name$%£');
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
        assert.equal(text, 'Contact person first name is invalid');
      });

    });
    
    it( 'should not contain numbers', function(){
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
        contactPersonFirstName.sendKeys('name753');
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
        assert.equal(text, 'Contact person first name is invalid');
      });

    });
    
  });
  

describe( '>>>>>>>>>>>>>>>> Contact person last name field' , function(){
  this.timeout(12000);

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
        contactPersonLastName.sendKeys('');
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
        assert.equal(text, 'Contact person last name cannot be blank');
      });

    });
    
    it( 'should not contain special characters', function(){
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
        contactPersonLastName.sendKeys('name$%£');
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
        assert.equal(text, 'Contact person last name is invalid');
      });

    });
    
    it( 'should not contain numbers', function(){
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
        contactPersonLastName.sendKeys('name753');
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
        assert.equal(text, 'Contact person last name is invalid');
      });

    });
    
  });


describe( '>>>>>>>>>>>>>>>> Phone number field' , function(){
  this.timeout(12000);

    before(function(){
        driver.get("http://localhost:3000/create-company");
      });

    beforeEach (function() {
      driver.navigate().refresh();
    })

    after(function(){
       driver.quit();
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
        phone.sendKeys('');
      });


      driver.wait(until.elementLocated(By.name('buttonSubmit')), 50000).then(function(){
        var buttonSubmit = driver.findElement(By.name('buttonSubmit'));
        buttonSubmit.click();
      });

      return driver.wait(until.elementLocated(By.id('resultText')), 50000).then(async function(){
        var resultText = driver.findElement(By.id('resultText'));
        text = await resultText.getText()
        assert.equal(text, 'Phone number cannot be blank');
      });

    });
    
    it( 'should not contain letters', function(){
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
        phone.sendKeys('mjrerjkrl');
      });


      driver.wait(until.elementLocated(By.name('buttonSubmit')), 50000).then(function(){
        var buttonSubmit = driver.findElement(By.name('buttonSubmit'));
        buttonSubmit.click();
      });

      return driver.wait(until.elementLocated(By.id('resultText')), 50000).then(async function(){
        var resultText = driver.findElement(By.id('resultText'));
        text = await resultText.getText()
        assert.equal(text, 'Phone number is invalid');
      });

    });
    
    it( 'should not be less than 3 characters', function(){
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
        phone.sendKeys('12');
      });


      driver.wait(until.elementLocated(By.name('buttonSubmit')), 50000).then(function(){
        var buttonSubmit = driver.findElement(By.name('buttonSubmit'));
        buttonSubmit.click();
      });

      return driver.wait(until.elementLocated(By.id('resultText')), 50000).then(async function(){
        var resultText = driver.findElement(By.id('resultText'));
        text = await resultText.getText()
        assert.equal(text, 'Phone number is invalid');
      });

    });
    
    it( 'should not be more than 25 characters', function(){
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
        phone.sendKeys('12345678912345678912345678');
      });


      driver.wait(until.elementLocated(By.name('buttonSubmit')), 50000).then(function(){
        var buttonSubmit = driver.findElement(By.name('buttonSubmit'));
        buttonSubmit.click();
      });

      return driver.wait(until.elementLocated(By.id('resultText')), 50000).then(async function(){
        var resultText = driver.findElement(By.id('resultText'));
        text = await resultText.getText()
        assert.equal(text, 'Phone number is invalid');
      });

    });
    
    it( 'should not contain special characters except +', function(){
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
        phone.sendKeys('+$%^23365434');
      });


      driver.wait(until.elementLocated(By.name('buttonSubmit')), 50000).then(function(){
        var buttonSubmit = driver.findElement(By.name('buttonSubmit'));
        buttonSubmit.click();
      });

      return driver.wait(until.elementLocated(By.id('resultText')), 50000).then(async function(){
        var resultText = driver.findElement(By.id('resultText'));
        text = await resultText.getText()
        assert.equal(text, 'Phone number is invalid');
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
        phone.sendKeys('+372 233434');
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
  
