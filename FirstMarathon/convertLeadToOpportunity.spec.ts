import{test,expect} from '@playwright/test';
//Launch the browser (Chrome / Edge / Firefox / Safari).

test("Lead Creation and Conversion to Opportunity", async({page})=>{

    await page.goto("https://login.salesforce.com/");

    //Enter username,Password and login
   /*  await page.locator('#username').fill('hari.radhakrishnan@qeagle.com');
    await page.locator('#password').fill('Testleaf@1234'); */
    await page.locator('#username').fill('radhakrishnan@testleaf.com');
    await page.locator('#password').fill('Chennai@123');
    await page.locator('#Login').click();

    //click toggle menu (css)
    await page.locator("div.slds-icon-waffle").click();
    await page.waitForSelector("button:text-is('View All')");

    //click view all
    await page.locator("button:text-is('View All')").click();

    await page.locator("[placeholder='Search apps or items...']").fill("Marketing");
    await page.locator("[placeholder='Search apps or items...']").click();
    await page.locator(".slds-rich-text-editor__output").click();
 
    //click Leads tab
    await page.locator("[title='Leads']").click();
    //Click on the New button to create a lead.
    await page.locator("a[title='New']").click();

    //Fill in all the mandatory fields (
    await page.locator("[name='salutation']").click();
    await page.locator("[title='Mr.']").click();
    const firstName = 'Nithya';
    const lastName = 'Pradeep';
    await page.locator("[name='firstName']").fill(firstName);
    await page.locator("[name='lastName']").fill(lastName);
    await page.locator("[name='Company']").fill('Steria');    
    //Click on the Save button.
    await page.locator("[name='SaveEdit']").click();
   
    //In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link.
    await page.locator(".menu-button-item").click();
    await page.locator("span:text-is('Convert')").click();
    
    //Click on the Opportunity Name input field, clear and enter a new opportunity name.
    await page.getByLabel('Account Name*').clear();
    const newOppName = 'Amazon';
    await page.getByLabel('Account Name*').fill(newOppName);

    //Click on the Convert button. 
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    //Click on the Go to Leads button.
    await page.getByRole('button', { name: 'Go to Leads', exact: true }).click();
    
    //Search the verified lead name in the Search box 
    await page.getByPlaceholder('Search this list...').fill(newOppName);
    await page.press('[placeholder="Search this list..."]', 'Enter');     
    
    // confirm the text ‘No items to display’.
   await expect(page.getByText('No items to display.')).toBeVisible();
 
   //Navigate to the Opportunities tab  
   await page.getByTitle('Opportunities',{exact:true}).click();

   //search for the opportunity linked with the converted lead.
   await page.getByPlaceholder('Search this list...').fill(newOppName);
   await page.press('[placeholder="Search this list..."]', 'Enter');
   await page.waitForLoadState("load");

   //Search the opportunity name created and click on the created opportunity name.
   await page.getByRole('link', { name: newOppName,exact:true }).click();

   console.log("Opportunity name verified");
   
})



