const {test, expect} = require('@playwright/test');
test('Handle checkboxes', async ({browser})=>  
{
  const context = await browser.newContext(); 
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");

  //single checkbox

  await page.locator("#sunday").check();
  await expect(page.locator("#sunday")).toBeChecked(); 

  // await expect(page.locator("#sunday").isChecked()).toBeTruthy(); // either of them can be used to check assertion.
  //await page.waitForTimeout(5000);

  // Multiple checkboxes

  const checkboxlocator=[
       page.locator("#sunday"),
       page.locator("#monday"),
       page.locator("#tuesday")
  ];
  for(const locator of checkboxlocator) // locator will get 1st locator of 1st element 
  {
    await locator.check();  //locator(locator) will find element & perform check operationn.
  }
await page.waitForTimeout(5000);
  
   for(const locator of checkboxlocator) // locator will get 1st locator of 1st element 
  {
    if(await locator.check().ischecked) // this or only below line also works.
    {
    await locator.uncheck();  //locator(locator) will find element & perform check operationn.
    }
  }
await page.waitForTimeout(5000);
  });