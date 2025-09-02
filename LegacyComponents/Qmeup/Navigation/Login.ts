import { test, expect, Locator, Page} from '@playwright/test'
import { AccountLogin } from '../../../types/data'

export class LoginAccount{

    page: Page
    email: Locator
    pass: Locator
    button1: Locator
    constructor (page:any){

        this.page = page;
        this.email = page.locator("[type*='text']");
        this.pass = page.locator("[type*='password']");
        this.button1 = page.locator("[type*='submit']");

    }
    async gotoLogin(){
        const url = 'http://192.168.222.4:9096/';
        await this.page.goto(url);
        console.log(url); 
    }
    async accountLogin(accounts: AccountLogin){
        await this.page.getByRole ('button', {name: "I'm a Doctor"}).isVisible();
        await this.page.getByRole ('button', {name: "I'm a Doctor"}).click();
        await this.email.fill(accounts.accountemail);
        console.log(accounts.accountemail);
        await this.pass.fill(accounts.password);
        if(accounts.accountemail != accounts.accountemail && 
        accounts.password != accounts.password){
            console.log('Invalid Email and password', accounts);
        }
        await this.button1.click();
        await this.page.waitForLoadState("networkidle");

    }
}
module.exports = {LoginAccount}