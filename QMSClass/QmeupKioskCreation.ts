import { test, expect, Locator, Page} from '@playwright/test'

export class settingsClass {

        page: Page
        dashboardlk: Locator
        dashboardiv: Locator
        settings: Locator
        settingsSN: Locator;
        kioskName: Locator
        kioskName2: Locator
        kioskbutton: Locator
        kioskdiv: Locator
        buttonaddkiosk: Locator
        addkiosk: Locator
      //  removekiosk: Locator
        enterKioskN: Locator
        category: Locator
        kioskType: Locator
        greetings: Locator
        otherservices: Locator
        buttonAddKiosk: Locator
    constructor (page: Page){
        this.page = page;
        this.dashboardlk = page.getByRole('link', { name: "Dashboard" });
        this.dashboardiv = page.locator('div', { hasText: "Patient for Today" } ).first().filter();
        this.settings = page.getByRole('link', { name: "Settings" });
        this.settingsSN = page.getByRole('link', { name: "Kiosk" });
        this.kioskName = page.locator('tbody tr');
        this.kioskName2 = page.locator('td');
        this.kioskdiv = page.locator('div', { hasText: "KIOSKS" } ).first().filter();
        this.kioskbutton = page.locator('button[title="Open Kiosk On New Window"]').filter();
        this.buttonaddkiosk = page.locator('//*[@id="root-node"]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/section[1]/div[2]/div/button');
        this.addkiosk = page.getByRole('heading', {name: 'Add Kiosk'});
       // this.removekiosk = page.locator('/html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/section[2]/div/div[2]/table/tbody/tr[6]/td[6]/div/div/div/button');
        this.enterKioskN = page.getByLabel('Kiosk Name');
        this.category = page.getByLabel('Category');
        this.kioskType = page.getByLabel('Select Type');
        this.greetings = page.getByLabel('Greetings');
        this.otherservices = page.getByLabel('Show Other Services');
        this.buttonAddKiosk = page.getByRole('button', { name: 'Add'});
    }
}