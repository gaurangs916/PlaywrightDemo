const { test, expect } = require('@playwright/test');
test('test1@sanity', async ({ page }) => {
  console.log("test case 1")

})
test('test2@sanity', async ({ page }) => {
  console.log("test case 2")

})

test('test3@smoke', async ({ page }) => {
  console.log("test case 3")

})

test('test4@sanity@reg', async ({ page }) => {
  console.log("test case 4")

})

test('test5@reg', async ({ page }) => {
  console.log("test case 5")

})