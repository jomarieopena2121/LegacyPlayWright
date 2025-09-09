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
    }
}