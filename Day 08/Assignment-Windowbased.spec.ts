import{expect, test} from "@playwright/test";

test("validate title and Url",async({page,context}) =>{
//Load Url
    await page.goto("https://login.salesforce.com/");
    await page.waitForTimeout(5000); 
 //enter username
 await page.locator('#username').fill('roopa@google.com');
 //enter password
 await page.locator('#password').fill('Project@12345');
   //Click Login
   await page.locator('#Login').click();
   await page.waitForTimeout(3000);
   //create a Promise before clicking learn more button
   const windowPromise = context.waitForEvent('page');
    //ClicK 'Learn More' button under Mobile Publisher
    await page.locator("//span[text()='Learn More']").click();
   //Resolve the promise
   const window = await windowPromise;  
   //Click 'Confirm' 
   await window.locator("button[onclick='goAhead()']").click();
    //TO get Url of new page
   const newUrl =  window.url();
   console.log(`\n New window Url: ${newUrl}`);
   await window.waitForLoadState('load');
    //TO get title of new page
   const newTitle = await window.title();  
   console.log(`\n New window Title :  ${newTitle}`);  
})