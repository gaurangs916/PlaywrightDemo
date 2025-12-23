const {test, expect} = require('@playwright/test');

test('Auto Suggest dropdown', async ({page})=>  
{
 await page.goto("https://ui.vision/demo/webtest/frames/") 
 const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
 const childframe1 = await frame1.childFrames()
 childframe1[0].locator("//div[@id='i21']//div[@class='uHMk6b fsHoPb']").check();
 await page.waitForTimeout(3000);
});

//The 0 in childframe1[0] is used because childFrames() always returns an array of frames, even if there is only one child frame.
//Index   	Meaning
//0	        First child frame
//1         Secnd child frame
//childframe1[0]
// means “give me the first child iframe inside frame1”.
