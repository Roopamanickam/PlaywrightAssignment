import{test,chromium}from '@playwright/test'

test("shadow DOM",async ({page}) => {

    await page.goto("https://dev205797.service-now.com");
    await page.pause();

    
})