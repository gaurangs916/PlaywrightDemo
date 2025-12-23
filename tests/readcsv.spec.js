const {test, expect}= require('@playwright/test');
import fs from "fs";
import { parse } from "csv-parse/sync";

const records= parse(fs.readFileSync("tests/datasheet/testdata.csv"),{ columns: true, skip_empty_lines:true,
})
for(const record of records)
{
test('Get data from csv'+record.id, async ({page})=> { 
  console.log(records);
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("//input[@id='username']").fill(record.username);
  await page.locator("//input[@id='password']").fill(record.password);
  await page.waitForTimeout(4000);
  await page.locator("//button[@id='submit']").click();
  await page.waitForTimeout(4000);
})
}