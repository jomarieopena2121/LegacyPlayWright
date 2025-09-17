import { expect, Page,} from '@playwright/test';
import { PageManager } from '../PageObjectModels/MainPageObjectModels';
import { personalInfooMale, personalInfooFemale, datePickers,birthDays2 } from '../utils/data';
import moment from "moment"
import * as path from 'path'
import { loadEnvFile } from 'process';

export async function uploadProfilePhoto(page:Page): Promise<PageManager> {
    const pageManager = new PageManager(page);
    
    const qmeupMyAccounts = pageManager.qmeupmyAccount()
    const filedirectory = path.resolve('C:\\Users\\Bizbox - PM\\OneDrive - BizBox Inc\\Documents\\luffy-wallpaper.jpg')
    await expect(qmeupMyAccounts.basicinformation).toBeVisible();
    await expect(qmeupMyAccounts.labelchangephoto).toBeVisible();
    await qmeupMyAccounts.labelchangephoto.click();
    await qmeupMyAccounts.changephoto.setInputFiles(filedirectory);
    await expect(qmeupMyAccounts.imageAlt).toBeVisible({timeout: 30000})
    await expect(qmeupMyAccounts.imageAlt).toHaveAttribute('src', /cdn\/storage\/photos/);

    return pageManager;

}
    /**Male Info Single */
export async function fillupAllInfoMale(page:Page,{ prefix, suffix, middlename }: personalInfooMale): Promise<PageManager>{
    const pageManager = new PageManager(page);
    
    const qmeupMyAccounts = pageManager.qmeupmyAccount()
    await expect(qmeupMyAccounts.getprefix).toBeVisible();
    await qmeupMyAccounts.getprefix.fill(prefix);
    await qmeupMyAccounts.getsuffix.fill(suffix);
    await qmeupMyAccounts.getmiddlename.fill(middlename);

    return pageManager;
}

    /**Female Info if Single */
export async function fillupAllInfoSingle(page:Page,{ prefix, middlename }: personalInfooMale): Promise<PageManager> {
    const pageManager = new PageManager(page);
    
    const qmeupMyAccounts = pageManager.qmeupmyAccount()
    await expect(qmeupMyAccounts.getprefix).toBeVisible();
    await qmeupMyAccounts.getprefix.fill(prefix);
    await qmeupMyAccounts.getmiddlename.fill(middlename);
    

    return pageManager;
}

     /**Female Info if has Husband */
export async function fillupAllInfoFemaleWife(page:Page,{ prefix, middlename }: personalInfooFemale): Promise<PageManager>{
    const pageManager = new PageManager(page); 
    const qmeupMyAccounts = pageManager.qmeupmyAccount()
   
    await expect(qmeupMyAccounts.getprefix).toBeVisible();
    await qmeupMyAccounts.getprefix.fill(prefix);
    await qmeupMyAccounts.getmiddlename.fill(middlename);
    
    return pageManager;
}

export async function genderMale(page:Page): Promise<PageManager>{
    const pageManager = new PageManager(page);
    
    const qmeupMyAccounts = pageManager.qmeupmyAccountMaleGender();
    await expect(qmeupMyAccounts.getgender).toBeVisible();
    await qmeupMyAccounts.getgender2.click({force: true});
    await expect(qmeupMyAccounts.gdMenuM).toBeVisible();
    await qmeupMyAccounts.gdMenuM.click();
    await qmeupMyAccounts.gdMenuM.isHidden();
    await expect(qmeupMyAccounts.gdMenuM).toBeVisible();

    return pageManager;
}

export async function genderFemale(page:Page): Promise<PageManager>{
    const pageManager = new PageManager(page);
    const qmeupMyAccounts = pageManager.qmeupmyAccountFemaleGender()
    
    await expect(qmeupMyAccounts.getgender).toBeVisible();
    await qmeupMyAccounts.getgender2.click({force: true});
    await expect(qmeupMyAccounts.gdMenuF).toBeVisible();
    await qmeupMyAccounts.gdMenuF.click();
    await qmeupMyAccounts.gdMenuF.isHidden();
    await expect(qmeupMyAccounts.gdMenuF).toBeVisible();
   
    return pageManager;
}
export async function Birthday(page: Page, { birthDays }: datePickers){
    const pageManager = new PageManager(page);
    const qmeupMyAccounts = pageManager.qmeupmyAccountBirthday();

    await expect(qmeupMyAccounts.bdayInput).toBeVisible();
    await qmeupMyAccounts.bdayInput.fill(birthDays);

    return pageManager;
}
export async function CalendarDay(page: Page, { year }: birthDays2){
    const pageManager = new PageManager(page);
    const qmeupMyAccounts = pageManager.qmeupmyAccountBirthday();
    await expect(qmeupMyAccounts.bdayButtonCalendar).toBeVisible();
    await qmeupMyAccounts.bdayButtonCalendar.click();
    await qmeupMyAccounts.bdaybtyear.click();
    await expect(qmeupMyAccounts.scrollviewyear).toBeVisible();
    await expect(qmeupMyAccounts.countdivyear).toBeVisible();

    const yearButtons = qmeupMyAccounts.btcountyear;
    const count = await yearButtons.count();

    for (let i = 0; i < count; i++) {
        const button = yearButtons.nth(i);
        const yearText = await button.innerText();
        const yearNumber = parseInt(yearText, 10);
        if (yearNumber === year) {
            await expect(button).toBeVisible();
            await button.scrollIntoViewIfNeeded();
            await button.click();
            console.log(`Clicked year: ${yearText}`);
            break; // stop after finding and clicking the right year
        }
    }
    return pageManager;
}
export async function selectDate(page:Page,{year, month}: birthDays2) {
    const pageManager = new PageManager(page);
    const qmeupMyAccounts = pageManager.qmeupmyAccountSelectDate();

    const targetDate = moment({ year, month: month - 1 });
    const targetLabel = targetDate.format("MMMM YYYY");

    // Current label from datepicker
    let labelText = (await qmeupMyAccounts.mmYY.textContent())?.trim()?? "";
    let currentDate = moment(labelText, "MMMM YYYY");
    // Navigate until we find the correct month/year
    while (labelText !== targetLabel) {
        // await expect(qmeupMyAccounts.prevDate).toBeVisible();
        // await qmeupMyAccounts.prevDate.click();
        // labelText = await qmeupMyAccounts.mmYY.textContent(); // refresh value
        if (targetDate.isBefore(currentDate, "month")) {
            // Go backward
            await expect(qmeupMyAccounts.prevDate).toBeVisible();
            await qmeupMyAccounts.prevDate.click();
        } else {
            // Go forward
            await expect(qmeupMyAccounts.forwardDate).toBeVisible();
            await qmeupMyAccounts.forwardDate.click();
        }
        labelText = (await qmeupMyAccounts.mmYY.textContent())?.trim() ?? "";
        currentDate = moment(labelText, "MMMM YYYY");
    }


    console.log("Selected month:", targetLabel);
    console.log("Target is before today?", targetDate.isBefore(moment(), "month"));
   
    return pageManager;
}