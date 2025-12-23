const{test, expect}  = require('@playwright/test');
test('Amazon Page screenshot', async({page})=>{
 
  await page.goto("https://www.amazon.in/")
  await page.screenshot({path:'tests/Screenshots/'+"HomePage.png"}); //to save screenshot 
})

test('Amazon Full Page screenshot', async({page})=>{

  await page.goto("https://www.myntra.com/")
  await page.waitForTimeout(10000);
  await page.screenshot({path:'tests/Screenshots/'+"FullPage.png", fullPage:true})
})

test.only('Amazon Element screenshot', async({page})=>{
await page.goto("https://www.amazon.in/")
const element = await page.locator("//h5[text()='Amazon Web Services']").scrollIntoViewIfNeeded();
await element.screenshot({path:'tests/Screenshots/'+"element.png"})
  
})