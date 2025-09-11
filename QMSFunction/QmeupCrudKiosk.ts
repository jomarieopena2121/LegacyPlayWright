import { expect, Page } from '@playwright/test'
import { PageManager } from '../PageObjectModels/MainPageObjectModels';
import { AccountLogin } from '../utils/datavariables';

export async function addKioskAllGroup(page : Page): Promise<PageManager> {
    const pageManager = new PageManager(page);

    const addKioskAll = pageManager.qmeupFunction();
    await expect(addKioskAll.buttonaddkiosk).toBeVisible();
    await addKioskAll.buttonaddkiosk.click();
    await expect(addKioskAll.addkiosk).toBeVisible();
    await addKioskAll.enterKioskN.fill('IPD REG');
    await expect(addKioskAll.buttonAddKiosk).toBeVisible();
    await addKioskAll.buttonAddKiosk.click();

    return pageManager;
}
export async function addKioskAllGwithGreet(page: Page): Promise<PageManager>{
    const pageManager = new PageManager(page);
    
    const addKioskAll = pageManager.qmeupFunction();
    await expect(addKioskAll.buttonaddkiosk).toBeVisible();
    await addKioskAll.buttonaddkiosk.click();
    await expect(addKioskAll.addkiosk).toBeVisible();
    await addKioskAll.enterKioskN.fill('VIP OUTPATIENT REGISTRATION');
    await expect(addKioskAll.buttonAddKiosk).toBeVisible();
    await expect(addKioskAll.greetings).toBeVisible();
    await addKioskAll.greetings.fill("Welcome VIP's");
    await addKioskAll.buttonAddKiosk.click();

    return pageManager;
}
export async function updateKiosk(page: Page): Promise<PageManager> {
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
        await allmodule.dashboardlk.click();
        await allmodule.dashboardiv.textContent();
        await allmodule.settings.click();
        await allmodule.settingsSN.click();
        await allmodule.kioskdiv.first().waitFor();
        const tbody = await allmodule.kioskName;
        const rows = tbody;  
        const rowCount = await rows.count();
        const kioskbutton0 = allmodule.removekiosk
        const kioskName2 = allmodule.kioskName2
    
    for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
        // all <td> in this row
            const tdCells = row.locator(kioskName2);
        // get the first cell text
            const firstCellText = await tdCells.first().innerText();
        // check if it matches "OPD Registration"
            if (firstCellText.includes('IPD REG')) {
        // last cell of the row
            const lastCell = tdCells.last();
            const kioskbutton1 = lastCell;
        // button inside last cell 'button[title="Open Kiosk On New Window"]'
            const kioskButton = kioskbutton1.locator(kioskbutton0);
        // check visibility
        // await expect(kioskButton).toBeVisible();
            await kioskButton.click();
            await expect(allmodule.updatekiosk).toBeVisible();
            await allmodule.updatekiosk.click();
            await expect(allmodule.updatekiosk).toBeHidden();
            await allmodule.enterKioskN.fill('');
        // if(allmodule.enterKioskN === null){
        //console.log("This field is required Field",`${allmodule.enterKioskN}`);
                // }
            await expect(allmodule.updatebutton).toBeVisible();
            await allmodule.updatebutton.click();
        //  console.log(`Found button in row ${i} with Name of Kiosk = ${firstCellText}`);
        }
           
    } 
    return pageManager;
}
export async function cancelDeleteKios(page: Page): Promise<PageManager> {
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
        await allmodule.dashboardlk.click();
        await allmodule.dashboardiv.textContent();
        await allmodule.settings.click();
        await allmodule.settingsSN.click();
        await allmodule.kioskdiv.first().waitFor();
        const tbody = await allmodule.kioskName;
        const rows = tbody;  
        const rowCount = await rows.count();
        const kioskbutton0 = allmodule.removekiosk
        const kioskName2 = allmodule.kioskName2
    
        for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            //all <td> in this row
            const tdCells = row.locator(kioskName2);
            //get the first cell text
            const firstCellText = await tdCells.first().innerText();
            // check if it matches "OPD Registration"
            if (firstCellText.includes('IPD REG')) {
            // last cell of the row
            const lastCell = tdCells.last();
            const kioskbutton1 = lastCell;
            //button inside last cell 'button[title="Open Kiosk On New Window"]'
            const kioskButton = kioskbutton1.locator(kioskbutton0);
            //check visibility
            //await expect(kioskButton).toBeVisible();
            await kioskButton.click();
            await expect(allmodule.removekioskclick).toBeVisible();
            await allmodule.removekioskclick.click();
            await expect(allmodule.removekioskclick).toBeHidden();
            await expect(allmodule.confirmremove).toBeVisible();
            await expect(allmodule.buttoncancel).toBeVisible();
            await allmodule.buttoncancel.click();
            // console.log(`Found button in row ${i} with Name of Kiosk = ${firstCellText}`);
        }
           
    } 
    return pageManager;
}

export async function ProceedDeleteKiosk(page: Page): Promise<PageManager> {
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
        
        await allmodule.dashboardlk.click();
        await allmodule.dashboardiv.textContent();
        await allmodule.settings.click();
        await allmodule.settingsSN.click();
        await allmodule.kioskdiv.first().waitFor();
        const tbody = await allmodule.kioskName;
        const rows = tbody;  
        const rowCount = await rows.count();
        const kioskbutton0 = allmodule.removekiosk
        const kioskName2 = allmodule.kioskName2

        for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            // all <td> in this row
            const tdCells = row.locator(kioskName2);
            // get the first cell text
            const firstCellText = await tdCells.first().innerText();
            // check if it matches "OPD Registration"
            if (firstCellText.includes('IPD REG')) {
            // last cell of the row
            const lastCell = tdCells.last();
            const kioskbutton1 = lastCell;
            // button inside last cell 'button[title="Open Kiosk On New Window"]'
            const kioskButton = kioskbutton1.locator(kioskbutton0);
            // check visibility
        // await expect(kioskButton).toBeVisible();
            await kioskButton.click();
            await expect(allmodule.removekioskclick).toBeVisible();
            await allmodule.removekioskclick.click();
            await expect(allmodule.removekioskclick).toBeHidden();
            await expect(allmodule.confirmremove).toBeVisible();
            await expect(allmodule.buttonproceed).toBeVisible();
            await allmodule.buttonproceed.click();
        //  console.log(`Found button in row ${i} with Name of Kiosk = ${firstCellText}`);
            }
       
        } 
    return pageManager
}

















export async function openNewKioskWindow(page: Page): Promise<PageManager> {
     const pageManager = new PageManager(page);

    const allmodule = pageManager.qmeupFunction();

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

     return pageManager;
}