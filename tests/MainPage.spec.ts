import { test, expect } from "../test";

test.beforeEach(async ({AuthPage, page})=>{
    await AuthPage.Login();
})

test("Check UserName", {tag : '@Logined' }, async ({ MainPage}) => {
    var actual = await MainPage.GetUsername();
    expect(actual).toBe("Test 1")
})

test("Create New Transaction", async ({MainPage, TransactionPage}) => {
    await MainPage.ClickCreateNewTransaction();
    var text = await TransactionPage.GetText();
    expect(text).toBe("1 Select Contact 2 Payment 3 Complete")
    var t = await TransactionPage.GetUser()
    expect(t).toContain("Darrel Ortiz");
})