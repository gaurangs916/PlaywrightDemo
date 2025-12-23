const {test, expect , chromium}= require('@playwright/test');
test('single file upload and multiple file upload', async ({page})=> { 

 const browser= await chromium.launch();
 const context= await browser.newContext();
 const page1= await context.newPage();
 
 await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 await expect(page1).toHaveTitle("OrangeHRM");
 await page1.waitForTimeout(3000);
 
 const PagePromise = context.waitForEvent('page');  // need a promise before clicking the link
 await page1.locator("//a[text()='OrangeHRM, Inc']").click();

 const page2 = await PagePromise; // the promise is now returned into page2 variable once above link is clicked.
 await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");
 await page1.waitForTimeout(3000);



 

})