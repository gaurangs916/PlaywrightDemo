const {test, expect }= require('@playwright/test');
test('single file upload and multiple file upload', async ({page})=> { 

  // single file upload
await page.goto("https://automationtesting.co.uk/fileupload.html");
await page.waitForTimeout(3000);
await page.locator("//input[@name='fileToUpload']").setInputFiles("tests/uploadfiles/exceldownloadTest.xlsx")

 // multiple file upload
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
await page.locator("//input[@name='filesToUpload']").setInputFiles(['tests/uploadfiles/exceldownloadTest.xlsx','tests/uploadfiles/Gaurang S BA resume.pdf']);
await page.waitForTimeout(3000);
})