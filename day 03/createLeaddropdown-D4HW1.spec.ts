import {test, chromium} from "@playwright/test";
import { log } from "console";

test("To launch chrominum",async () => {
    //launch browser (one instance will be created)
    const browser = await chromium.launch({headless:false,channel:'chrome'})

    // get new browser context (window opening)
    const browserContext = await browser.newContext();

    //get new page (tab)
   const browserPage =  await browserContext.newPage();

   //Load page
   await browserPage.goto("https://login.salesforce.com");  
   
   //wait for 5sec
   await browserPage.waitForTimeout(5000);
   

   //enter username
   await browserPage.locator('#username').fill('roopa@google.com');
   //enter password
   await browserPage.locator('#password').fill('Project@12345');
   //Click Login
   await browserPage.locator('#Login').click();


   //click toggle menu
   await browserPage.locator("(//div[@class='tooltipTrigger tooltip-trigger uiTooltip'])[6]").click();
   //await browserPage.waitForTimeout(3000);
   //await browserPage.locator("div[class=tooltipTrigger tooltip-trigger uiTooltip]").nth(6).click();

   //click view all
   await browserPage.locator("//button[text()='View All']").click();
   //await browserPage.waitForTimeout(5000);

   //click sales 
   await browserPage.locator("//p[text()='Sales']").click();
  // await browserPage.waitForLoadState("load");
   await browserPage.waitForTimeout(5000);

   //click Leads
   await browserPage.locator("//span[text()='Leads']").click();
   console.log("clicked Leads");

   //click New button
   //await browserPage.locator("((//div[@role='group'])[3]/button)[1]").click();
   await browserPage.locator("//a[@title='New']").click();
   console.log("clicked New  button");

   //click Salutaion
   await browserPage.locator("//label[text()='Salutation']/parent::div/div").click();
   console.log("saluation dropdown");

   await browserPage.locator("//lightning-base-combobox-item[@data-value='Mr.']").click();
   console.log("selected Mr");

   //enter lastname
   const lname = "Anand";
   await browserPage.locator("//input[@placeholder='Last Name']").fill(lname);
   console.log("lastname entered");

   //enter companyName
   await browserPage.locator("//input[@name='Company']").fill("Google");
   console.log("CompanyName entered");

   //enter Save button
   await browserPage.locator("//button[@name='SaveEdit']").click();
   console.log("saved the record");
   
     //verify leads name 
     const leadName = await browserPage.locator("//lightning-formatted-name[@slot='primaryField']").innerText();
     console.log(leadName);

     if(leadName.toLowerCase().includes(lname.toLowerCase()) ){
        console.log("Lead created successfully");
     }
  
})