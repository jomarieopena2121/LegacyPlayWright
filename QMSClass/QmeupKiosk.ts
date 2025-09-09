import { Locator, Page} from '@playwright/test'
import { AccountLogin, getKiosKURL } from '../utils/datavariables';


export class KioskQR{
    page: Page
   
    title: Locator
    kbgeneralsurgery: Locator
    constructor(page: any){
        this.page = page;
        this.title = page.locator('div', {hasText: "OUR SERVICES"});
        this.kbgeneralsurgery = page.getByRole('button', {name: "GENERAL SURGERY"});
    }

}

