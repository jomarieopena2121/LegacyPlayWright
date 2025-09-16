import { test, expect } from "@playwright/test";
import { fillupAllInfoMale, uploadProfilePhoto, genderMale, Birthday, CalendarDay } from "../../../QMSFunction/QmeupMyAccount";
import { PageManager } from "../../../PageObjectModels/MainPageObjectModels";
import { landingPage, pageLogins, doctorsAccount } from "../../../QMSFunction/QmeupLogin";
import { datePickerss, personalInfoMale } from "../../../utils/exportDatas";
import { birthDayss2 } from "../../../utils/exportDatas";
import { getConfig2 } from "../../../utils/config";
import { AccountLogin } from "../../../utils/datavariables";

test ('Fill up all Doctor Account', async ({page})=>{
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
    await landingPage(page);
    await pageLogins(page);
    await doctorsAccount(page, AccountLogin);
    await expect(allmodule.dashboardlk).toBeVisible();
    await allmodule.dashboardlk.click();
    await allmodule.dbnorole.allTextContents();
    await allmodule.settings.click();
    await uploadProfilePhoto(page);
    await fillupAllInfoMale(page, personalInfoMale);
    await genderMale(page);
    //await Birthday(page, datePickerss);
    await CalendarDay(page, birthDayss2);
})