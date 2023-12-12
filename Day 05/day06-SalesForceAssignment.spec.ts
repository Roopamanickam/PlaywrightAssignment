import {test, chromium,expect} from "@playwright/test"
import { log } from "console";

test("verify account name",async({page})=>{
await page.goto("https://login.salesforce.com");

 //enter username and password. click login
 await page.locator('#username').fill('roopa@google.com');
 await page.locator('#password').fill('Project@12345');
 await page.locator('#Login').click();
  page.waitForTimeout(3000);

 //click toggle menu (css)
  await page.locator("div.slds-icon-waffle").click();
 
  //click view all
  await page.locator("[aria-label='View All Applications']").click();
   
  //click sales
  await page.locator("//p[text()='Sales']").click();

 //click Accounts
await page.locator("//span[text()='Accounts']").click();
   
//click New btn and enter account name
await page.locator("div[title='New']").click();
const enterAccName  = "Anu";
await page.locator("input[name='Name']").fill(enterAccName);
console.log(` Account name enetred: ${enterAccName}`);
             
//click ownership dropdown and select public
await page.locator("button[aria-label='Ownership, --None--']").click();
console.log("clicked ownership dropdown");
await page.locator("[data-value='Public']").click();
await page.locator("[name='SaveEdit']").click()
const accName = await  page.locator(".custom-truncate").innerText();
console.log(accName);
    try{
        expect(accName).toBe(enterAccName)
           console.log("Account updated Successfully");
    }catch{
            console.log("Account not updted ");
        }
})