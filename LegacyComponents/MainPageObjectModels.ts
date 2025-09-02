import { Page } from '@playwright/test'
import { LoginAccount } from './Qmeup/Navigation/Login'


export class PageManager {
    public page: Page;
    private loginAccounts: LoginAccount;

    constructor (page: Page){
        this.page = page;
        this.loginAccounts = new LoginAccount(page);
    }

    qmeupLogin(){
        return this.loginAccounts;
    }
}
