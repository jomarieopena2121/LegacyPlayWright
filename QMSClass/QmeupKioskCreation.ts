import { test, expect, Locator, Page} from '@playwright/test'

export class settingsClass {

        page: Page
        dashboardlk: Locator
        dashboardiv: Locator
        dbnorole: Locator
        settings: Locator
        settingsSN: Locator;
        kioskName: Locator
        kioskName2: Locator
        kioskbutton: Locator
        kioskdiv: Locator
        buttonaddkiosk: Locator
        addkiosk: Locator       
        updatekiosk: Locator
        updatebutton: Locator
        removekiosk: Locator
        removekioskclick: Locator
        buttoncancel: Locator
        buttonproceed: Locator
        confirmremove: Locator
        enterKioskN: Locator
        category: Locator
        kioskType: Locator
        greetings: Locator
        otherservices: Locator
        buttonAddKiosk: Locator
    constructor (page: any){
        this.page = page;
        this.dashboardlk = page.getByRole('link', { name: "Dashboard" });
        this.dashboardiv = page.locator('div', { hasText: "Patient for Today" } ).first().filter();
        this.dbnorole = page.getByRole('paragraph', { name: "Sorry, you don't have access to this facility dashboard."});
        this.settings = page.getByRole('link', { name: "Settings" });
        this.settingsSN = page.getByRole('link', { name: "Kiosk" });
        this.kioskName = page.locator('tbody tr');
        this.kioskName2 = page.locator('td');
        this.kioskdiv = page.locator('div', { hasText: "KIOSKS" } ).first().filter();
        this.kioskbutton = page.locator('button[title="Open Kiosk On New Window"]').filter();
        this.buttonaddkiosk = page.locator('//*[@id="root-node"]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/section[1]/div[2]/div/button');
        this.addkiosk = page.getByRole('heading', {name: 'Add Kiosk'});
        this.updatekiosk = page.getByRole('menuitem', {name: 'Update Kiosk'});
        this.updatebutton = page.getByRole('button', {name: 'Update'});
        this.removekiosk = page.locator('button:has(svg path[d*="M12 8c1.1"])');
        this.removekioskclick = page.getByText('Remove Kiosk');
        this.buttoncancel = page.getByRole('button', { name: 'Cancel' });
        this.buttonproceed = page.getByRole('button', {name: 'Proceed'})
        this.confirmremove = page.getByRole('heading', { name: 'Confirm Delete'});
        this.enterKioskN = page.getByLabel('Kiosk Name');
        this.category = page.getByLabel('Category');
        this.kioskType = page.getByLabel('Select Type');
        this.greetings = page.getByLabel('Greetings');
        this.otherservices = page.getByLabel('Show Other Services');
        this.buttonAddKiosk = page.getByRole('button', { name: 'Add'});
    }
}