import { test, Page, expect } from '@playwright/test';
import { PageManager } from '../../../PageObjectModels/MainPageObjectModels';
import { landingPage, pageLogins, userAccountAdmin, landingPageCloud, cloudUserAccountAdmin } from '../../../QMSFunction/QMS_ONPREM/QmeupLogin';
import { clickQRCode, getQR  } from '../../../QMSFunction/QMS_ONPREM/QmeupGetQRKiosk';
import { addKioskAllGroup, 
    openNewKioskWindow, 
    updateKiosk, 
    cancelDeleteKiosk, 
    ProceedDeleteKiosk,
    samplePagination
} from '../../../QMSFunction/QMS_ONPREM/QmeupCrudKiosk';
import { AccountLogin } from '../../../utils/datavariables';
import { dashBoard, KioskAdmin, Settings } from '../../../QMSFunction/QMS_ONPREM/QmeupNavigation';
test('Login Get Kiosk using Admin Account', async ({page})=>{

    await landingPageCloud(page)
    await pageLogins(page);
    await cloudUserAccountAdmin(page, AccountLogin);
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
        await landingPageCloud(page);
        await pageLogins(page);
        await cloudUserAccountAdmin(page, AccountLogin);
      //  await dashBoard(page);
        await Settings(page);
        await KioskAdmin(page);
        await addKioskAllGroup(page);

    })
    test('Updating of Kiosk', async({page})=>{
        await landingPageCloud(page);
        await pageLogins(page);
        await cloudUserAccountAdmin(page, AccountLogin);
        await Settings(page);
        await KioskAdmin(page);
        await samplePagination(page);
    });
    test('Cancel Removing of Kiosk', async ({page})=> {

        await landingPageCloud(page);
        await pageLogins(page);
        await cloudUserAccountAdmin(page, AccountLogin);
        await Settings(page);
        await KioskAdmin(page);
        await cancelDeleteKiosk(page);

    });
    test('Proceed of Removing Kiosk',async ({page}) =>{

        await landingPageCloud(page);
        await pageLogins(page);
        await cloudUserAccountAdmin(page, AccountLogin);
        await Settings(page);
        await KioskAdmin(page);
        await ProceedDeleteKiosk(page);
        
    });
   
   
});