import { Locator, Page} from '@playwright/test'

export class myAccounts {
    page: Page
    basicinformation: Locator
    changephoto: Locator
    getprefix: Locator
    getsuffix: Locator
    getlastname: Locator
    getfirstname: Locator
    getmiddlename: Locator
    getgender: Locator
    getCivilStatus: Locator
    getBdayType: Locator
    getBdayClick: Locator
    getsubscribetomailinglist: Locator
    get2fa: Locator
    enabledarkmode: Locator
    acposition: Locator
    acemail: Locator
    acusername: Locator
    acnicnkname: Locator
    acmobile: Locator
    acofficephone: Locator
    acextension: Locator
    acFaxNo: Locator


    constructor(page: any){
        this.page = page;
        this.basicinformation = page.getByRole('heading', { hasText: 'BASIC INFORMATION'});
        this.changephoto = page.getByLabel('CHANGE PHOTO');
        this.getprefix = page.getByLabel('PREFIX');
        this.getsuffix = page.getByLabel('SUFFIX');
        this.getlastname = page.getByLabel('Last Name');
        this.getfirstname = page.getByLabel('First Name');
        this.getmiddlename = page.getByLabel('Middle Name');
        this.getgender = page.getByLabel('Gender');
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getBdayType = page.getByLabel('Birthday (MM/DD/YYYY)');
        this.getBdayClick = page.getByRole('button', { name : 'Birthday (MM/DD/YYYY)'});
        this.getsubscribetomailinglist = page.getByLabel('Subscribe To Mailing List');
        this.get2fa = page.getByLabel('Two-Factor Authentication');
        this.enabledarkmode = page.getByLabel('Enable Dark Mode (BETA)');
        this.acposition = page.getByLabel('Position');
        this.acemail = page.getByLabel('Email');
        this.acusername = page.getByLabel('Username');
        this.acnicnkname = page.getByLabel('Nickname');
        this.acmobile = page.getByLabel('Mobile No.');
        this.acofficephone = page.getByLabel('Office Phone');
        this.acextension = page.getByLabel('Extension');
        this.acFaxNo = page.getByLabel('Fax No.');
    }
}

export class doctorInformation {
    page: Page

    constructor(page:any){
        this.page = page;
    }
}

export class doctorSetting {
    page: Page
    
    constructor(page:any){
        this.page = page;
    }
}

export class paymentDetails {
    page: Page

    constructor(page:any){
        this.page = page
    }
}