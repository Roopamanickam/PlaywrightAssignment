// HomeAssignments
// -----------------
//1. MergeContact (Alert and windowHandle)
// -----------		  
// 1. Launch URL "http://leaftaps.com/opentaps/control/login"
// 2. Enter UserName and Password Using Id Locator
// 3. Click on Login Button using Class Locator
// 4. Click on CRM/SFA Link
// 5. Click on contacts Button
// 6. Click on Merge Contacts using Xpath Locator
// 7. Click on Widget of From Contact
// 8. Click on First Resulting Contact
// 9. Click on Widget of To Contact
// 10. Click on Second Resulting Contact
// 11. Click on Merge button using Xpath Locator
// 12. Accept the Alert
// 13. Verify the title of the page

import{test,expect} from "@playwright/test";
import { Console } from "node:console";

test("MergeContact using Alert and windowHandle",async({page,context})=>{

    //Launch URL "http://leaftaps.com/opentaps/control/login"

    await page.goto("http://leaftaps.com/opentaps/control/login");
    //Login to the application
    await page.locator("#username").fill('demosalesmanager');
    await page.locator("#password").fill('crmsfa');
    await page.locator(".decorativeSubmit").click();

    //Click on CRM/SFA Link
    await page.getByText('CRM/SFA').click();
    //Wait for the page to load
    await page.waitForLoadState('load');
    
    //Click on contacts Button
    await page.getByText('Contacts',{exact:true}).click();
    console.log("contacts clicked")
    await page.waitForLoadState('load');
    //click on merge contacts
    await page.getByText('Merge Contacts',{exact:true}).click();
    console.log("Merge contact clicked")
    //Click on Widget of From Contact
    //creata a windowHandle for the new page-From Contact 
    const promiseFromContact =  context.waitForEvent('page');
    //click the fromconatct widget
    await page.locator("img[alt='Lookup']").first().click();
    //resolve the promise
    const frmcontact = await  promiseFromContact;
    //Click on First Resulting Contact
    await frmcontact.locator('.linktext').first().click();
    await page.waitForLoadState('load');

    //Click on Widget of To Contact

     //creata a windowHandle for the new page-From Contact 
     const promiseToContact= context.waitForEvent('page');

     //click To Contact Widget
    await  page.locator("img[alt='Lookup']").last().click();
  
    //resolve the promise
    const toContact = await promiseToContact;
    //Click on second Resulting Contact
    await toContact.locator("a[class='linktext']").nth(4).click();
    //Click on Merge button using Xpath Locator 
    await page.locator("//a[text()='Merge']").click();
    await page.waitForLoadState('load');
    //Verify the title of the page
    console.log(`Page Title :  ${await page.title()}`);

//handle all dialog that appears in the page using page.on
page.on('dialog',async dialog =>{
    //Accept the Alert
  await dialog.accept();
})
 
})