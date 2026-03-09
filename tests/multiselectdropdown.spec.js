const {test, expect} = require('@playwright/test');
test('Bkeyboard actions', async ({page})=>  
{ 
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.selectOption("//select[@id='colors']",['Red','Blue']); // red,blue I want to select so we have put it in array.
  //await page.$$("//select[@id='colors']//option");
  let content= await page.locator("//select[@id='colors']").textContent(); //textContent() is used to read all visible text inside an element, so you can verify whether specific options like Red or Blue exist in the dropdown.

  await expect(content.includes("Red")).toBeTruthy(); // .includes will check if it is checked.
  await page.waitForTimeout(3000);
  
})