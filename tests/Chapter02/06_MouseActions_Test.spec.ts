import {test, expect} from '@playwright/test'

test('Mouse Actions', async({page}) =>{
await page.goto('https://www.youtube.com/results?search_query=playwrihg+tester+talk');

// Left Button Click
//await page.getByText('Playwright by Testers Talk ✅').click({button : 'left'})

// Right Button Click
await page.getByText('Playwright by Testers Talk ✅').click({button : 'right'})

// Middle Button Click
//await page.getByText('Playwright by Testers Talk ✅').click({button : 'middle'})
}) 