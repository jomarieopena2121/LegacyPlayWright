import { test } from '@playwright/test';
import { PageManager } from '../LegacyComponents/MainPageObjectModels'

const dataset = JSON.parse(JSON.stringify(("../data.json")));
test.describe('Login Admin Account', async ()=>{
    test('Click Im a Doctor', async ({page})=>{
        const loginPage = new PageManager(page);
        const qmeuplogin = loginPage.qmeupLogin();
        await qmeuplogin.gotoLogin();
        await qmeuplogin.accountLogin(dataset.LoginInQmeup);
    });
});