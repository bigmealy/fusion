import { test, expect } from '@playwright/test';

test('homepage has Fusion Wedding Band as title', async ({
  page,
}) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Fusion Wedding Band');

  // // create a locator
  // const getStarted = page.getByText('Get Started');

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();

  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});


test('homepage has contact details', async({page}) => {

  const bandEmail = 'info@fusionband.co.uk';
  const barryMobile = '07454 740775';

  await page.goto('/');
  
  await expect(page.locator('.email')).toHaveText(bandEmail);
  await expect(page.locator('.phone')).toHaveText(barryMobile);
})

test('homepage has logo', async({page}) => {
  await page.goto('/');

  await expect(page.locator('.logo')).toHaveCount(1);
})