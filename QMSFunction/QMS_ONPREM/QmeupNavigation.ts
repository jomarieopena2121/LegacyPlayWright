import { Page,expect } from '@playwright/test';
import { PageManager } from '../../PageObjectModels/MainPageObjectModels';

export async function dashBoard(page:Page) {
    const pageManager = new PageManager(page);
    const navBar = pageManager.qmeupNavs();

    await navBar.dashboardlk.click();
    await navBar.dashboardiv.textContent();

    return pageManager;
}
export async function dashBoardAdmin(page:Page) {
    const pageManager = new PageManager(page);
    const navBar = pageManager.qmeupNavs();

    await navBar.dashboardiv.textContent();

    return pageManager;

}
export async function dashBoardDoctor (page: Page){
    const pageManager = new PageManager(page);
    const navBar = pageManager.qmeupNavs();
    await navBar.dbnorole.allTextContents();
    return pageManager;
}
export async function Settings (page: Page){
    const pageManager = new PageManager(page);
    const navBar = pageManager.qmeupNavs();

    await navBar.settings.click();
    return pageManager;
}
export async function KioskAdmin(page: Page) {
    const pageManager = new PageManager(page);
    const navBar = pageManager.qmeupNavs();

    await navBar.settingsSN.click();
    await expect(navBar.kioskdiv).toBeVisible();
    return pageManager;
}
export async function doctorModule(page:Page) {
    const pageManager = new PageManager(page);
    const navBar = pageManager.qmeupNavs();

    await navBar.docModule.click();
    await expect(navBar.docModulebody).toBeVisible();

    return pageManager;
}

export async function navigateDoctorRoom(page: Page){
    const pageManager = new PageManager(page);
    const navBar = pageManager.qmeupNavs();
    
    await expect(navBar.doctorRoom).toBeVisible();
    await navBar.doctorRoom.click();
    await expect(navBar.dctrRoomTitle).toBeVisible();
    return pageManager;
}