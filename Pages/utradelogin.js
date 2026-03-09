
const { expect } = require("allure-playwright");

exports.utradelogin =
  class utradelogin {
    constructor(page) {
      this.page = page;
      this.ucc = page.locator("//input[@placeholder='Please enter UCC / Registered Mobile No.']");
      this.loginbutton = page.locator("//button//span[text()='Log In']");
      this.advancetools = page.locator("//span[text()='Advanced Tools for Advanced Traders ']");
      this.IPOtext = page.locator("//span[text()='Your one-stop solution for all investment needs. ']");
      this.IPOtext1 = page.locator("//span[text()='Open a Free Demat Account. ₹0 Account Opening Fees* ']");
      this.privacy = page.locator("//a[text()='Privacy Policy']");
      this.terms = page.locator("//a[text()='Terms of Use']");
      this.createNow = page.locator("//span[text()='Create Now!']");
      this.logo = page.locator("//a//img[@class='vendor-icon chamfer']");
    }

    async navigate() {
      this.page.goto("https://www.utrade.shareindia.com/login?next=%2Fdashboard%2Ftrading");
    }

    async addUcc(ucc) {
      await this.ucc.fill(ucc);
    }

    async clicklogin() {
      await this.loginbutton.click();
      await expect(this.logo).toBeVisible();
      await this.createNow.click();
    }

    async verifyIpotext() {
      await expect(this.IPOtext1).toBeVisible();
      await expect(this.IPOtext).toBeVisible();
      await expect(this.advancetools).toBeVisible();
    }

    async verifyAllLinks() {
      await expect(this.privacy).toBeVisible();
      await expect(this.terms).toBeVisible();
      await expect(this.createNow).toBeVisible();
    }
  }