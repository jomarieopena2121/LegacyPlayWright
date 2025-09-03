import { Page } from '@playwright/test'
import { BasedURL, LoginAccount, allmoduleFunction } from './QMEUP/QmeupLogin';


export class PageManager {
    public page: Page;
    private BasedURL : BasedURL
    private urlSignIn : LoginAccount
    private allmoduleFunction: allmoduleFunction

    constructor (page: Page){
        this.page = page;
        this.BasedURL = new BasedURL(page);
        this.urlSignIn = new LoginAccount(page);
        this.allmoduleFunction = new allmoduleFunction(page);
    }
    qmeupLogin(){
        return this.BasedURL;
    }
    qmeupLogin2(){
        return this.urlSignIn;
    }
    qmeupFunction(){
        return this.allmoduleFunction
    }
}
