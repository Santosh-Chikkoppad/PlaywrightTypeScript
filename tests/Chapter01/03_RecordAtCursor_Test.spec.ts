import { test, expect } from '@playwright/test';
import { count } from 'console';

test.use({ headless: false })

// Login test
test('Flipkart Record at Cursor Test ', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    console.log('Logged in');


    // Search product test
    await test.step('Search for product', async () => {
        await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('laptops');
        await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
        console.log('Search executed');
    });

    // Filtering test
    await test.step('Apply filters', async () => {
        await page.getByText('Core i5', { exact: true }).click();
        await page.waitForTimeout(2000);

        const priceDropdown = page.locator('select.Gn\\+jFg').first();
        await priceDropdown.selectOption({ index: 3 });

        const selectedValue = await priceDropdown.inputValue();
        console.log('Selected Price:', selectedValue);

        await expect(priceDropdown).toHaveValue(selectedValue);

        await expect(page.getByRole('link', { name: 'ASUS Expertbook P1 High-performance processor Intel Core i5 13th Gen 13420H - (16 GB/512 GB SSD/Window... Add to Compare ASUS Expertbook P1 High-performance processor Intel Core i5 13th Gen 13420H - (16 GB/512 GB SSD/Window... 4.4 1,980 Ratings & 164 Reviews • Intel Core i5 Processor (13th Gen) • 16 GB DDR5 RAM • Windows 11 Home Operating System • 512 GB SSD • 39.62 cm (15.6 inch) Display • Included Software- Microsoft Office Home 2024(includes Word, Excel, PowerPoint, and OneNote) (Lifetime Validity ) + Microsoft 365 Basic*(1-Year Validity), McAfee+TM Premium (1 year Validity) • 1 Year Onsite Warranty ₹58,990 ₹89,990 34% off Upto ₹22,000 Off on Exchange Bank Offer', exact: true })).toBeVisible();

        await expect(page.getByRole('link', { name: 'ASUS Expertbook P1 High-performance processor Intel Core i5 13th Gen 13420H - (32 GB/512 GB SSD/Window... Add to Compare ASUS Expertbook P1 High-performance processor Intel Core i5 13th Gen 13420H - (32 GB/512 GB SSD/Window... 4.4 1,980 Ratings & 164 Reviews • Intel Core i5 Processor (13th Gen) • 32 GB DDR5 RAM • Windows 11 Home Operating System • 512 GB SSD • 35.56 cm (14 inch) Display • Included Software- Microsoft Office Home 2024(includes Word, Excel, PowerPoint, and OneNote) (Lifetime Validity ) + Microsoft 365 Basic*(1-Year Validity), McAfee+TM Premium (1 year Validity) • 1 Year Onsite Warranty ₹64,990 ₹1,14,990 43% off Upto ₹22,000 Off on Exchange Bank Offer', exact: true })).toBeVisible();
        console.log(' Filters applied');
    })
}); 