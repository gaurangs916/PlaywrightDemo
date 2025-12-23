const {test, expect} = require('@playwright/test');

test.only('dynamic dropdown', async ({page})=>  
{ 
 await page.goto("https://www.amazon.in/");
 //await page.waitForTimeout(3000);
 await page.locator("//input[@placeholder='Search Amazon.in']").fill("mobile under 20000");
 await page.waitForTimeout(3000);
 
 //to prinnt all options
 let option=await page.$$("//div[@role='row']");
 for(let op of option)
 {
  let value = await op.textContent();
  console.log(value);
 }
  await page.waitForTimeout(3000);
})

await page.goto("https://www.makemytrip.com/", {waitUntil:'networkidle'});
await page.locator("//span[@data-cy='closeModal']").click();
await page.locator("//input[@data-cy='fromCity']").click();
//let options = await page.$$("//ul//li[@role='option']");
let options = await page.$$("//ul//li[@role='option']//p[@class='font14 appendBottom5 blackText']");
 
//to prinnt all options
for(let op of options)
{
  let value = await op.textContent();
  console.log(value);
}
// await page.waitForTimeout(3000);


// const{test, expect}= require('@playwright/test');
// test('pagination',async({page})=> { 

// await page.goto("https://testautomationpractice.blogspot.com/");
// const loc= await page.locator("//li//a[@href='#' and text()='2']");
// await page.waitForTimeout(3000);
// await loc.scrollIntoViewIfNeeded();
// await loc.click();
// await page.waitForTimeout(3000);
//})