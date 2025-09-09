import { test, expect, Locator, Page} from '@playwright/test'

export class LoginAccount{
    
    page: Page
    email1: Locator
    pass: Locator
    button1: Locator
    constructor (page:Page){
        this.page = page;
        this.email1 = page.getByLabel('Username or Email');
        this.pass = page.getByLabel('Password');
        this.button1 = page.locator("[type*='submit']");
    }
}