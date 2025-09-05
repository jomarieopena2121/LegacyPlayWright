import { test, Page, expect } from '@playwright/test';
import { PageManager } from '../../PageObjectModels/MainPageObjectModels';
import { AccountLogin } from '../../LegacyComponents/utils/datavariables';
import { TIMEOUT } from 'dns';


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
    const rows = allmodule.kioskName2; 
    const kioskname = 'OPD Registration';
    for (let i = 0; i < await rows.count(); i++){    
        const rowId = await rows.nth(i).textContent();
            if(rowId === kioskname.trim()){
                const click = await rows.nth(i).filter();
                 await expect(click).toBeVisible();
                 const clickable = click.locator('div > div > button' );
                 await clickable.isVisible();
                 await clickable.click();
                 page.waitForTimeout(50000);
                
                // const rows2 = rows.nth(i).getByRole('button', { name: 'Open Kiosk On New Window' });
                // page.waitForTimeout(10000);
                // await rows2.filter().first();
                // await rows2.isVisible();
                // await rows2.click();
                // await expect(rows2.clic);
                // console.log(`${rows2}`);
                // await rows2;  
                // await rows2.click();
        //    for (let j = 0; j <= i; j++){
        //     const rows2 = page.locator('button[title="Open Kiosk on New Window"]');
        //      const rowId2 = await rows2.nth(j).textContent();
        //         if(rowId2 === kioskname){
        //             const click = await rows2.nth(j).filter();
        //             await expect(click).toBeVisible();
        //             await click.click();
        //         }
        //     }
            break;
        }
    }
   


});