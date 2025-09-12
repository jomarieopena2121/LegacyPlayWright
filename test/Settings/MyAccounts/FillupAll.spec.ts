import { test } from "@playwright/test";
import { fillupAllInfoMale, uploadProfilePhoto, genderMale } from "../../../QMSFunction/QmeupMyAccount";
import { landingPage, pageLogins, userAccountAdmin } from "../../../QMSFunction/QmeupLogin";
import { PageManager } from "../../../PageObjectModels/MainPageObjectModels";
import { personalInfoMale } from "../../../utils/exportDatas";

test('Fill up all', async ({page})=> {
    const pageManager = new PageManager(page);
    const allmodule = pageManager.qmeupFunction();
    
    await landingPage(page);
    await pageLogins(page);
    await userAccountAdmin(page);
    await allmodule.dashboardlk.click();
    await allmodule.dashboardiv.textContent();
    await allmodule.settings.click();
    await uploadProfilePhoto(page);
    await fillupAllInfoMale(page, personalInfoMale);
    await genderMale(page);
})
