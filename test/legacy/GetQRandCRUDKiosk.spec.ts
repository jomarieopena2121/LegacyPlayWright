import { test, Page, expect } from '@playwright/test';
import { PageManager } from '../../PageObjectModels/MainPageObjectModels';
import { AccountLogin, getKiosKURL } from '../../utils/datavariables';
import { pageLogins } from '../../QMSFunction/QmeupLogin';
import { getQR } from '../../QMSFunction/QmeupGetQRKiosk';

test('Login Get Kiosk using Admin Account', async ({page}: {page: Page})=>{
    const pageManager = new PageManager(page);

//    const basedURL = pageManager.qmeupLogin();
    const signIn = pageManager.qmeupLogin2();
    const allmodule = pageManager.qmeupFunction();

    await pageLogins(page);
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
    const rows = tbody;  
    const rowCount = await rows.count();
    const kioskbutton0 = allmodule.kioskbutton
    const kioskName2 = allmodule.kioskName2

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        // all <td> in this row
        const tdCells = row.locator(kioskName2);
        // get the first cell text
        const firstCellText = await tdCells.first().innerText();
        // check if it matches "OPD Registration"
        if (firstCellText.includes(AccountLogin.qmeupkioskname)) {
        // last cell of the row
        const lastCell = tdCells.last();
        const kioskbutton1 = lastCell;
        // button inside last cell 'button[title="Open Kiosk On New Window"]'
        const kioskButton = kioskbutton1.locator(kioskbutton0);
        // check visibility
        await expect(kioskButton).toBeVisible();
        await kioskButton.click();
  //  console.log(`Found button in row ${i} with Name of Kiosk = ${firstCellText}`);
        }
    }
        
}); 

test('Gettings Kiosk QR Number', async ({page}: {page: Page}) => {
    const pageManager = new PageManager(page);
    const qmsKiosk = pageManager.qmeupKiosk();
    
    await getQR(page);
    await qmsKiosk.page.waitForLoadState('load');
    await qmsKiosk.kbgeneralsurgery.isVisible();
    await qmsKiosk.kbgeneralsurgery.click();
    await expect(qmsKiosk.queuemeup).toBeVisible();
    await qmsKiosk.queuemeup.click();
    await expect(qmsKiosk.qskip).toBeVisible();
    await qmsKiosk.qskip.click();
    await qmsKiosk.iframe.isHidden();
    await expect(qmsKiosk.iframe).toBeAttached();
    await expect(qmsKiosk.iframe).toBeTruthy();

});
test('Add Kiosk', async({page}: {page: Page})=>{
        const pageManager = new PageManager(page);

        const allmodule = pageManager.qmeupFunction();
        const signIn = pageManager.qmeupLogin2();
         await pageLogins(page);
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
        await expect(allmodule.buttonaddkiosk).toBeVisible();
        await allmodule.buttonaddkiosk.click();
        await expect(allmodule.addkiosk).toBeVisible();
        await allmodule.enterKioskN.fill('IPD REG');
        await expect(allmodule.buttonAddKiosk).toBeVisible();
        await allmodule.buttonAddKiosk.click();
});
test('Delete Kiosk', async ({page}: {page: Page})=>{
          const pageManager = new PageManager(page);

//    const basedURL = pageManager.qmeupLogin();
    const signIn = pageManager.qmeupLogin2();
    const allmodule = pageManager.qmeupFunction();

    await pageLogins(page);
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
    const rows = tbody;  
    const rowCount = await rows.count();
    const kioskbutton0 = allmodule.kioskbutton
    const kioskName2 = allmodule.kioskName2

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        // all <td> in this row
        const tdCells = row.locator(kioskName2);
        // get the first cell text
        const firstCellText = await tdCells.first().innerText();
        // check if it matches "OPD Registration"
        if (firstCellText.includes(AccountLogin.qmeupkioskname)) {
        // last cell of the row
        const lastCell = tdCells.last();
        const kioskbutton1 = lastCell;
        // button inside last cell 'button[title="Open Kiosk On New Window"]'
        const kioskButton = kioskbutton1.locator(kioskbutton0);
        // check visibility
        await expect(kioskButton).toBeVisible();
        await kioskButton.click();
  //  console.log(`Found button in row ${i} with Name of Kiosk = ${firstCellText}`);
        }
    }
});