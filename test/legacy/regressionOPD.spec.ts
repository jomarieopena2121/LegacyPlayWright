import { test, Page, expect } from '@playwright/test';
import { PageManager } from '../../PageObjectModels/MainPageObjectModels';
import { AccountLogin } from '../../LegacyComponents/utils/datavariables';


test('Login Get Kiosk using Admin Account', async ({page}: {page: Page})=>{
    const pageManager = new PageManager(page);

    const basedURL = pageManager.qmeupLogin();
    const signIn = pageManager.qmeupLogin2();
    const allmodule = pageManager.qmeupFunction();
 
    await basedURL.signinPage;
    await basedURL.button.click();
    await signIn.email1.fill(AccountLogin.qmeupadmin);
    console.log(AccountLogin.qmeupadmin)
    await signIn.pass.fill(AccountLogin.qmeuppass);
    console.log(AccountLogin.qmeuppass)
    await signIn.button1.click();
    await signIn.page.waitForLoadState('load');
    await allmodule.dashboardlk.click();
    await allmodule.dashboardiv.textContent();
    await allmodule.settings.click();
    await page.waitForTimeout(3000);
    await allmodule.settingsSN.click();
    await allmodule.kioskdiv.first().waitFor();
    await allmodule.kioskName.waitFor();
   
    

});