import { Page, expect} from '@playwright/test'
import { getKiosKURL } from '../utils/datavariables';
import { PageManager } from '../PageObjectModels/MainPageObjectModels';

export async function getQR(page: Page) {
    await page.goto(getKiosKURL.kioskurl);
}

export async function clickQRCode(page: Page): Promise<PageManager>{
    const pageManager = new PageManager(page);

    const qmeupPage = pageManager.qmeupKiosk();
    await expect(qmeupPage.title).toHaveText('OUR SERVICES');
    await expect(qmeupPage.title).toBeVisible();
    await qmeupPage.page.waitForLoadState('load');
    await qmeupPage.kbgeneralsurgery.isVisible();
    await qmeupPage.kbgeneralsurgery.click();
    await expect(qmeupPage.queuemeup).toBeVisible();
    await qmeupPage.queuemeup.click();
    await expect(qmeupPage.qskip).toBeVisible();
    await qmeupPage.qskip.click();
    await qmeupPage.iframe.isHidden();
    await expect(qmeupPage.iframe).toBeAttached();
    await expect(qmeupPage.iframe).toBeTruthy();

    return pageManager;
}