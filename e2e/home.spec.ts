import { test, expect } from "@playwright/test";

test("homepage has title and key sections", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Terrasmave/i);

  await expect(page.getByRole("heading", { name: /Terrasmave/i })).toBeVisible();

  await expect(page.getByText("PILIH RASA FAVORITMU", { exact: true })).toBeVisible();
  await expect(page.getByText("SIAP PESAN SEKARANG?", { exact: true })).toBeVisible();
});

test("navigation links work", async ({ page }) => {
  await page.goto("/");

  await page.locator("nav").getByRole("link", { name: "Varian" }).click();
  await expect(page).toHaveURL("/produk");
  await expect(page.getByText("PILIH RASA FAVORITMU", { exact: true })).toBeVisible();

  await page.locator("nav").getByRole("link", { name: "Tentang" }).click();
  await expect(page).toHaveURL("/tentang");
  await expect(page.getByRole("heading", { name: /DARI DAPUR KAMI/ })).toBeVisible();

  await page.locator("nav").getByRole("link", { name: "Kenapa Kami" }).click();
  await expect(page).toHaveURL("/kenapa-kami");
  await expect(page.getByText("MENGAPA PILIH KAMI?", { exact: true })).toBeVisible();

  await page.locator("nav").getByRole("link", { name: "Kontak" }).click();
  await expect(page).toHaveURL("/kontak");
  await expect(page.getByText("KONTAK KAMI", { exact: true })).toBeVisible();
});

test("produk page shows all 6 products and modal works", async ({ page }) => {
  await page.goto("/produk");

  await expect(page.getByText("PILIH RASA FAVORITMU", { exact: true })).toBeVisible();

  const productHeadings = page.getByRole("heading", { name: /Es Krim Sandwich/ });
  await expect(productHeadings).toHaveCount(6);

  await page.getByRole("heading", { name: "Es Krim Sandwich Cokelat", level: 3 }).click();
  await expect(page.getByRole("heading", { name: "Es Krim Sandwich Cokelat", level: 2 })).toBeVisible();

  await page.locator("button[aria-label='Tutup detail produk']").click();
  await expect(page.locator("button[aria-label='Tutup detail produk']")).not.toBeVisible();
});
