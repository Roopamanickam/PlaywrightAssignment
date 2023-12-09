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
   await browserPage.goto("https://login.salesforce.com");  
   
   //wait for 5sec
   await browserPage.waitForTimeout(5000);
   
   //enter username
   await browserPage.locator('#username').fill('roopa@google.com');
   //enter password
   await browserPage.locator('#password').fill('Project@12345');

   //Click Login
   await browserPage.locator('#Login').click();

   //click toggle menu (xpath)
   //await browserPage.locator("(//div[@class='tooltipTrigger tooltip-trigger uiTooltip'])[6]").click();

   //click toggle menu (css)
   await browserPage.locator("div.slds-icon-waffle").click();

   //click view all
   await browserPage.locator("[aria-label='View All Applications']").click();
   //await browserPage.waitForTimeout(5000);

   //click individual
   await browserPage.locator("//p[text()='Individuals']").click();
   await browserPage.waitForTimeout(3000);
   console.log("click Individual");
   
  // click on individuals tab - need some help on this
   
          
})



