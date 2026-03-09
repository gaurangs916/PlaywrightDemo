import {test,expect} from "@playwright/test"

test("Test Get API", async function({request})) {
   await request.get
}