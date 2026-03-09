const { test, expect } = require('@playwright/test');
import { utradelogin } from '../Pages/utradelogin';
test.describe('Share india page', () => {
  let login;

  test.beforeEach(async ({ page }) => {
    login = new utradelogin(page);
    await login.navigate();
    await page.waitForTimeout(3000);
  })

  test('Validate all UI elements', async ({page}) => {
    await login.verifyIpotext();
    await login.verifyAllLinks();
  })

  test('Ucc num', async ({ page }) => {
    await login.addUcc("123456");
    await login.clicklogin();
    await login.createNow.click();
  })

})