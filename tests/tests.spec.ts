import { test, expect } from "../test";

test("Auth Success", async ({AuthPage}) => {
    //await page.goto('https://rozetka.com.ua/');
    await AuthPage.Login();
})

