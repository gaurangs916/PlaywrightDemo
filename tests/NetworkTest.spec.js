const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('./utils/APiUtils');
const { json } = require('stream/consumers');
const loginPayLoad = {userEmail:"gaurangs917@gmail.com",userPassword:"Learning@1"};
const orderPayLoad = {orders:[{country:"India",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
const fakePayLoadOrders = {data:[],message:"No Orders"};
 
let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext,loginPayLoad);
   response =  await apiUtils.createOrder(orderPayLoad);
 
})
 
 
//create order is success
test('Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );
await page.goto("https://rahulshettyacademy.com/client");
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", async route=>
{
    const response = await page.request.fetch(route.request());
    let body = JSON.stringify(fakePayLoadOrders); // this will convert js object to json.
    route.fulfill(
        {
          response,
          body,
        }
    )
    //intercepting response
}
) 
 await page.locator("button[routerlink*='myorders']").click(); // my orders link
 await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
 console.log(await page.locator(".mt-4").textContent());
 
});
 


