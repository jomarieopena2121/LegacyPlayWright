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
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
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
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getgender2 = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[1]/div/div[1]');
        this.gdMenuF = page.locator('//html/body/div[11]/div/div/div/div[2]/span');
        this.displayGender = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[1]/div/div[1]/div[1]/div[2]');
    }
}
export class birthdDay{
    page: Page
    bdayInput: Locator
    bdayButtonCalendar: Locator
    bdaybtcalback: Locator
    bdaybtyear: Locator
    btcountyear: Locator
    countdivyear: Locator
    scrollviewyear: Locator
    dateview: Locator
    constructor (page:any){
        this.page = page
        this.bdayInput = page.getByLabel('Birthday (MM/DD/YYYY)');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.bdayButtonCalendar = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[6]/div[2]/button');
        this.bdaybtcalback = page .locator('//html/body/div[5]/div/div[1]/div/div/div/div/div[2]/div[1]/div[1]/button[1]');
        this.bdaybtyear = page.locator('//html/body/div[5]/div/div[1]/div/div/div/div/div[1]/div[1]/div/div');
        this.btcountyear = page.locator('button:has(span)');
        this.countdivyear = page.locator('//html/body/div[5]/div/div[1]/div/div/div/div/div[2]/div[1]/div/div');
        this.scrollviewyear = page.locator('//html/body/div[5]/div/div[1]/div/div/div/div/div[2]/div[1]');
        this.dateview = page.locator('//html/body/div[5]/div/div[1]/div/div/div/div/div[2]/div[1]');
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
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
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
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getStatusSingle = page.locator('//html/body/div[11]/div/div/div/div[2]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csMarried {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getcsMarried: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If Elements has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getcsMarried = page.locator('//html/body/div[11]/div/div/div/div[3]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csWidowed {
     page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getscsWidowed: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getscsWidowed = page.locator('//html/body/div[11]/div/div/div/div[4]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csDefacto {
     page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getcsDefacto: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getcsDefacto = page.locator('//html/body/div[11]/div/div/div/div[5]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}

export class csTraditional {
     page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getcsTraditional: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getcsTraditional = page.locator('/html/body/div[11]/div/div/div/div[6]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csChild {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getcsChild: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getcsChild = page.locator('//html/body/div[11]/div/div/div/div[7]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csNewborn {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getcsNewborn: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getcsNewborn = page.locator('//html/body/div[11]/div/div/div/div[8]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csSeparation {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getcsSeparation: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getcsSeparation = page.locator('//html/body/div[11]/div/div/div/div[9]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class csAnnulled {
    page: Page
    getCivilStatus: Locator
    getCSbutton: Locator
    getcsAnnulled: Locator
    displayStatus: Locator
    constructor(page :any){
        this.page = page
        this.getCivilStatus = page.getByLabel('Civil Status');
        //Inspect -> Right click the element -> Click Copy Element -> Find Full XPATH
        //If the Element has no any attributes full xpath is used.
        this.getCSbutton = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]');
        this.getcsAnnulled = page.locator('//html/body/div[11]/div/div/div/div[10]/span')
        this.displayStatus = page.locator('//html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]');
    }
}
export class changeMyPass {
    page: Page
    changepassclicker: Locator
    changepasstext: Locator
    oldPassword: Locator
    newPassword: Locator
    confirmNewPass: Locator
    changepassButton: Locator
    changepassCancelbt: Locator
    constructor(page: any){
        this.page = page;
        this.changepassclicker = page.locator('button', { hasText: 'CHANGE MY PASSWORD'});
        this.changepasstext = page.getByRole('heading', { name: 'Change Password'});
        this.oldPassword = page.getByLabel('Old Password');
        this.newPassword = page.getByLabel('New Password');
        this.confirmNewPass = page.getByLabel('Confirm New Password');
        this.changepassButton = page.getByRole('button', { name: 'CHANGE PASSWORD'});
        this.changepassCancelbt = page.getByRole('button', { name: 'CANCEL'});
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