
const {test, expect} = require('@playwright/test');

test.only('Simple dropdown', async ({page})=>  
{ 
  await page.goto("https://testautomationpractice.blogspot.com/");
  const country=await page.locator("//label[text()='Country:']");
  await country.scrollIntoViewIfNeeded();
  await page.locator("//select[@id='country']").selectOption("Canada"); // or selectOption({label:'Canada'})
  await page.waitForTimeout(3000);
 
  //to find length of options
  let options = await page.$$("//select[@id='country']//option"); // $$ is used to store multiple locators.
  console.log("total options are:",  options.length);
 
  //to print all options
  for(const option of options)
  {
    let value = await option.textContent();
    console.log(value);
  }
})