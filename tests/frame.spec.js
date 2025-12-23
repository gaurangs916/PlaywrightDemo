const {test, expect }= require('@playwright/test');
test('Handling frames', async ({page})=> {

await page.goto("https://ui.vision/demo/webtest/frames/");
await page.waitForTimeout(3000);
// handle frame with url

let frame_3= await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
await frame_3.locator("//input[@name='mytext3']").fill("helloooo");
await page.waitForTimeout(3000);

//handle frame with name or frame locator
let frame_4=await page.frameLocator("//frame[@src='frame_3.html']")
await frame_4.locator("//input[@name='mytext3']").fill("helloooo gaurang");
await page.waitForTimeout(3000);
})