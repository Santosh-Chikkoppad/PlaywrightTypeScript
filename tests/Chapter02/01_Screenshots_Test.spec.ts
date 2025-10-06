import { test, expect } from '@playwright/test';
import { count } from 'console';
import path from 'path';

// Login test
test('Capture Screenshot in Playwright ', async ({ page }) => {  //page - browser pae object
    await page.goto('https://www.youtube.com/@testerstalk');
    console.log('youtube opened');

    // Specific Element Screenshot
    await page.locator('#page-header-container').screenshot({ path: './screenshots/ElementScreens.png' })
    console.log('Taken Specific Element Screenshot')

    //Page screenshot
    await page.screenshot({ path: './screenshots/PageScreenShot.png' })
    console.log('Taken page screenshot')

    //Full page Screenshot
    await page.screenshot({ path: './screenshots/FullPageScreenShot.png', fullPage:true})
    console.log('Taken Fullpage screenshot')
});
