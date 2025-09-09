import { Page } from '@playwright/test'
import { BasedURL } from '../QMSClass/QmeupLogin';
import { KioskQR } from '../QMSClass/QmeupKiosk';
import { LoginAccount } from '../QMSClass/QmeupSignin';
import { settingsClass } from '../QMSClass/QmeupSettings';

export class PageManager {
    public page: Page;
    private BasedURL : BasedURL
    private landingPage : LoginAccount
    private settings: settingsClass;
    private qmskiosk: KioskQR;
    constructor (page: Page){
        this.page = page;
        this.BasedURL = new BasedURL(page);
        this.landingPage = new LoginAccount(this.page);
        this.qmskiosk = new KioskQR(this.page);
        this.settings = new settingsClass(page);
    }
    qmeupLogin(){
        return this.BasedURL;
    }
    qmeupLogin2(){
        return this.landingPage;
    }
    qmeupFunction(){
        return this.settings;
    }
    qmeupKiosk(){
        return this.qmskiosk;
    }
}
