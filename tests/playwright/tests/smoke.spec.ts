import { test, expect } from "@playwright/test";

test("home loads and shows hero title", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("hero-title")).toBeVisible();
});

test("videos page renders embeds", async ({ page }) => {
  await page.goto("/videos");
  await expect(page.getByTestId("videos-grid")).toBeVisible();
  await expect(page.getByTestId("video-embed").first()).toBeVisible();
});

test("contact page renders form inputs", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByTestId("contact-form")).toBeVisible();
  await expect(page.getByTestId("contact-name")).toBeVisible();
  await expect(page.getByTestId("contact-email")).toBeVisible();
  await expect(page.getByTestId("contact-message")).toBeVisible();
});