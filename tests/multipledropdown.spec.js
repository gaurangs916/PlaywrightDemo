const {test, expect} = require('@playwright/test');
test('Browser', async ({browser})=>  
{
  const context = await browser.newContext(); 
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.selectOption("#colors", ["blue", "red", "yellow"]);
  
  //Assertions
  //Check nos of options in dropdown
  await expect(page.locator("#colors option")).toHaveCount(7);

  //2- check num of options in dropdown- Approach 2 using JS ARRAY($$)
 // await expect((await page.$$("#colors option")).length).toBe(7); // this or below option also works
  const options = await page.$$("#colors option")
  await expect(options.length).toBe(7);

  await page.waitForTimeout(3000);

  //3- check presence of value in drop down
  // const content = await page.locator("#colors").textContent();
  // await expect(content.includes("Red")).toBeTruthy();

  //4 check presence of value in drop down- approach 2 using FOR LOOP



  });