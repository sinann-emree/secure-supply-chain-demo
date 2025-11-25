import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Güvenlik ve Erişilebilirlik', () => {
  test('Anasayfa erişilebilirlik taraması (WCAG)', async ({ page }) => {
    // Vite varsayılan olarak 5173 portunda çalışır
    await page.goto('http://localhost:5173');

    // Sayfayı Axe motoru ile tara
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    // Hata varsa terminale yazdır
    if (accessibilityScanResults.violations.length > 0) {
       console.log(accessibilityScanResults.violations);
    }

    // Hiçbir ihlal olmamalı
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});