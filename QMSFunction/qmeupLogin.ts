import { Page, expect } from '@playwright/test'
import { AccountLogin, getKiosKURL } from '../utils/datavariables';
import { BasedURL } from '../QMSClass/QmeupLogin';
import { PageManager } from '../PageObjectModels/MainPageObjectModels';

export async function landingPage(page: Page) {
     await page.goto(AccountLogin.baseappurl);
}
export async function pageLogins(page: Page): Promise<BasedURL>{

    const qmeupLoginPage = new BasedURL(page);
    await expect(qmeupLoginPage.button).toBeVisible();
    await qmeupLoginPage.button.click();

    return qmeupLoginPage;
}
export async function userAccountAdmin(page:Page): Promise<PageManager> {
    const pageManager = new PageManager(page);

    const signIn = pageManager.qmeupLogin2();
    await signIn.email1.fill(AccountLogin.qmeupadmin);
    console.log(AccountLogin.qmeupadmin)
    await signIn.pass.fill(AccountLogin.qmeuppass);
    console.log(AccountLogin.qmeuppass)
    await signIn.button1.click();
    await signIn.page.waitForLoadState('load');

    return pageManager;
}

export async function doctorsAccount(page: Page): Promise<PageManager>{
    const pageManager = new PageManager(page);

    const signIn = pageManager.qmeupLogin2();
    await signIn.email1.fill(AccountLogin.docaccount);
    console.log(AccountLogin.docpassword)
    await signIn.pass.fill(AccountLogin.docpassword);
    console.log(AccountLogin.docpassword)
    await signIn.button1.click();
    await signIn.page.waitForLoadState('load');

    return pageManager;
}


