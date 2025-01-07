import BasePage from "./BasePage.page";
import { UserCredentials } from "../../Data";

export default class AuthPAge extends BasePage
{
    private readonly Usernmae = this.page.locator('#username');
    private readonly Password = this.page.locator('#password');
    private readonly Submit = this.page.locator('//button');

    async Login()
    {
        await this.GoTOMainPage();
        await this.Usernmae.fill(UserCredentials.username);
        await this.Password.fill(UserCredentials.Password);
        await this.Submit.click();
    }
}
