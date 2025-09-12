import { test, Page, expect } from '@playwright/test';
import { PageManager } from '../../PageObjectModels/MainPageObjectModels';
import { landingPage, pageLogins, userAccountAdmin } from '../../QMSFunction/QmeupLogin';
import { clickQRCode, getQR } from '../../QMSFunction/QmeupGetQRKiosk';
import { addKioskAllGroup, 
    openNewKioskWindow, 
    updateKiosk, 
    cancelDeleteKios, 
    ProceedDeleteKiosk 
} from '../../QMSFunction/QmeupCrudKiosk';

test('Login Get Kiosk using Admin Account', async ({page})=>{

    await landingPage(page);
    await pageLogins(page);
    await userAccountAdmin(page);
    await openNewKioskWindow(page);
        
}); 

test('Gettings Kiosk QR Number', async ({page}) => {
    
    await getQR(page);
    await clickQRCode(page);

});
test.describe('CRUD Kiosk', async ()=>{
    test('Add Kiosk', async({page})=>{
        const pageManager = new PageManager(page);
        const allmodule = pageManager.qmeupFunction();

        await landingPage(page);
        await pageLogins(page);
        await userAccountAdmin(page);
        await allmodule.dashboardlk.click();
        await allmodule.dashboardiv.textContent();
        await allmodule.settings.click();
        await allmodule.settingsSN.click();
        await addKioskAllGroup(page);

    })
    test('Updating of Kiosk', async({page})=>{
        await landingPage(page);
        await pageLogins(page);
        await userAccountAdmin(page);
        await updateKiosk(page);
    });
    test('Cancel Removing of Kiosk', async ({page})=> {

        await landingPage(page);
        await pageLogins(page);
        await userAccountAdmin(page);
        await cancelDeleteKios(page);

    });
    test('Proceed of Removing Kiosk',async ({page}) =>{

        await landingPage(page);
        await pageLogins(page);
        await userAccountAdmin(page);
        await ProceedDeleteKiosk(page);
        
    });
   
   
});