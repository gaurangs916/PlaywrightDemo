// const { expect } = require("@playwright/test");

import{test, expect} from '@playwright/test';
test('Playwright special locators', async ({ page}) => {
 
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").click(); // or we can use .check() for checkbox & radiobutton.
  await page.getByLabel("Gender").selectOption("Female"); //selectoption is used when u r selecting options under select tag.
  await page.getByPlaceholder("Password").fill("abc123");
  await page.getByRole("button", {name: 'Submit'}).click();
  await page.getByText("Success! The Form has been submitted successfully!.");
  await page.getByRole("link", {name : "Shop"}).click();
  await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click(); // here we didnot used name of button as there is only 1 btn.


});