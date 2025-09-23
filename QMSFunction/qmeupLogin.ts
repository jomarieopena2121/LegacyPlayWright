import { Page, expect } from '@playwright/test'
import { AccountLogin, getKiosKURL } from '../utils/datavariables';
import { BasedURL } from '../QMSClass/QmeupLogin';
import { PageManager } from '../PageObjectModels/MainPageObjectModels';
import { AppConfigs } from '../utils/data';

export async function landingPage(page: Page) {
     await page.goto(AccountLogin.qmeupCloud);
}
export async function pageLogins(page: Page): Promise<BasedURL>{

    const qmeupLoginPage = new BasedURL(page);
    await expect(qmeupLoginPage.button).toBeVisible();
    await qmeupLoginPage.button.click();

    return qmeupLoginPage;
}
export async function userAccountAdmin(page:Page,{ qmeupadmin, qmeuppass}: AppConfigs): Promise<PageManager> {
    const pageManager = new PageManager(page);

    const signIn = pageManager.qmeupLogin2();
    await signIn.email1.fill(qmeupadmin);
    console.log(qmeupadmin)
    await signIn.pass.fill(qmeuppass);
    console.log(qmeuppass);
    await signIn.button1.click();
    await signIn.page.waitForLoadState('load');

    return pageManager;
}

export async function doctorsAccount(page: Page, {docaccount, docpassword}: AppConfigs): Promise<PageManager>{
    const pageManager = new PageManager(page);

    const signIn = pageManager.qmeupLogin2();
    await signIn.email1.fill(docaccount);
    console.log(docaccount)
    await signIn.pass.fill(docpassword);
    console.log(docpassword)
    await signIn.button1.click();
   // await signIn.page.waitForTimeout(30000);

    return pageManager;
}

export async function cloudUserAccountAdmin(page:Page,{ qmeupCloudAdmin, qmeupCloudPass}: AppConfigs): Promise<PageManager> {
    const pageManager = new PageManager(page);

    const signIn = pageManager.qmeupLogin2();
    await signIn.email1.fill(qmeupCloudAdmin);
    console.log(qmeupCloudAdmin)
    await signIn.pass.fill(qmeupCloudPass);
    console.log(qmeupCloudPass);
    await signIn.button1.click();
    await signIn.page.waitForLoadState('load');

    return pageManager;
}


