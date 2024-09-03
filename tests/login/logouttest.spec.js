const { test, expect } = require('@playwright/test');
const testData = require('../../fixtures/loginfixtures.json');
const { LoginPage } = require('../../pageObjects/login.po.js');

test.describe.configure({ timeout:60000 });
test.describe("Go to Page and Login", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto("https://www.motoworldnepal.com/");
    await login.logButton();
    await login.login(testData.validUser.email, testData.validUser.password);
    await login.loggingButton();
  });

  test('Successful Logout', async ({ page }) => {
    const login = new LoginPage(page);
    await login.logout();
  });

  test('Session Termination check', async ({ page }) => {
    const login = new LoginPage(page);
    await login.logout();
    await page.goto("https://www.motoworldnepal.com/");
    await page.pause();
  });

});