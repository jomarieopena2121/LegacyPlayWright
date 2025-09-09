import { Page, expect } from '@playwright/test'
import { AccountLogin, getKiosKURL } from '../utils/datavariables';
import { BasedURL } from '../QMSClass/QmeupLogin';

export async function pageLogins(page: Page): Promise<BasedURL>{
    await page.goto(AccountLogin.baseappurl);
    const qmeupLoginPage = new BasedURL(page);
    await expect(qmeupLoginPage.button).toBeVisible();
    await qmeupLoginPage.button.click();
    return qmeupLoginPage;
}


