import { test, Page, expect } from '@playwright/test';
import { PageManager } from '../../../PageObjectModels/MainPageObjectModels';
import { landingPage, pageLogins, userAccountAdmin, landingPageCloud } from '../../../QMSFunction/QmeupLogin';
import { clickQRCode, getQR  } from '../../../QMSFunction/QmeupGetQRKiosk';
import { addKioskAllGroup, 
    openNewKioskWindow, 
    updateKiosk, 
    cancelDeleteKiosk, 
    ProceedDeleteKiosk 
} from '../../../QMSFunction/QmeupCrudKiosk';
import { AccountLogin } from '../../../utils/datavariables';
import { dashBoard, KioskAdmin, Settings } from '../../../QMSFunction/QmeupNavigation';
test('Login Get Kiosk using Admin Account', async ({page})=>{

    //await landingPage(page);
    await landingPageCloud(page)
    await pageLogins(page);
    await userAccountAdmin(page, AccountLogin);
    await Settings(page);
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
        await userAccountAdmin(page, AccountLogin);
      //  await dashBoard(page);
        await Settings(page);
        await KioskAdmin(page);
        await addKioskAllGroup(page);

    })
    test('Updating of Kiosk', async({page})=>{
        await landingPage(page);
        await pageLogins(page);
        await userAccountAdmin(page, AccountLogin);
        await Settings(page);
        await KioskAdmin(page);
        await updateKiosk(page);
    });
    test('Cancel Removing of Kiosk', async ({page})=> {

        await landingPage(page);
        await pageLogins(page);
        await userAccountAdmin(page, AccountLogin);
        await Settings(page);
        await KioskAdmin(page);
        await cancelDeleteKiosk(page);

    });
    test('Proceed of Removing Kiosk',async ({page}) =>{

        await landingPage(page);
        await pageLogins(page);
        await userAccountAdmin(page, AccountLogin);
        await Settings(page);
        await KioskAdmin(page);
        await ProceedDeleteKiosk(page);
        
    });
   
   
});