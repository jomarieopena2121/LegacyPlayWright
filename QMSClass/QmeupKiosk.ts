import { Locator, Page} from '@playwright/test'
import { AccountLogin, getKiosKURL } from '../utils/datavariables';


export class KioskQR {
    page: Page
    title: Locator
    title2: Locator
    title3: Locator
    kbgeneralsurgery: Locator
    queuemeup: Locator
    qskip: Locator
    iframe: Locator
    constructor(page: any){
        this.page = page;
        this.title = page.getByRole('heading', { hasText: "OUR SERVICES" });
        this.kbgeneralsurgery = page.getByRole('button', { name: 'GENERAL SURGERY'});
        this.title2 = page.getByRole('heading', { hasText: 'SELECT AN OPTION'});
        this.queuemeup = page.getByRole('button', {name: 'Queue Me Up'});
        this.title3 = page.getByRole('heading', { hasText: 'Do you need special assistance?'});
        this.qskip = page.getByRole('button', { name: 'No, Skip This'});
        this.iframe = page.locator('iframe[src^="blob:"]');
       
    }
}


