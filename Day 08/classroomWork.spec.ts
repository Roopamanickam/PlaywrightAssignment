import{test} from "@playwright/test";
test.only(`Open multiple tabs`,async({page,context})=>{
let webPage: any;
await page.goto("https://www.leafground.com/window.xhtml;")
console.log(page.url());
const [multiPage] = await Promise.all([
context.waitForEvent("page"),
page.getByText("Open Multiple",{exact:true}).click()
]);
await multiPage.waitForLoadState('load');
const pages = multiPage.context().pages();
console.log(pages.length);

pages.forEach(tabs =>{
console.log(tabs.url());
})
pages[1].bringToFront();
for (let index = 0; index < pages.length; index++) {
await pages[index].waitForLoadState('load');
const title = await pages[index].title();
if (title === 'Web Table') {
webPage = pages[index];
}

}
await webPage.type('//input[@placeholder="Search"]', 'Amy');
await page.waitForTimeout(5000);


})