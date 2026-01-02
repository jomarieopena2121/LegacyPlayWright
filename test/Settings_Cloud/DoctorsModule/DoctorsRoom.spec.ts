import { test, Page} from '@playwright/test'
import { landingPage, pageLogins, userAccountAdmin, cloudUserAccountAdmin, landingPageCloud } from '../../../QMSFunction/QMS_ONPREM/QmeupLogin';
import { AccountLogin} from "../../../utils/datavariables";
import { Settings, doctorModule, navigateDoctorRoom } from '../../../QMSFunction/QMS_ONPREM/QmeupNavigation';
import { AddDoctorsRoom, UpdateDoctorsRoom, RemoveDoctorsRoom } from '../../../QMSFunction/QMS_ONPREM/QmeupDoctorsRoom';
import { docRooms, updocRoom} from '../../../utils/exportDatas';
test.describe('Doctors Room CRUD', async ()=>{

    test('Adding Doctors Room', async ({page}) => {

        await landingPageCloud(page);
        await pageLogins(page);
        await cloudUserAccountAdmin(page, AccountLogin);
        await Settings(page);
        await doctorModule(page);
        await navigateDoctorRoom(page);
        await AddDoctorsRoom(page, docRooms);
    });
    test('Update Doctors Room', async ({page})=>{
        await landingPageCloud(page);
        await pageLogins(page);
        await cloudUserAccountAdmin(page, AccountLogin);
        await Settings(page);
        await doctorModule(page);
        await navigateDoctorRoom(page);
        await UpdateDoctorsRoom(page, updocRoom);
    });
    test('Remove Doctors Room', async ({page})=>{
        await landingPageCloud(page);
        await pageLogins(page);
        await cloudUserAccountAdmin(page, AccountLogin);
        await Settings(page);
        await doctorModule(page);
        await navigateDoctorRoom(page);
        await RemoveDoctorsRoom(page);    
    });
        
});