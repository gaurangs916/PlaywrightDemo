const{test, expect}=require('@playwright/test')

test.beforeAll(async()=> {

})

test.beforeEach(async()=> {
  
})

test.afterEach(async()=> {
  
})

test.afterAll(async()=> {
  
})




test.describe('Intake record',()=> { 
test('test1', async ({ page }) => {
  console.log("test case 1")
})
test('test2', async ({ page }) => {
  console.log("test case 2")
})
})

test.describe('Group 2',()=> { 
test('test3', async ({ page }) => {
  console.log("test case 3")
})


test('test4', async ({ page }) => {
  console.log("test case 4")
})
})