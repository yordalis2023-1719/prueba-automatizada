const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const { describe, it, before, after } = require('mocha');
const assert = require('assert');
const { saveScreenshot } = require('./utils'); // <-- Importa la función

let driver;

describe('Prueba automatizada de Google', function () {
  this.timeout(60000);

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('Debería realizar una búsqueda de "Selenium WebDriver"', async () => {
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.RETURN);
    await driver.wait(until.titleContains('Selenium WebDriver'), 10000);
    const title = await driver.getTitle();
    assert.ok(title.includes('Selenium WebDriver'));
    await saveScreenshot(driver, 'busqueda_selenium.png');
  });

  it('Debería realizar una búsqueda de "automatización con JavaScript"', async () => {
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('automatización con JavaScript', Key.RETURN);
    await driver.wait(until.titleContains('automatización con JavaScript'), 10000);
    const title = await driver.getTitle();
    assert.ok(title.includes('automatización con JavaScript'));
    await saveScreenshot(driver, 'busqueda_automatizacion.png');
  });

  it('Debería verificar que el título de la página contiene "Google"', async () => {
    await driver.get('https://www.google.com');
    const title = await driver.getTitle();
    assert.ok(title.includes('Google'));
    await saveScreenshot(driver, 'titulo_google.png');
  });
});




