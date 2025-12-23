const {test, expect} = require('@playwright/test');
test('Browser', async ({browser})=>  
{
  const context = await browser.newContext(); 
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("[type='Email']").fill("gaurangs917@gmail.com");
  await page.locator("[type='password']").fill("Learning@1");
  await page.locator("[name='login']").click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:" View"}).click();
  await page.locator("//button[@class='btn btn-primary']").click();
  await page.locator("[routerlink='/dashboard/cart']").click();
  await expect(page.getByText("ZARA COAT 3")).toBeVisible();
  await page.getByRole("button",({name:"Checkout"})).click();
  await page.pause();
  await page.locator("select.ddl").nth(0).selectOption('05'); // selects number from dropdown 

  // await page.locator("//input[@name='coupon']").fill('1'); // enter coupon 
  // await page.locator("//button[@type='submit']").click(); // hit apply button
  // await expect(page.locator("//p[@class='mt-1 ng-star-inserted']")).toBeVisible(); // check for error message.

  await page.getByPlaceholder("Select Country").pressSequentially("ind");
  await page.getByRole("button",({name:"India"})).nth(1).click();   
  await page.locator(".btnn.action__submit.ng-star-inserted").click();
  await expect(page.locator(".hero-primary")).toBeVisible();
  
  await expect(page.locator("label.ng-star-inserted")).toBeVisible();
  await page.pause();
  await page.locator("//button[@routerlink='/dashboard/myorders']").click();
  await expect(page.locator("//tr[th[text()='6906479ef669d6cb0a3b0a86']]")).toBeVisible(); // using XPATH OR
  //await expect(page.locator("tr").filter({hasText: '6906479ef669d6cb0a3b0a86'})).toBeVisible(); // using playwright methods

});





