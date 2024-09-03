const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('//*[@id="username"]'); 
    this.passwordInput = page.locator('//*[@id="password"]');
    this.loginButton = page.locator('.stm_woo__signin');
    this.logginButton = page.locator('//*[@id="customer_login"]/div[1]/form/div/p[3]/span/input'); // Corrected selector
    this.searchInput = page.locator('.aws-search-field'); // Locator for the search input field
    this.searchButton = page.locator('//*[@id="stm_stm_hb_settings"]/div[2]/div/div/div[2]/div/div/div/form/div[2]'); // Locator for the search button (if applicable)
    this.posterImage = page.locator('.stm-product-inner .product_thumbnail img.attachment-woocommerce_thumbnail').first();
    this.addToCart = page.locator('//*[@id="product-26753"]/div[1]/div[2]/div/div[5]/form/button');
    this.qty = page.locator("//div[@class='quantity']/input[@class='input-text qty text']");
    this.update = page.locator('//*[@id="main"]/div/div[1]/div/div/div/div/div/form/table/tbody/tr[2]/td/input[1]');
    this.checkout = page.locator('//*[@id="main"]/div/div[1]/div/div/div/div/div/div[2]/div/div/div/div/div/a');
    this.logoutButton = page.locator('//*[@id="logged_in_user"]/a');
  }

  async logButton() {
    await this.loginButton.click();
  }

  async loggingButton(){
    await this.logginButton.click();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    //  await this.logginButton.click();
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter'); // Press Enter to submit the search form
    //await this.page.waitForLoadState("domcontentloaded"); // Wait for the page to load
  }

  async selectPoster() {
    await this.posterImage.click();
    //await this.page.waitForLoadState("domcontentloaded"); // Wait for the page to load
  }

  async addCart() {
    
    await this.addToCart.click();
    await this.page.waitForTimeout(1000); 
    //await this.page.waitForLoadState("domcontentloaded"); // Wait for the page to load
  }

  async addqty(term) {
    await this.page.waitForTimeout(3000);
    await this.qty.click();
    await this.qty.fill(term);
  }

  async updatefn() {
    await this.update.click();
    await this.page.waitForTimeout(3000);
    //await this.up.fill(term);
  }

  async checkoutfn() {
    await this.checkout.click();
    //await this.page.waitForTimeout(3000);
    //await this.page.waitForLoadState("domcontentloaded"); // Wait for the page to load
    //await this.page.waitForSelector('.checkout-element-selector', { state: 'visible', timeout: 120000 });
  }

  async logout() {
    await this.logoutButton.click();
    await this.page.waitForTimeout(3000);
    //await this.up.fill(term);
  }
}