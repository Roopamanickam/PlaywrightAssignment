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
   await browserPage.waitForTimeout(2000);
   

   //enter username
  // await browserPage.locator('#username').fill('demosalesmanager');
   await browserPage.getByLabel('username').fill('demosalesmanager');
   
   await browserPage.locator('#password').fill('crmsfa');
   await browserPage.locator('input.decorativeSubmit').click();


   //click CRM/SFA
   const crmsfaTxt =  browserPage.locator("text=CRM/SFA");
  
   console.log(await crmsfaTxt .innerText());

   await crmsfaTxt.click();

   const url = browserPage.url();
   console.log(`The URL is :url`);
   console.log(`The page title is : +await browserPage.title()`);

   //click Leads
   browserPage.locator("text=Leads");

   await browserPage.getByText('Create Lead').click();
   await browserPage.waitForLoadState("load");
    // enter values in create lead
   await browserPage.locator('#createLeadForm_companyName').fill('Nokia');
   await browserPage.locator('#createLeadForm_firstName').fill('Ramya');
   await browserPage.locator('#createLeadForm_lastName').fill('Rajan');
   //click submit button
    browserPage.locator('input.smallSubmit').click();
    console.log("create Lead button clicked");
    await browserPage.waitForLoadState("load");

    //check the status
    const leadStatus =  browserPage.locator('#viewLead_statusId_sp');

    const statusLead = await leadStatus.innerText();
    console.log("The Status is "+ statusLead);
   
})