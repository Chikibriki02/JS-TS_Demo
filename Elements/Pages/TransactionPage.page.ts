import BasePage from "./BasePage.page";

export class TransactionPage extends BasePage
{
    readonly TitleBlockText = this.page.locator("//div[contains(@class, 'MuiStepper-root MuiStepper-horizontal css-m5vj9m-MuiStepper-root')]");
    readonly ListUsers = this.page.locator('//li[contains(@data-test,"user-list-item")]');

    async GetUser()
    {
        for (const item of await this.ListUsers.elementHandles()) {
            const text = await item.innerText();
            console.log(text + '\n' + '-'.repeat(20));
        }    
        return await this.ListUsers.filter({hasText : "Darrel Ortiz"}).innerText();
    }

    async GetText()
    {
        var t = await this.TitleBlockText.innerText();
        var newrq = t.replace(/\s+/g, ' ')
        return newrq;
    }

}
