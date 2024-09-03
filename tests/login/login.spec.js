const { test, expect } = require('@playwright/test');
const testData = require('../../fixtures/loginfixtures.json');
const { LoginPage } = require('../../pageObjects/login.po.js');

test.beforeEach('has title', async ({ page }) => {
  await page.goto('https://motoworldnepal.com/', { waitUntil: 'load', timeout: 60000 }); // Increase timeout here
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Moto World Nepal/);
});

test('login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.logButton();
  await login.login(testData.validUser.userName, testData.validUser.password);
  await login.loggingButton();
  // Expect the title to contain "Moto World Nepal" after logging in
  await expect(page).toHaveTitle(/Moto World Nepal/);
});

test.only('Select a poster item after search', async ({ page }) => {
  page.setDefaultTimeout(60000); // Increase default timeout

  await page.goto('https://motoworldnepal.com/', { waitUntil: 'load', timeout: 60000 }); // Increase timeout here

  const login = new LoginPage(page);
  await login.logButton();
  await login.login(testData.validUser.email, testData.validUser.password);
  await login.loggingButton();

  // Expect the title to contain "Moto World Nepal" after logging in
  await expect(page).toHaveTitle(/Moto World Nepal/);
  await login.search(testData.search.searchTerm); 
  await login.selectPoster(); 
  await login.addCart();
  await login.addqty(testData.filler.fillTerm);
  await login.updatefn();
  await login.checkoutfn();
  await page.goto('https://motoworldnepal.com/', { waitUntil: 'load', timeout: 60000 }); // Increase timeout here
  await login.logout();
  await page.pause();
});
