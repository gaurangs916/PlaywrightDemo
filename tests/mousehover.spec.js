const {test, expect} = require('@playwright/test');

test('mousehover', async ({page})=>  
{ 
await page.goto("https://www.myntra.com/");
await page.locator("//div[@class='desktop-navLink']//a[text()='Kids']").hover();
await page.waitForTimeout(3000);

})