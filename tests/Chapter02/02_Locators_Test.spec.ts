import { test, expect } from '@playwright/test';


test('Locators ', async ({ page }) => {
  //await page.goto('https://github.com/Santosh-Chikkoppad');
 
//Get By Role
//await page.getByRole('link',{name :'Sign in'}).click();
//await page.waitForTimeout(1000)
 
//Get By Label
//await page.getByLabel('Homepage', {exact : true}).first().click();

// Get By AltText 
//await page.getByAltText("View Santosh-Chikkoppad's full-sized avatar").click();

// Get By Test Id
//await page.getByTestId("projects").first().click(); // we need to specify the attribute name in playwright.config.ts
//await page.waitForTimeout(1000)

//Get By Text
//await page.getByText('Sign up').click();

//Get by PlaceHolder, 
 //await page.goto('https://www.youtube.com/@testerstalk');
// await page.getByPlaceholder('Search').fill('testers talk')

//Get By xpath 
// await page.locator('//input[@name="search_query" or @class="ytSearchboxComponentInput yt-searchbox-input title" and @placeholder="Search"]').fill('Testers talks')

//Get By CSS Selector 
//await page.locator('input[name="search_query"]').fill('Santosh c')

//Get By Title
 await page.goto('https://www.google.com/');
await page.getByTitle('Search').fill('Kane Williamson')

}); 