const { test, expect } = require('@playwright/test');
const testData = require('../../fixtures/loginfixtures.json');
const { LoginPage } = require('../../pageObjects/login.po.js');

test.describe.configure({ timeout:60000 });
test.describe("Go to Page and Login", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto("https://www.motoworldnepal.com/");
    await login.logButton();
  });
  
  test("Login using all valid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.email, testData.validUser.password);
    await login.loggingButton();
  });

  test("Login using invalid email and password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.email, testData.invalidUser.password);
    await login.loggingButton();
  });

  test("Login using invalid Password and valid email", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidPass.email, testData.invalidPass.password);
    await login.loggingButton();
  });

  test("Login using invalid email and valid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.email, testData.invalidUser.password);
    await login.loggingButton();
  });

  test("Login using empty email and valid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.emptyUservalidPass.email, testData.emptyUservalidPass.password);
    await login.loggingButton();
  });

  test("Login using empty password and valid email", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.emptyPassvalidUser.email, testData.emptyPassvalidUser.password);
    await login.loggingButton();
  });

  test("Login using empty email and invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.emptyUserinvalidPass.email, testData.emptyUserinvalidPass.password);
    await login.loggingButton();
  });

  test("Login using empty password and invalid email", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.emptyPassinvalidUser.email, testData.emptyPassinvalidUser.password);
    await login.loggingButton();
  });

  test("Login using empty email and empty password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.emptyUserandPass.email, testData.emptyUserandPass.password);
    await login.loggingButton();
  });

});