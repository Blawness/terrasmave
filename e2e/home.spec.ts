import { test, expect } from "@playwright/test";

test("homepage has title and key sections", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Terrasmave/i);

  await expect(page.getByRole("heading", { name: /Terrasmave/i })).toBeVisible();

  await expect(page.locator("section#produk")).toBeVisible();
  await expect(page.getByText("PILIH RASA FAVORITMU", { exact: true })).toBeVisible();
  await expect(page.getByText("Hubungi kami", { exact: false })).toBeVisible();
});
