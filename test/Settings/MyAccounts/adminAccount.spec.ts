import { test, expect } from "@playwright/test";
import { fillupAllInfoMale, uploadProfilePhoto, genderMale, Birthday, CalendarDay } from "../../../QMSFunction/QmeupMyAccount";
import { landingPage, pageLogins, userAccountAdmin,landingPageCloud } from "../../../QMSFunction/QmeupLogin";
import { PageManager } from "../../../PageObjectModels/MainPageObjectModels";
import { datePickerss, personalInfoMale} from "../../../utils/exportDatas";
import { birthDayss2 } from "../../../utils/exportDatas";
import { AccountLogin } from "../../../utils/datavariables";
import { dashBoard, Settings } from "../../../QMSFunction/QmeupNavigation";


test('Fill up all Admin Account', async ({page})=> {
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
    const bdaymodule = pageManager.qmeupmyAccountBirthday();
    //await landingPage(page);
    await landingPageCloud(page);
    await pageLogins(page);
    await userAccountAdmin(page,AccountLogin);
    await Settings(page);
    await uploadProfilePhoto(page);
    await fillupAllInfoMale(page, personalInfoMale);
    await genderMale(page);
    await Birthday(page, datePickerss);
    await CalendarDay(page, birthDayss2);
    await expect(bdaymodule.dateview).toBeVisible();
})

