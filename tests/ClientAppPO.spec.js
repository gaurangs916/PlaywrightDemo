const { test, expect } = require('@playwright/test');
const{POManager}= require('../pageobjects/POManager');
//Json> string> js object.
const dataset = JSON.parse(JSON.stringify(require("../utlis/pllaceorderTestData.json"))); // json.strinngfy connverts json files to string & json.parse converts json files to js objects.
 
for(const data of dataset) {


test(`Client App login for ${productName}`, async ({ page }) => {
   //js file- Login js, DashboardPage
   const poManager = new POManager(page);

   const products = page.locator(".card-body");
   const loginPage = new poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(data.username,data.password)
   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.searchProductAddCart(data.productName);
   await dashboardPage.navigateToCart();
   
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

}); 
}