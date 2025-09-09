import { test, Page, expect } from '@playwright/test';
import { PageManager } from '../../PageObjectModels/MainPageObjectModels';
import { AccountLogin, getKiosKURL } from '../../utils/datavariables';
import { pageLogins } from '../../QMSFunction/qmeupLogin';
import { getQR } from '../../QMSFunction/qmeupGetQRKiosk';

test('Login Get Kiosk using Admin Account', async ({page}: {page: Page})=>{
    const pageManager = new PageManager(page);

    const basedURL = pageManager.qmeupLogin();
    const signIn = pageManager.qmeupLogin2();
    const allmodule = pageManager.qmeupFunction();

    test.step('Login Prompt', async ()=>{
        await pageLogins(page);
    });
//    await basedURL.button.click();
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
  //  console.log(`Found button in row ${i} with Name of Kiosk = ${firstCellText}`);
  }
}
});

test('Gettings Kiosk QR Number', async ({page}: {page: Page}) => {
    const pageManager = new PageManager(page);
    const qmsKiosk = pageManager.qmeupKiosk();
    test.step('Kiosk Link', async () => {
    const qrGet = await getQR(page);
    await expect(qrGet.title).toBeVisible();
    })

    await qmsKiosk.page.waitForLoadState('load');
    await qmsKiosk.kbgeneralsurgery.click();
})
   