const { test, expect } = require('@playwright/test');
const { request } = require('http');
var userid;
test.only('Get Data [Get]', async ({ request }) => {

  const Response = await request.get("https://api.restful-api.dev/objects/7");
  console.log(await Response.json());
  expect(Response.status()).toBe(200);


})

test('Create Data [POST]', async ({ request }) => {

  const response = await request.post("https://api.restful-api.dev/objects",
    {
      data: {
        "name": "Apple MacBook Pro 16",
        "data": {
          "year": 2019,
          "price": 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
      }, headers: {
        "Accept": "Application/json"
      }
    })
  console.log(await response.json());
  expect(response.status()).toBe(200);
  var res = await response.json(); // this is to get unique user id & with this user id we would be able to update data in future.
  userid = res.id;
})

test('Update data [Put]', async ({ request }) => {

  const response = await request.put("https://api.restful-api.dev/objects/" + "ff8081819782e69e019b3ac6d9a437b5",
    {
      data: {
        "name": "Apple MacBook Pro 16",
        "data": {
          "year": 2020,
          "price": 2049.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
          "color": "r"
        }, headers: {
                      "Accept": "Application/json"
                      }
        }
    })
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Delete data [Delete]', async({request})=> {
  const response= await request.delete("https://api.restful-api.dev/objects/" + "ff8081819782e69e019b3ac6d9a437b5");
 expect(response.status()).toBe(200);
})