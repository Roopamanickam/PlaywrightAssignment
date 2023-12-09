import {test, chromium} from "@playwright/test";

test("To launch chrominum",async () => {
    //launch browser (one instance will be created)
    const browser = await chromium.launch({headless:false,channel:'chrome'})

    // get new browser context (window opening)
    const browserContext = await browser.newContext();

    //get new page (tab)
   const browserPage =  await browserContext.newPage();

   //Load page
   await browserPage.goto("http://leaftaps.com/opentaps/control/main");  
   
   //wait for 10sec
   await browserPage.waitForTimeout(5000);   

   //enter username
   await browserPage.locator('#username').fill('demosalesmanager');
   
   await browserPage.locator('#password').fill('crmsfa');
  
   await browserPage.locator('input.decorativeSubmit').click();
})