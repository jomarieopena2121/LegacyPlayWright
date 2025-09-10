import { Page, expect} from '@playwright/test'
import { KioskQR } from "../QMSClass/QmeupKiosk";
import { getKiosKURL } from '../utils/datavariables';


export async function getQR(page: Page): Promise<KioskQR> {
    await page.goto(getKiosKURL.kioskurl);
    const qmeupPage = new KioskQR(page);
    await expect(qmeupPage.title).toHaveText('OUR SERVICES');
    await expect(qmeupPage.title).toBeVisible();
    return qmeupPage;
}