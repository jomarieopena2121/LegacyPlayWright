import { test, expect } from "@playwright/test";
import { fillupAllInfoMale, uploadProfilePhoto, genderMale, Birthday, CalendarDay } from "../../../QMSFunction/QmeupMyAccount";
import { landingPage, pageLogins, userAccountAdmin, } from "../../../QMSFunction/QmeupLogin";
import { PageManager } from "../../../PageObjectModels/MainPageObjectModels";
import { datePickerss, personalInfoMale} from "../../../utils/exportDatas";
import { birthDayss2 } from "../../../utils/exportDatas";
import { AccountLogin } from "../../../utils/datavariables";


test('Fill up all Admin Account', async ({page})=> {
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
    const bdaymodule = pageManager.qmeupmyAccountBirthday();
    await landingPage(page);
    await pageLogins(page);
    await userAccountAdmin(page,AccountLogin);
    await allmodule.dashboardlk.click();
    await expect(allmodule.dashboardiv).toBeVisible();
    await allmodule.settings.click();
    await uploadProfilePhoto(page);
    await fillupAllInfoMale(page, personalInfoMale);
    await genderMale(page);
    await Birthday(page, datePickerss);
    await CalendarDay(page, birthDayss2);
     await expect(bdaymodule.dateview).toBeVisible();
})

