import MainPage from "../Elements/Pages/MainPage.page";
import AuthPAge from "../Elements/Pages/AuthPage.page";
import { createPageFixture } from "../Helpers/create-page-fixture";
import { TransactionPage } from "../Elements/Pages/TransactionPage.page";

export type WebSitePages = 
{
    MainPage : MainPage;
    AuthPage : AuthPAge;
    TransactionPage : TransactionPage
}

export const websitepages = 
{
    MainPage: createPageFixture(MainPage),
    AuthPage: createPageFixture(AuthPAge),
    TransactionPage: createPageFixture(TransactionPage)
};