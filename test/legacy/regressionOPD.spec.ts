import { test, Page, expect } from '@playwright/test';
import { PageManager } from '../../PageObjectModels/MainPageObjectModels';
import { AccountLogin } from '../../LegacyComponents/utils/datavariables';
import { BasedURL, LoginAccount } from '../../PageObjectModels/QMEUP/QmeupLogin';

test('Login Get Kiosk using Admin Account', async ({page}: {page: Page})=>{
    const pageManager = new PageManager(page);

    const basedURL = pageManager.qmeupLogin();
    const signIn = pageManager.qmeupLogin2();
    const allmodule = pageManager.qmeupFunction();
    const kioscontext = await page.context();
    const kioskPage = await kioscontext.newPage();


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
    await allmodule.settingsSN.click();
    await allmodule.kioskdiv.first().waitFor();
    const tbody = await allmodule.kioskName;
    await tbody.waitFor();
    const rows = allmodule.kioskName2;
    const row2 = allmodule.kioskName3;
    const kioskbutton:any = allmodule.kioskbutton
    const kioskname = 'APPOINTMENT';
    //Getting all data on Body
    for (let h = 0; h < await tbody.count(); h++){
        const tbody2 = await tbody.nth(h);
        await expect(tbody2).toBeVisible();
        break;
    }

    for (let i = 0; i < await rows.count(); i++){
        const rowId = await rows.nth(i);
        for(let j = i; j < await row2.count(); j++){
            const rowId2 = await row2.nth(j).textContent();
             if(rowId2 === 'APPOINTMENT' && kioskbutton === 'APPOINTMENT'){
                await kioskbutton.nth(j).click();
                
                break;
        }
        console.log(rowId2);
        }
       console.log(rowId);
   }

});
test ('', async ({page}: {page: Page}) => {



});