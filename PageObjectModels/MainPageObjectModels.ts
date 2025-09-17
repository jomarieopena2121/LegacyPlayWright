import { Page } from '@playwright/test'
import { BasedURL } from '../QMSClass/QmeupLogin';
import { KioskQR } from '../QMSClass/QmeupKiosk';
import { LoginAccount } from '../QMSClass/QmeupSignin';
import { settingsClass } from '../QMSClass/QmeupKioskCreation';
import { birthdDay, femaleGender, maleGender, myAccounts, selectDate } from '../QMSClass/QmeupMyAccount';

export class PageManager {
    public page: Page;
    private BasedURL : BasedURL
    private landingPage : LoginAccount
    private settings: settingsClass;
    private qmskiosk: KioskQR;
    private qmsMyAccounts: myAccounts
    private qmsmyAccountMaleGender: maleGender
    private qmsMyAccountFemaleGender: femaleGender
    private qmsMyAccountBday: birthdDay
    private qmsSelectDate: selectDate
    constructor (page: Page){
        this.page = page;
        this.BasedURL = new BasedURL(page);
        this.landingPage = new LoginAccount(this.page);
        this.qmskiosk = new KioskQR(this.page);
        this.settings = new settingsClass(page);
        this.qmsMyAccounts = new myAccounts(page);
        this.qmsmyAccountMaleGender = new maleGender(page)
        this.qmsMyAccountFemaleGender = new femaleGender(page)
        this.qmsMyAccountBday = new birthdDay(page);
        this.qmsSelectDate = new selectDate(page);
    }
    // qmeupLogin(){
    //     return this.BasedURL;
    // }
    qmeupLogin2(){
        return this.landingPage;
    }
    qmeupFunction(){
        return this.settings;
    }
    qmeupKiosk(){
        return this.qmskiosk;
    }
    qmeupmyAccount(){
        return this.qmsMyAccounts;
    }
    qmeupmyAccountMaleGender(){
        return this.qmsmyAccountMaleGender;
    }
    qmeupmyAccountFemaleGender(){
        return this.qmsMyAccountFemaleGender
    }
    qmeupmyAccountBirthday(){
        return this.qmsMyAccountBday
    }
    qmeupmyAccountSelectDate(){
        return this.qmsSelectDate
    }
}
