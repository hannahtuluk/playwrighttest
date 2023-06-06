// @ts-check
const { test, expect } = require('@playwright/test');

test('Scenario 1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.getByText('Welcome to the-internet')).toBeVisible();
  await expect(page.getByText('Form Authentication')).toBeVisible();
  const formAuthenticationButton = page.getByRole('link', { name: 'Form Authentication' });
  await formAuthenticationButton.click();
  await expect(page.getByText('Login Page')).toBeVisible();
  const username = page.getByLabel('Username');
  await username.fill('tomsmith');
  const password = page.getByLabel('Password');
  await password.fill('SuperSecretPassword!');
  const login = page.getByRole('button', { name: ' Login' });
  await login.click();
});

test('Scenario 2', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.getByText('Welcome to the-internet')).toBeVisible();
  await expect(page.getByText('Form Authentication')).toBeVisible();
  const multipleWindowsButton = page.getByRole('link', { name: 'Multiple Windows' });
  await multipleWindowsButton.click();
  await expect(page.getByText('Opening a new window')).toBeVisible();
  const clickHereButton = page.getByRole('link', { name: 'Click Here' });
  await clickHereButton.click();
  await expect(page.getByText('New Window')).toBeVisible();
});


