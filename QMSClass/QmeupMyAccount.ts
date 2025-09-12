import { Locator, Page} from '@playwright/test'

export class myAccounts {
    page: Page
    basicinformation: Locator
    imageAlt: Locator
    changephoto: Locator
    labelchangephoto: Locator
    getprefix: Locator
    getsuffix: Locator
    getlastname: Locator
    getfirstname: Locator
    getmiddlename: Locator
    
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
    changepass: Locator
    //clickbody: Locator

    constructor(page: any){
        this.page = page;
        this.basicinformation = page.getByRole('heading', { hasText: 'BASIC INFORMATION'});
        this.imageAlt = page.locator('img[src*="/cdn/storage/photos/"]');
        this.changephoto = page.locator('#changePhoto');
        this.labelchangephoto = page.locator('label[for="changePhoto"]');   
        this.getprefix = page.getByLabel('PREFIX');
        this.getsuffix = page.getByLabel('SUFFIX');
        this.getlastname = page.getByLabel('Last Name');
        this.getfirstname = page.getByLabel('First Name');
        this.getmiddlename = page.getByLabel('Middle Name');
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
        this.changepass = page.getByRole('button', {name: 'CHANGE MY PASSWORD'});
    }
}
export class maleGender {
    page:Page
    getgender: Locator
    getgender2: Locator
    gdMenuM: Locator
    displayGender: Locator

    constructor(page:any){
        this.page = page
        this.getgender = page.getByText('Gender');
        this.getgender2 = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[1]/div/div[1]');
        this.gdMenuM = page.locator('//html/body/div[11]/div/div/div/div[1]/span');
        this.displayGender = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[1]/div/div[1]/div[1]/div[2]');
    }
}

export class femaleGender {
     page:Page
    getgender: Locator
    getgender2: Locator
    gdMenuF: Locator
    displayGender: Locator

    constructor(page:any){
        this.page = page
        this.getgender = page.getByText('Gender');
        this.getgender2 = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[1]/div/div[1]');
        this.gdMenuF = page.locator('//html/body/div[11]/div/div/div/div[2]/span');
        this.displayGender = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[1]/div/div[1]/div[1]/div[2]');
    }
}

export class csCoHabit {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[1]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}

export class csSingle {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[2]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csMarried {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[3]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csWidowed {
     page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[4]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csDefacto {
     page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[5]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}

export class csTraditional {
     page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('/html/body/div[11]/div/div/div/div[6]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csChild {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[7]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csNewborn {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[8]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csSeparation {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[9]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csAnnulled {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getStatusSingle: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[10]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
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