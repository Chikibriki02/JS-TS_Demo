import {test as base, request, TestInfo as ti, Page} from "@playwright/test";
import { WebSitePages, websitepages } from "./Fixtures/CreateTest";
import { ApiService, apiservice } from "./Fixtures/CreateApi";

export const test = base.extend<WebSitePages>(websitepages)
        .extend({
    context : async ({browser}, use)=> {
        const context = await browser.newContext({
            viewport : {width : 1920, height : 1080},
            deviceScaleFactor : 2
        });
        await use(context);
    },
    browser : async ({playwright}, use) =>{
        const browser = await playwright.chromium.launch({
            args : ['--window-position=-10,0']
        });
        await use(browser);
    }
}).extend<ApiService>(apiservice);

export const expect = test.expect;
