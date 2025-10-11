import { Locator, Page} from '@playwright/test'


export class NavBar {
    page: Page
    dashboardlk: Locator
    dashboardiv: Locator
    dbnorole: Locator
    settings: Locator
    settingsSN: Locator;
    basicinformation: Locator
    kioskdiv: Locator
    docModule: Locator
    docModulebody: Locator
    doctorRoom: Locator
    dctrRoomTitle: Locator
    constructor (page: any){
        this.page = page
        this.dashboardlk = page.getByRole('link', { name: "Dashboard" });
        this.dashboardiv = page.locator('div', { hasText: "Patient for Today" } ).first().filter();
        this.dbnorole = page.getByRole('paragraph', { name: "Sorry, you don't have access to this facility dashboard."});
        this.settings = page.getByRole('link', { name: "Settings" });
        this.settingsSN = page.getByRole('link', { name: "Kiosk" });
        this.basicinformation = page.getByRole('heading', { hasText: 'BASIC INFORMATION' });
        this.kioskdiv = page.getByText("KIOSKS");
        this.docModule = page.getByText('Doctor Module');
        this.docModulebody = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[1]/div/div[2]/div[2]');
        this.doctorRoom = page.getByRole('link', { name: "Doctor Room"});
        this.dctrRoomTitle = page.getByRole('heading', {name: "DOCTOR ROOMS"});
    }
}