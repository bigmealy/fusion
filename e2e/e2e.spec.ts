import { test, expect } from '@playwright/test';

test('homepage has Fusion as title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Fusion');
});

test('homepage has contact details', async ({ page }) => {
  const bandEmail = 'info@fusionband.co.uk';
  const barryMobile = '07454 740775';

  await page.goto('/');

  await expect(page.getByText(bandEmail)).toBeVisible();
  await expect(page.getByText(barryMobile)).toBeVisible();

  await expect(page.locator('.email')).toHaveText(bandEmail);
  await expect(page.locator('.phone')).toHaveText(barryMobile);
});

test('homepage has logo', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.logo')).toHaveCount(1);
});

test('homepage has link to faq', async ({ page }) => {
  await page.goto('/');
  await page.getByText('FAQ').click();
  await expect(page.getByText('faq works!')).toBeVisible();
});

test('faq link works', async ({ page }) => {
  await page.goto('/');
  await page.locator('text=FAQ').click();
  await expect(page).toHaveTitle('Fusion - FAQ');
});

test('faq page contains faq data', async ({ page }) => {
  await page.goto('/faq');
  await expect(page.getByText('How long do you take to set up?')).toBeVisible(); // Question
  await expect(page.getByText('We need an hour to set up')).toBeVisible(); // Answer
});

test('homepage has link to setlist', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Setlist').click();
  await expect(page.getByText('setlist works!')).toBeVisible();
});

['/', '/faq', '/setlist'].forEach((testPage) => {
  test(`going directly to ${testPage} page works`, async ({ page }) => {
    await page.goto(testPage);
    await expect(page).toHaveTitle(/Fusion.*/);
  });
});
