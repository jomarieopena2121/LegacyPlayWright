import { Locator, Page} from '@playwright/test'

export class doctorsRoom {
    page: Page
    btndctrAddRM: Locator
    hdAddRM: Locator
    addRM: Locator
    addRmrk: Locator
    dctrRMSV: Locator
    dctrRMNAME: Locator
    dctrRMNAME2: Locator
    btndctr: Locator
    updbody: Locator
    menuDctrRoom: Locator
    updateDoctorsRoom: Locator
    dctrRMUPD: Locator
    rmvdctrRM: Locator
    btncnDctrRM: Locator
    finalRemove: Locator
    constructor(page: Page){
        this.page = page;
        this.btndctrAddRM = page.locator('button[value="Add"]');
        this.hdAddRM = page.getByRole('heading', { name: 'Add Doctor Room'});
        this.addRM = page.getByLabel('Room name');
        this.addRmrk = page.getByLabel('Remarks');
        this.dctrRMSV = page.getByRole('button', { name: 'SAVE'});
        this.dctrRMNAME = page.locator('tbody tr');
        this.dctrRMNAME2 = page.locator('td');
        this.btndctr = page.locator('button:has(svg path[d*="M12 8c1.1"])');
        this.updbody = page.locator('//html/body/div[5]/div/div[1]/div/div');
        this.updateDoctorsRoom = page.getByRole('menuitem', {name: 'Update Room'});
        this.menuDctrRoom = page.locator('//html/body/div[7]/div/div/div/div/div');
        this.dctrRMUPD = page.getByRole('button', { name: "UPDATE" });
        this.rmvdctrRM = page.getByRole('menuitem', {name: "Remove Room "});
        this.btncnDctrRM = page.getByRole('button', { name: 'CANCEL' });
        this.finalRemove = page.getByRole('button', { name: "REMOVE" });
    }
}