import BasePage from "./BasePage.page";

export default class MainPage extends BasePage
{
    private readonly UserName = this.page.locator("//h6[@data-test=\"sidenav-user-full-name\"]");
    readonly CreateNewTransaction = this.page.locator("//a[text() = ' New']");

    async GetUsername() 
    {
        var username = await this.UserName.textContent();
        return username;
    }

     ClickCreateNewTransaction = async() => await this.CreateNewTransaction.click();
}