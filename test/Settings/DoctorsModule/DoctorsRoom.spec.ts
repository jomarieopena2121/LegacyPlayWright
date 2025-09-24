import { test, Page} from '@playwright/test'
import { landingPage, pageLogins, userAccountAdmin, cloudUserAccountAdmin, landingPageCloud } from '../../../QMSFunction/QmeupLogin';
import { AccountLogin} from "../../../utils/datavariables";
import { Settings, doctorModule, navigateDoctorRoom } from '../../../QMSFunction/QmeupNavigation';
import { AddDoctorsRoom, UpdateDoctorsRoom, RemoveDoctorsRoom } from '../../../QMSFunction/QmeupDoctorsRoom';
import { docRooms, updocRoom} from '../../../utils/exportDatas';
test.describe('Doctors Room CRUD', async ()=>{
    test('Adding Doctors Room', async ({page}) => {
       // await landingPage(page);
       await landingPageCloud(page);
        await pageLogins(page);
        await userAccountAdmin(page, AccountLogin);
        await Settings(page);
        await doctorModule(page);
        await navigateDoctorRoom(page);
        await AddDoctorsRoom(page, docRooms);
    });
    test('Update Doctors Room', async ({page})=>{
        await landingPage(page);
        await pageLogins(page);
        //await userAccountAdmin(page, AccountLogin);
        await cloudUserAccountAdmin(page, AccountLogin);
        await Settings(page);
        await doctorModule(page);
        await navigateDoctorRoom(page);
        await UpdateDoctorsRoom(page, updocRoom);
    });
    test('Remove Doctors Room', async ({page})=>{
        await landingPage(page);
        await pageLogins(page);
        await userAccountAdmin(page, AccountLogin);
        await Settings(page);
        await doctorModule(page);
        await navigateDoctorRoom(page);
        await RemoveDoctorsRoom(page);    
    });
        
});