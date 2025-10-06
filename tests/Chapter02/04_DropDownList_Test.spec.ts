import { test, expect } from '@playwright/test';

test('Handling DropDown List in Playwright', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    await page.getByRole('button', { name: 'Create new account' }).click()

    //Select DropDown By Value
    await page.getByLabel('Day').selectOption('18')

    // Select DropDown By Visible Text 
    await page.locator('#month').selectOption('11')

    // Select DropDown By Index
await page.locator('#year').selectOption({index : 2})

//Validate the options
await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])   

});