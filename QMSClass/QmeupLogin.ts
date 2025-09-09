import { test, expect, Locator, Page} from '@playwright/test'

export class BasedURL {
    page: Page
    signinPage: Locator;
    button: Locator
     constructor (page:any){
        this.page = page;
        this.signinPage = page;//.goto(AccountLogin.baseappurl);
        this.button = page.getByRole ('button', { name: "I\'m a Doctor" });
    }
}


