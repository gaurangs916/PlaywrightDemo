const {test, expect} = require('@playwright/test');
const { text } = require('stream/consumers');
const { parseEnv } = require('util');

test.only('Browser Playwright test', async ({browser})=>  // browser is fixture or global variable
{
  // chrome - plugins / cookies
  const context = await browser.newContext(); // this will create context
  const page = await context.newPage(); // .newpage() method is to create new page.
  
  // this will stop the call to reach browser, **/* >> is any url
  // page.route('**/*.css', route=> route.abort());
  
  //this will abort all images calls.
  //page.route('**/*.{jpg,png,jpeg}',route=>  route.abort());
  
// Request calls
page.on('request',request=> console.log(request.url()));

// Response calls
page.on('response', Response=> console.log(Response.url(), response.status()));

  const userName = page.locator('#username');
  const signIn = page.locator('#signInBtn');
  const cardTitle = page.locator(".card-body a");
  await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/"); // to go to url enter the url in ""
  console.log(await page.title());

  //css 
  // to enter use > fill 
  // to clear use > fill("") empty 
  await userName.fill("rahul");
  await page.locator("[type='password']").fill("learning")
  await signIn.click();
  // wait untill locator shown up on page.
  console.log(await page.locator("[style*='block']").textContent()); // .style* * is used to cut short the sentence. 
  // text content is used to extract content from locator or to get title .
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');  // this is used to verify within strings.
  
  await userName.fill(""); // if you give empty string it will clear the box.
   
  await userName.fill("rahulshettyacademy");
  await signIn.click();
  console.log(await cardTitle.nth(0).textContent());  // nth(0) is to get me 1st elemment present there. i.e 0th index. textcontent will wait for 30 secs.

  const allTitles = await cardTitle.allTextContents();  // to grab all titles from page. alltextcontent method will not wait for 30 secs.
  console.log(allTitles);
});



// OR

test('Page Playwright test', async ({page})=>  // here we are not mentioning browser fixture & those 3 line because we are not injecting any parameters like cookies or anything so we can just include page fixture & it will automatically understand that it needs to just create a fresh page without proxies or cookies. 
// .only means it will run only that test which has.only after it.
  {
  await page.goto("https://google.com"); // to go to url enter the url in ""
  // get title - assertion
  console.log(await page.title());
   await expect(page).toHaveTitle("Google");

  });

  test('UI Controls', async ({page})=>
  {
  await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator('#username');
  const signIn = page.locator('#signInBtn');
  const dropdown = page.locator("select.form-control");
  const documentLink = page.locator("[href*='documents-request']");
  await dropdown.selectOption("consult"); // selectoption is to select option from dropdown. consult is the value attribute mentioned in the drop down on UI.
  await page.locator(".radiotextsty").last().click(); // .last or nth(1) will check the last button from list.
  await page.locator('#okayBtn').click();
  await expect(page.locator(".radiotextsty").last()).toBeChecked(); // tobechecked will see if it is checked, then only will return true, if not will fail test.
  // for checking checkbox
  await page.locator("#terms").click();  
  await expect(page.locator("#terms")).toBeChecked(); 

  // to uncheck the checkox
  await page.locator('#terms').uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentLink).toHaveAttribute("class","blinkingText");
  // await page.pause();  // this will pause the page, so that we can check.
  });

test('child windows hadl', async({browser})=>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  // const userName = page.locator('#username');
  await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all(  // promise all is used to get multiple steps in playwright that wants to go asynchronously or         n                                        parallelly with each other
  [
    context.waitForEvent('page'), //listen for any new page pending,rejected, fulfilled
    documentLink.click(),
  ])
  const text = await newPage.locator(".red").textContent(); 
  const arrayText = text.split("@") // used to separate the text
  const domain = arrayText[1].split(" ")[0] // used to return data from array. 1 represents 1st data is returned & empty is to further split data to get exact data that we need.
  console.log(domain);
  await page.locator("#username").fill(domain); // username filled in main login page
  // await page.pause();
  console.log(await page.locator("#username").textContent);
  



});
