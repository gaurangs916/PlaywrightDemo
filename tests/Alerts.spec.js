const {test, expect} = require('@playwright/test');

test('Simple alert box', async ({page})=>  
{ 
await page.goto("https://testautomationpractice.blogspot.com/");
page.on('dialog', async dialog=> {

expect (dialog.type()).toContain('alert');
expect(dialog.message()).toContain('I am an alert box!');
await dialog.accept();
})
await page.locator("//button[@id='alertBtn']").click();
await page.waitForTimeout(3000);
})

test('Confirmation alert box', async ({page})=>  
{ 
await page.goto("https://testautomationpractice.blogspot.com/");
page.on('dialog', async dialog=> {

expect(dialog.type()).toContain('confirm');
expect(dialog.message()).toContain('Press a button!');
await dialog.dismiss();
//await dialog.accept();
})
await page.locator("//button[@id='confirmBtn']").click();
await expect (page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!");
await page.waitForTimeout(3000);
})

test('Prompt alert', async ({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/")
page.on('dialog', async dialog=>  {
expect(dialog.type()).toContain('prompt');
expect(dialog.message()).toContain("Please enter your name:");
expect(dialog.defaultValue()).toContain("Harry Potter");
await dialog.accept("hi");
})
await  page.locator("//button[@id='promptBtn']").click();
await expect(page.locator("//p[@id='demo']")).toHaveText("Hello hi! How are you today?");
await page.waitForTimeout(3000);
})

test('Drag and drop', async({page})=> {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("//h2[text()='Drag and Drop']").scrollIntoViewIfNeeded;
const source=await page.locator("//div[@id='draggable']");
const dest=await page.locator("//div[@id='droppable']");
await source.dragTo(dest);
await page.waitForTimeout(3000);
})

test.only('Double click', async({page})=> {
await page.goto("https://testautomationpractice.blogspot.com/");
const copytext= await page.locator("//button[text()='Copy Text']");
await copytext.dblclick();
await copytext.scrollIntoViewIfNeeded();
await page.waitForTimeout(3000);
})