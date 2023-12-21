// SalesForce -Accounts (upload files)
// -----------------------------------
// 1.Login to Salesforce
// 2.Click on toggle menu
// 3.Search for Accounts
// 4.Click the Accounts
// 5.Click on the first resulting account name
// 6.Upload files under Notes and Attachments 
//   Hint : use page.focus(selector) to scroll to view the element - uploadfiles 
// 7.Verify the toast message

import{test,expect} from "@playwright/test"
import path from "path";

test("SalesForce-Accounts FileUpload)",async({page,context})=>{

// 1.Login to Salesforce
await page.goto("https://login.salesforce.com/");
await page.waitForLoadState('load');
await page.locator('#username').fill('roopa@google.com');
//enter password
await page.locator('#password').fill('Project@12345');
//Click Login
await page.locator('#Login').click();

//To wait for page to load
//await page.waitForLoadState("load");
//2. To Click on toggle menu
const appLauncherIcon = page.locator(".slds-icon-waffle");
try {
await expect(appLauncherIcon).toBeVisible({timeout:180*1000});
await appLauncherIcon.click();
await page.locator(".slds-icon-waffle").click();
} catch (error) {
        //To print the error message
        console.log("The page is not loaded yet");
        console.log(error);
        await page.reload();
        await expect(appLauncherIcon).toBeVisible({timeout:180*1000});
        await appLauncherIcon.click();
    }

// 4.search and Click the Accounts
await page.waitForLoadState("load");
await page.locator("input[class='slds-input']").fill('Accounts');
await page.waitForTimeout(2000);
await page.locator('a[class="al-menu-item slds-p-vertical--xxx-small"]').click();

// 5.Click on the first resulting account name
await page.locator("//a[@data-aura-class='forceOutputLookup']").first().click();
console.log("First record clicked");
await page.keyboard.press('PageDown');
await page.waitForTimeout(2000);

// 6.Upload files under Notes and Attachments using event handler
const filename = 'Locators_table_1_0_2';
const fileChooserPromise =  page.waitForEvent("filechooser",{timeout:5000});
//click Uplod file button
await page.getByRole('button', { name: 'Upload Files' }).click();
console.log("file  upload btn clicked");
const fileChooser = await fileChooserPromise;
//Choose file to upload
await fileChooser.setFiles([path.join(__dirname,'Locators_table_1_0_2.pdf')]);
//click Done button after file Upload
await page.getByRole('button',{name:'Done'}).click();
await page.waitForLoadState('load');

//verify toast message

const toastMsg= await page.locator('span[class^="toastMessage"]').innerText();
//const toastMsg= await page.locator(".forceVisualMessageQueue").innerText();
console.log(toastMsg);
expect(toastMsg).toContain('1 file was added to the Account.');
console.log("Toast message displayed");


})