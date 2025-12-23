const {test, expect} = require('@playwright/test');

import { loginpage } from "../Pages/loginpage";


// this import fs is done as we are getting data from csv file, so we need to write line 5-10
import fs from "fs";
import { parse } from "csv-parse/sync";
import { homepage } from "../Pages/homepage";

const records = parse(fs.readFileSync("tests/datasheet/testdata.csv"),
  {
    columns: true,
    skip_empty_lines: true,
  })

for (const record of records) 
{
  test('first POM test', async ({ page }) => {

    const login = new loginpage(page);
    await login.gotologinpage();
    await login.login(record.username, record.password);
    await page.waitForTimeout(3000);
   
    const home= new homepage(page);
    await home.checkHeaders();
    await home.checkHeading(record.heading);
    await page.waitForTimeout(3000);
  })
}

