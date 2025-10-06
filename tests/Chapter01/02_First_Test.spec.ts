// Import the playwright module 
// write the test
// got to url 
// Search with Keywords
// CLick on playwright 
// validate web page tatile
// test - implement test case
// expect - assertion - comparing expected and actual 
import { test, expect } from '@playwright/test';

// Login test
test('Flipkart E2E ', async ({ page }) => {
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

  await expect(priceDropdown).toHaveValue('50000');  

  console.log(' Filters applied');
})  
});