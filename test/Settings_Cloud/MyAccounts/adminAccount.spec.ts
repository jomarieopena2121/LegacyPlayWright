import { test, expect } from "@playwright/test";
import { fillupAllInfoMale, uploadProfilePhoto, genderMale, Birthday, CalendarDay } from "../../../QMSFunction/QMS_ONPREM/QmeupMyAccount";
import { landingPage, pageLogins, userAccountAdmin,landingPageCloud, cloudUserAccountAdmin} from "../../../QMSFunction/QMS_ONPREM/QmeupLogin";
import { PageManager } from "../../../PageObjectModels/MainPageObjectModels";
import { datePickerss, personalInfoMale} from "../../../utils/exportDatas";
import { birthDayss2 } from "../../../utils/exportDatas";
import { AccountLogin } from "../../../utils/datavariables";
import { dashBoard, Settings } from "../../../QMSFunction/QMS_ONPREM/QmeupNavigation";


test('Fill up all Admin Account', async ({page})=> {
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
    const bdaymodule = pageManager.qmeupmyAccountBirthday();
    await landingPageCloud(page);
    await pageLogins(page);
    await cloudUserAccountAdmin(page, AccountLogin);
    await Settings(page);
    await uploadProfilePhoto(page);
    await fillupAllInfoMale(page, personalInfoMale);
    await genderMale(page);
    await Birthday(page, datePickerss);
    await CalendarDay(page, birthDayss2);
    await expect(bdaymodule.dateview).toBeVisible();
})

