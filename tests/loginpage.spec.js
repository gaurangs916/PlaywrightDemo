

const {test, expect}= require('@playwright/test')
test('login', async ({page})=> {
//const email = "gaurangs917@gmail.com";
//const password = "Learning@1";
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("//input[@id='userEmail']").fill("gaurangs917@gmail.com");
await page.locator("//input[@id='userPassword']").fill("Learning@1");
await page.waitForTimeout(3000);
await page.locator("//input[@class='btn btn-block login-btn']").click();

})