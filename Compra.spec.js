import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://opencart.abstracta.us/');
  await page.getByRole('button', { name: ' Add to Cart' }).first().click();
  await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
  await page.getByRole('button', { name: ' 2 item(s) - $' }).click();
  await page.getByRole('link', { name: ' View Cart' }).click();
  await page.getByRole('link', { name: 'Checkout', exact: true }).click();
  await page.getByRole('link', { name: 'Acceder a opencart.abstracta.' }).click();
  await page.getByLabel('Guest Checkout').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('wilson');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('ona');
  await page.getByRole('textbox', { name: '* E-Mail' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('segundoona1965@gmail.com');
  await page.getByPlaceholder('Telephone').click();
  await page.getByPlaceholder('Telephone').fill('0978855712');
  await page.getByPlaceholder('Company').click();
  await page.getByPlaceholder('Company').fill('sofka');
  await page.getByPlaceholder('Address 1').click();
  await page.getByPlaceholder('Address 1').fill('ecuador via a la costa');
  await page.getByPlaceholder('Address 2').click();
  await page.getByPlaceholder('Address 2').press('CapsLock');
  await page.getByPlaceholder('Address 2').fill('E');
  await page.getByPlaceholder('Address 2').press('CapsLock');
  await page.getByPlaceholder('Address 2').fill('Ecuador via a la costa');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('guayaquil');
  await page.getByPlaceholder('Post Code').click();
  await page.getByPlaceholder('Post Code').fill('ec2323');
  await page.getByLabel('Country').selectOption('62');
  await page.getByLabel('Region / State').selectOption('988');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('textarea[name="comment"]').click();
  await page.locator('textarea[name="comment"]').fill('gracias por la oportunidad');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Confirm Order' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});