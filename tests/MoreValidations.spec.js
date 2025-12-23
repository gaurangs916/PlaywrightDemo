const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test('Popup Validations', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
 // await page.goto("http://www.google.com");
 // await page.goBack();
 // await page.goForward();
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  page.on('dialog', dialog => dialog.accept());
  await page.locator("#confirmbtn").click(); // when clicked on confirmbtn, control will go to line 12 & see if it accept or dismiss.
  await page.locator("#mousehover").hover(); // used to hover on page.
  const framesPage = page.frameLocator("#courses-iframe");
  await framesPage.locator("li a[href*='lifetime-access']:visible").click();

  const textCheck = await framesPage.locator(".text h2").textContent(); // this is just to get no of subscribes, but for that first go the locator using .text h2.
  console.log(textCheck.split(" ")[1]); //split it using space & it is at loc 1.

});

test.only('visual', async({page})=>
{
  await page.goto("https://google.com/");
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
}
);