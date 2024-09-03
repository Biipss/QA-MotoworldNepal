const { test, expect } = require('@playwright/test');

exports.CheckoutPage = class CheckoutPage{
    constructor(page){
        this.page=page;
        this.firstname='//*[@id="billing_first_name"]';
        this.lastname='//*[@id="billing_last_name"]';
        this.localaddress='//*[@id="billing_address_1"]';
        this.city='//*[@id="billing_city"]';
        this.email='//*[@id="billing_email"]';
        this.phonenumber='//*[@id="billing_phone"]';
        this.payment = page.locator('#payment_method_cod');
        this.info = page.locator('#terms');
        this.placeorder = page.locator('//*[@id="place_order"]');

        this.page.locator(this.payment).click();
        this.page.locator(this.info).click();
        this.page.locator(this.placeorder).click();
    }

    async verifyContact(firstname,lastname,localaddress,city,email,phonenumber){
        await this.page.locator(this.firstname).fill(firstname);
        await this.page.locator(this.lastname).fill(lastname);
        await this.page.locator(this.localaddress).fill(localaddress);
        await this.page.locator(this.city).fill(city);
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.phonenumber).fill(phonenumber);

        // await this.page.locator(this.payment).click();
        // await this.page.locator(this.info).click();
        // await this.page.locator(this.placeorder).click();
        //const verifyaddcontactSucess =  await this.page.locator(this.afteraddcontactPage);
        //await expect(page).toHaveTitle(/Moto World Nepal/);
    }
    async payMent() {
    
        await this.payment.click();
        await this.page.waitForTimeout(2000); 
        //await this.page.waitForLoadState("domcontentloaded"); // Wait for the page to load
      }
      async inFo() {
    
        await this.info.click();
        await this.page.waitForTimeout(2000); 
        //await this.page.waitForLoadState("domcontentloaded"); // Wait for the page to load
      }
      // async placeorder() {
    
      //   await this.placeorder.click();
      //   await this.page.waitForTimeout(2000); 
      //   //await this.page.waitForLoadState("domcontentloaded"); // Wait for the page to load
      // }
};