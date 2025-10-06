import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigating to URL', async () => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });

  await test.step('Enter Username and Password', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('santoshcTesting');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Test123');
  })

  await test.step('Click on SignIn Button', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })

  await test.step('Validate Error Message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })

});