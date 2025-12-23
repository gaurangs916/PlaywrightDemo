const { test, expect } = require('@playwright/test')
test('Assertions', async ({ page }) => {

  await page.goto("https://demo.nopcommerce.com/register");
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
  //await expect(page).toHaveTitle("nopCommerce demo store. Register");
  //await expect (page.locator("//div[@class='header-logo']")).toBeVisible();
  await expect(page.locator("//input[@class='search-box-text ui-autocomplete-input']")).toBeEnabled();
  await page.waitForTimeout(3000);
  // const radiobutton = await page.locator("//input[@id='gender-male']").click();
  // await expect(radiobutton).toBeChecked();
  await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  await page.waitForTimeout(3000);
  await expect(page.locator("//button[@id='register-button']")).toHaveAttribute('type', 'submit');
  await expect(page.locator(".page-title")).toHaveText("Register");
  await expect(page.locator(".page-title")).toContainText("Reg");
  const box = await page.locator("//input[@type='email' and @name='Email']")
  await box.fill("gaurangs915@gmail.com");
  await expect(box).toHaveValue("gaurangs915@gmail.com");


})