import{test,expect}from "@playwright/test";

test("Window based using promise.all",async({page,context}) =>{
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

//using promise.all to resolve more than one promise
const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    await page.locator("//span[text()='Learn More']").click()
])


//Click 'Confirm' 
await newPage.locator("button[onclick='goAhead()']").click();
//TO get Url of new page
const newUrl =  newPage.url();
console.log(`\n New window Url: ${newUrl}`);
await newPage.waitForLoadState('load');
//TO get title of new page
const newTitle = await newPage.title();  
console.log(`\n New window Title :  ${newTitle}`); 

})