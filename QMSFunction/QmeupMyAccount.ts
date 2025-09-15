import { expect, Page } from '@playwright/test';
import { PageManager } from '../PageObjectModels/MainPageObjectModels';
import { personalInfooMale, personalInfooFemale, datePickers,birthDays2 } from '../utils/data';
import * as path from 'path'

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
    
    const qmeupMyAccounts = pageManager.qmeupmyAccountMaleGender()
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

    return pageManager
}
export async function btCalendarbDay(page: Page, { year }: birthDays2){
    const pageManager = new PageManager(page);
    const qmeupMyAccounts = pageManager.qmeupmyAccountBirthday();

    await expect(qmeupMyAccounts.bdayInput).toBeVisible();
    await expect(qmeupMyAccounts.bdayButtonCalendar).toBeVisible();
    await qmeupMyAccounts.bdayButtonCalendar.click();
    await qmeupMyAccounts.bdaybtyear.click();
    const yearcount = await qmeupMyAccounts.countdivyear;
    const divyear = yearcount;
    const divyearcount = await divyear.count()
    const yearbutton = await qmeupMyAccounts.btcountyear;
    const grid = yearbutton;
       for(let i = 0; i < divyearcount; i++){
        const scroll = divyear.nth(i);
        const birthcount = await scroll.locator(grid);
        const birthyearcount = await birthcount.last().innerText();
        if(birthyearcount.includes(year)){
            const currentyear = birthcount.first();
            const btncuryear = currentyear;
            const btncuryear2 = btncuryear.locator(grid);
            await expect(btncuryear2).toBeVisible();
        }
        console.log(`${birthyearcount}`);
    }
    // const btnyearcount = await qmeupMyAccounts.btcountyear;
    // const btncountyear = btnyearcount;
    // const btnyear1 = await btncountyear.count()

    // for (let i = 0; i < btnyear1; i++){
    //     const countyears = btncountyear.nth(i);
    //     const countcellyears = countyears.locator(btnyearcount);
    //     const dateyearpicker = await countcellyears.last().innerText();
    //     if(dateyearpicker === year){
    //         const currentCell = countcellyears.first();
    //         const clickyear = currentCell;
    //         const yearclickcurrent = clickyear.locator(btnyearcount);
    //         await yearclickcurrent.scrollIntoViewIfNeeded();
    //         await expect(yearclickcurrent).toBeVisible();
            
    //     }
    //     break;
    // }
    return pageManager
}