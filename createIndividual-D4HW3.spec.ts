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
   
   //click dropdown icon in individual tab
   //await browserPage.locator("(//a[@class='slds-button slds-button_reset'])[last()]").click();
    await browserPage.click('[title="New"]');
  
    console.log("click nEW BUTTON");

   //enter last name
    const lastName = "Manick"
   await browserPage.getByPlaceholder('Last Name').fill(lastName);
   console.log("entered lastname");

   //const lastName = await browserPage.locator("//input[@placeholder='Last Name']").innerText();
   //console.log("lastname Entered:"+lastName);

    //click save
    await browserPage.locator("//button[@title='Save']").click();
    console.log("save clicked");

     //verify individual name
     const indName = await browserPage.locator("//div[text()='Individual']/following-sibling::div").innerText();
     console.log("Individual Name:" +indName);

     if(lastName == indName){
      console.log("Individual created successfully");
     }


  


   /*
   //click New individual
   await browserPage.locator("//span[text()='New Individual']").click();
   console.log("click New Individual ");
       
     */
          
})



