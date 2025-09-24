import { test, expect } from "@playwright/test";
import { fillupAllInfoMale, uploadProfilePhoto, genderMale, 
    Birthday, 
    CalendarDay,
    selectDate, 
    otherInformation, 
    doctorInformation,
    doctorSettings,
} from "../../../QMSFunction/QmeupMyAccount";
import { PageManager } from "../../../PageObjectModels/MainPageObjectModels";
import { landingPage, pageLogins, doctorsAccount,landingPageCloud } from "../../../QMSFunction/QmeupLogin";
import { datePickerss, personalInfoMale, docInfo } from "../../../utils/exportDatas";
import { birthDayss2,  } from "../../../utils/exportDatas";
import { getConfig2 } from "../../../utils/config";
import { AccountLogin } from "../../../utils/datavariables";
import { dashBoard, Settings, dashBoardDoctor } from "../../../QMSFunction/QmeupNavigation";
test ('Fill up all Doctor Account', async ({page})=>{
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
   // await landingPage(page);
    await landingPageCloud(page);
    await pageLogins(page);
    await doctorsAccount(page, AccountLogin);
    await Settings(page);
    await uploadProfilePhoto(page);
    await fillupAllInfoMale(page, personalInfoMale);
    await genderMale(page);
    //await Birthday(page, datePickerss);
    await CalendarDay(page, birthDayss2);
    //await expect(bdaymodule.dateview).toBeVisible();
    
    await selectDate(page, birthDayss2);
    //await otherInformation(page, personalInfoMale);
    await doctorInformation(page, docInfo);
    await doctorSettings(page);
});