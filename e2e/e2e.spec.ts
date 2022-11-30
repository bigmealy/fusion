import { test, expect } from '@playwright/test';

test('homepage has Fusion as title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Fusion');
});

test('homepage has link to elite promotions which opens in a new browser page', async ({ context, page }) => {
  const eliteUrl = 'https://elite.scot/fusion-wedding-band/'
  
  await page.goto('/');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Elite Promotions')
  ]);
  await newPage.waitForLoadState();
  expect(newPage.url()).toBe(eliteUrl);
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
  await page.click('text=FAQ');
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

test('setlist page contains set data', async ({ page }) => {
  await page.goto('/setlist');
  await expect(page.getByText('Sweet Home Alabama')).toBeVisible();
});
