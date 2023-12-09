import{test,chromium} from "@playwright/test";
import log from "console";


test("edit Lead", async()  => {
    
      //launch browser (one instance will be created)
      const browser = await chromium.launch({headless:false,channel:'chrome'})

      // get new browser context (window opening)
      const browserContext = await browser.newContext();
  
      //get new page (tab)
     const browserPage =  await browserContext.newPage();
  
     //Load page
     await browserPage.goto("http://leaftaps.com/opentaps/control/main"); 
     
     //enter username
     await browserPage.locator('#username').fill('demosalesmanager');
   
     await browserPage.locator('#password').fill('crmsfa');
  
     await browserPage.locator("//input[@value='Login']").click();

     await browserPage.locator("//a[contains(text(),'CRM/SFA')]").click();

     //click Leads
     await browserPage.locator("//a[contains(text(),'Leads')]").click();

     await browserPage.locator("//a[contains(text(),'Create Lead')]").click();

    //enter companyName,

     await browserPage.locator('#createLeadForm_companyName').fill('Apple');

     await browserPage.locator('#createLeadForm_firstName').fill('Dhan');

     await browserPage.locator('#createLeadForm_lastName').fill('Anan');

     await browserPage.locator("//input[@name = 'submitButton']").click();
     console.log("lead submitted");

     await browserPage.locator("//a[text()='Edit']").click();
     console.log("edit butttn clicked");

     await browserPage.locator('#updateLeadForm_companyName').fill('Orange');
     console.log("company name changed");
     await browserPage.locator("//input[@value='Update']").click();
     console.log(" update button clicked");     
     
})



