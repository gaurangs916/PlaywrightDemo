
const { test, expect } = require('@playwright/test');
 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const password = "Iamking@000";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill(password);
   await page.getByRole("button", {name:"Login"}).click();

   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   await page.locator(".card-body").filter({hasText: "ZARA COAT 3"}).getByRole("button", {name:"Add To Cart"}).click();
   await page.getByRole("listitem").getByRole("button", {name:"Cart"}).click();

   // or
   /* const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }*/
 
   
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
   
   await page.getByRole("button", {name:"Checkout"}).click();
   //await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
   await page.getByRole("button", {name:" India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
   await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
   
 
   // expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   // await page.locator(".action__submit").click();
   // await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   
   
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor(); // to wait for whole table to get loaded, tbody is the last table body is shown up.
   const rows = await page.locator("tbody tr");  // tbody tr to scan whole order from your order table.
 
   // to scan all rows to find out the correct order id.
   for (let i = 0; i < await rows.count(); ++i) {    
      const rowOrderId = await rows.nth(i).locator("th").textContent(); // th to get that  particular orderid of a particular row.
      if (orderId.includes(rowOrderId)) {   // compare original order id with this needs to match.
         await rows.nth(i).locator("button").first().click();  // used to click on view button which is first button.
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent(); // assertion to check if orderid is correct, col-text is element of ordid
   expect(orderId.includes(orderIdDetails)).toBeTruthy();  // to match both orderid 
   
 
}); 




 

