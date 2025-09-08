import { test, expect, Locator, Page} from '@playwright/test'
import { AccountLogin } from '../../LegacyComponents/utils/datavariables';

export class BasedURL {
    page: Page
    signinPage: Locator;
   // kioskURL: Locator
    button: Locator

     constructor (page:any){
        this.page = page;
        this.signinPage = page.goto(AccountLogin.baseappurl);
        //this.kioskURL = page.goto(AccountLogin.kioskurl);
        this.button = page.getByRole ('button', { name: "I\'m a Doctor" });
    }
}
export class LoginAccount{
    
    page: Page
    email1: Locator
    pass: Locator
    button1: Locator
    constructor (page:any){
        this.page = page;
        this.email1 = page.getByLabel('Username or Email');
        this.pass = page.getByLabel('Password');
        this.button1 = page.locator("[type*='submit']");
    }
}
export class allmoduleFunction {

        page: Page
        dashboardlk: Locator
        dashboardiv: Locator
        settings: Locator
        settingsSN: Locator;
        kioskName: Locator
        kioskName2: Locator
        kioskName3: Locator
        kioskName4: Locator
        kioskbutton: Locator
        kioskdiv: Locator

    constructor (page: Page){
        this.page = page;
        this.dashboardlk = page.getByRole('link', { name: "Dashboard" });
        this.dashboardiv = page.locator('div', { hasText: "Patient for Today" } ).first().filter();
        this.settings = page.getByRole('link', { name: "Settings" });
        this.settingsSN = page.getByRole('link', { name: "Kiosk" });
        this.kioskName = page.locator("tbody");
        this.kioskName2 = page.locator("tr");
        this.kioskName3 = page.locator("td");
        this.kioskName4 = page.locator("th");
        this.kioskdiv = page.locator('div', { hasText: "KIOSKS" } ).first().filter();
        this.kioskbutton = page.locator('button[title="Open Kiosk On New Window"]').filter();
    }
}
export class KioskQR{
    page: Page
    kbgeneralsurgery: Locator
    constructor(page: Page){
        this.page = page
        this.kbgeneralsurgery = page.getByRole('button', {name: "GENERAL SURGERY"});
    }
}