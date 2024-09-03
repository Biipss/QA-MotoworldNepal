const { test, expect } = require('@playwright/test');
const testData = require('../../fixtures/loginfixtures.json');
// const testData1 = require('../../pageObject/login.po.js');
// const { LoginPage } = require('../../pageObjects/login.po');

//To check if the page title contains "Instagram"
test.beforeEach('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Instagram/);
});


//To check if the login button is visible
test('loginbutton', async ({ page }) => {
  // await page.goto('https://www.instagram.com/');

  // Check if the login button is visible
  const loginButton = await page.locator('button[type="submit"]');
  await expect(loginButton).toBeVisible();
});


//To fil in username and password and click the login button
test.only('loginbuttonclick', async ({ page }) => {
  // await page.goto('https://www.instagram.com/');

  // Fill in the username and password fields
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'insta');

  // Click the login button
  await page.locator('button[type="submit"]').click();

  // Expect the title to contain "Instagram" after logging in
  await expect(page).toHaveTitle(/Instagram/);
});


//To check if the username input field is available
test('email input is visible', async ({ page }) => {
  // await page.goto('https://www.instagram.com/');

  // Check if the username input field is visible
  const usernameInput = await page.locator('input[name="username"]');
  await expect(usernameInput).toBeVisible();
});


//To check if the "Forgot password" link is visible
test('forgot password link is visible', async ({ page }) => {
    // await page.goto('https://www.instagram.com/');
  
    // Check if the "Forgot password?" link is visible
    const forgotPasswordLink = await page.locator('text=Forgot password?');
    await expect(forgotPasswordLink).toBeVisible();
  });
  

  test.describe('Valid login test', () =>{
    test.only('loginbuttonclick', async ({ page }) => {
      // await page.goto('https://www.instagram.com/');
    
      // Fill in the username and password fields
      await page.fill('input[name="username"]', 'testData.validUser.userName');
      await page.fill('input[name="password"]', 'testData.validPassword.password');
    
      // Click the login button
      await page.locator('button[type="submit"]').click();
    
      // Expect the title to contain "Instagram" after logging in
      await expect(page).toHaveTitle(/Instagram/);
    });
  });


//   test.describe('Valid login tests',() => {
//     test('Login using valid username and password', async ({page} ) => {
//         const login = new LoginPage(page);
//         await login.login(testData.validUser.userName, testData.validUser.password);
//     });
// });