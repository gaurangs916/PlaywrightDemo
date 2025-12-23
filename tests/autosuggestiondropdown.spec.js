const {test, expect} = require('@playwright/test');

test('Auto Suggest dropdown', async ({page})=>  
{
 await page.goto("https://www.redbus.in/")
 await page.locator("//div[text()='From']").click();
 await page.keyboard.type("Delhi");
 await page.pause();
 const fromcityoptions = await page.$$("//div[@class='searchCategory___993266']");

 for(let option of fromcityoptions)
 {
  const value = await option.textContent("//div[@class='searchCategory___993266']"); ////div[@aria-label='ISBT Kashmiri Gate, Delhi']
  if(value.includes('ISBT Kashmiri Gate, Delhi'))
  {
    await option.click();
    break;
  }

 }
 // await page.waitForTimeout(2000);
});