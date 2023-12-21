// ServiceNow -Ordering Mobile(Frames)
// 1. Launch ServiceNow application
// 2. Login with valid credentials 
// 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
// 4. Click on  mobiles
// 5. Select Apple iphone13pro
// 6. Choose yes option in lost or broken iPhone
// 7. Enter phonenumber as 99 in original phonenumber field
// 8. Select Unlimited from the dropdown in Monthly data allowance
// 9. Update color field to SierraBlue and storage field to 512GB
// 10. Click on Order now option
// 11. Verify order is placed

import{test, expect} from "@playwright/test"

test("ServiceNow -Ordering Mobile",async({page,context})=>{

    await page.goto("https://dev226156.service-now.com");
    await page.waitForLoadState('load');

    //login with valid creds
    await page.locator('#user_name').fill('admin');
    await page.locator('#user_password').fill('y6/vUBxZr*7F');
    await page.locator('#sysverb_login').click();
    await page.waitForLoadState('load');
    // 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
    await page.getByText('All').click();
    //clear the filtee
    await page.getByPlaceholder('Filter').clear();
    //Search for Service catalog
    await page.getByPlaceholder('Filter').fill('Service catalog');
    await page.waitForTimeout(2000);
    //Hit enter
    page.keyboard.press('Enter');
    await page.waitForLoadState('load');
    // 4. Click on  mobiles
    const frameLocator = page.frameLocator('iframe').first();
    await frameLocator.getByText('Mobiles').first().click();
    // 5. Select Apple iphone13pro
    await frameLocator.locator("//strong[text()='Apple iPhone 13 pro']").click(); 
    // 6. Choose yes option in lost or broken iPhone
    await frameLocator.locator("[class='radio-label']").first().click();
    // 7. Enter phonenumber as 99 in original phonenumber field
   await frameLocator.locator("[class='cat_item_option sc-content-pad form-control']").fill('99');
    // 8. Select Unlimited from the dropdown in Monthly data allowance
    await frameLocator.locator("[class='form-control cat_item_option ']").selectOption('unlimited');
    
  // 9. Update color field to SierraBlue and storage field to 512GB
  await frameLocator.getByText('Sierra Blue',{exact:true}).click();
  await frameLocator.getByText('512 GB [add $300.00]',{exact:true}).click();
  // 10. Click on Order now option
  await frameLocator.locator('#oi_order_now_button').click();
  await page.waitForLoadState('load');
  // 11. Verify order is placed
    const orderID = await   frameLocator.locator('#requesturl').innerText();
    console.log(`Here is your Order ID : ${orderID}`);
})