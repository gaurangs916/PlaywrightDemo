
const {test, expect}= require('@playwright/test');  
import fs from "fs";  // fs > file system
import { parse } from "csv-parse/sync";  // csv-parse/sync > converts CSV text into JavaScript objects

// readFileSync → reads a file synchronously 
//columns: true > Treat the first row of the CSV as column headers & Convert each row into a JavaScript object
//skip_empty_lines: true > Ignore blank or empty lines in the CSV file

const records= parse(fs.readFileSync("tests/datasheet/testdata.csv"),{ columns: true, skip_empty_lines:true,
})
for(const record of records)
{
test('Get data from csv'+record.id, async ({page})=> { 
  console.log(records);
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("//input[@id='username']").fill(record.username); // because we used columns:true > we are able to call it here with record .username.

  await page.locator("//input[@id='password']").fill(record.password);
  await page.waitForTimeout(4000);
  await page.locator("//button[@id='submit']").click();
  await page.waitForTimeout(4000);
})
}