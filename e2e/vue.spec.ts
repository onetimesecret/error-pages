import { expect, test } from '@playwright/test';

test('maintenance mode page displays correctly', async ({ page }) => {
  await page.goto('/');

  // Check if the logo is visible
  await expect(page.locator('svg[baseProfile="tiny-ps"][version="1.2"].mx-auto.h-12.w-12.text-brand-500')).toBeVisible();
  await expect(page.locator('svg.mx-auto.h-12.w-12.text-brand-500')).toBeVisible();

  // Check if the title is correct
  await expect(page.locator('h1')).toHaveText('Site Maintenance');

  // Check if the card component is present
  await expect(page.locator('.bg-white.shadow-lg.rounded-lg')).toBeVisible();
});
