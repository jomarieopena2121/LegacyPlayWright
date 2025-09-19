import { Page } from '@playwright/test'
import { BasedURL } from '../QMSClass/QmeupLogin';
import { KioskQR } from '../QMSClass/QmeupKiosk';
import { LoginAccount } from '../QMSClass/QmeupSignin';
import { QmeupKioskCreation } from '../QMSClass/QmeupKioskCreation';
import { birthdDay, changeMyPass, doctorInformation, doctorSetting, femaleGender, maleGender, myAccounts, selectDate } from '../QMSClass/QmeupMyAccount';
import { changePass } from '../utils/data';
import { doctorSettings } from '../QMSFunction/QmeupMyAccount';
import { doctorsRoom } from '../QMSClass/QmeupDoctorsModule';
import { NavBar } from '../QMSClass/QmeupNavbar';

export class PageManager {
    public page: Page;
    private BasedURL : BasedURL
    private landingPage : LoginAccount
    private navBar: NavBar
    private settings: QmeupKioskCreation;
    private qmskiosk: KioskQR;
    private qmsMyAccounts: myAccounts
    private qmsmyAccountMaleGender: maleGender
    private qmsMyAccountFemaleGender: femaleGender
    private qmsMyAccountBday: birthdDay
    private qmsSelectDate: selectDate
    private qmsChangePass: changeMyPass
    private qmsDoctorInfo: doctorInformation
    private qmsDoctorSettings: doctorSetting
    private qmsDoctorRoom: doctorsRoom
    constructor (page: Page){
        this.page = page;
        this.BasedURL = new BasedURL(page);
        this.landingPage = new LoginAccount(page);
        this.qmskiosk = new KioskQR(page);
        this.navBar = new NavBar(page)
        this.settings = new QmeupKioskCreation(page);
        this.qmsMyAccounts = new myAccounts(page);
        this.qmsmyAccountMaleGender = new maleGender(page)
        this.qmsMyAccountFemaleGender = new femaleGender(page)
        this.qmsMyAccountBday = new birthdDay(page);
        this.qmsSelectDate = new selectDate(page);
        this.qmsChangePass = new changeMyPass(page);
        this.qmsDoctorInfo = new doctorInformation(page);
        this.qmsDoctorSettings = new doctorSetting(page);
        this.qmsDoctorRoom = new doctorsRoom(page);
    }
    // qmeupLogin(){
    //     return this.BasedURL;
    // }
    qmeupLogin2(){
        return this.landingPage;
    }
    qmeupNavs(){
        return this.navBar
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
        return this.qmsMyAccountFemaleGender;
    }
    qmeupmyAccountBirthday(){
        return this.qmsMyAccountBday;
    }
    qmeupmyAccountSelectDate(){
        return this.qmsSelectDate;
    }
    qmeupmyAccountChangePass(){
        return this.qmsChangePass;
    }
    qmeupmyAccountDocInfo(){
        return this.qmsDoctorInfo;
    }
    qmeupmyAccountDocSettings(){
        return this.qmsDoctorSettings;
    }
    qmeupDMDoctorsRoom(){
        return this.qmsDoctorRoom;
    }
}
