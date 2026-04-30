const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join('C:', 'Users', 'RAZER', 'Documents', 'osg group', 'website', 'osg-web', 'web screenshoot');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const pages = [
  { name: '01_home', url: '/' },
  { name: '02_company', url: '/company' },
  { name: '03_industries', url: '/industries' },
  { name: '04_services', url: '/services' },
  { name: '05_projects', url: '/projects' },
  { name: '06_contact', url: '/contact' },
  { name: '07_quote', url: '/quote' },
  { name: '08_brief', url: '/brief' },
  { name: '09_consultation', url: '/consultation' },
  { name: '10_portal', url: '/portal' },
  { name: '11_admin_dashboard', url: '/admin/dashboard' },
  { name: '12_admin_crm', url: '/admin/erp/crm', action: async (page) => {
    await page.click('button:has-text("New Lead")').catch(() => {});
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(OUTPUT_DIR, '12_admin_crm_new_lead_modal.png') });
  }},
  { name: '13_admin_inventory', url: '/admin/erp/inventory', action: async (page) => {
    await page.click('button:has-text("Add Product")').catch(() => {});
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(OUTPUT_DIR, '13_admin_inventory_add_product_modal.png') });
  }},
  { name: '14_admin_finance', url: '/admin/erp/finance' },
  { name: '15_admin_console', url: '/admin/erp/console' },
  { name: '16_admin_marketing', url: '/admin/marketing' },
  { name: '17_admin_staff', url: '/admin/staff' },
  { name: '18_admin_service', url: '/admin/service' },
  { name: '19_admin_workshop', url: '/admin/workshop' },
  { name: '20_admin_requests', url: '/admin/requests' }
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log('Starting screenshot audit...');

  for (const p of pages) {
    try {
      console.log(`Capturing: ${p.name} (${p.url})`);
      await page.goto(`${BASE_URL}${p.url}`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000); // Give animations time
      await page.screenshot({ path: path.join(OUTPUT_DIR, `${p.name}.png`), fullPage: true });
      
      if (p.action) {
        await p.action(page);
      }
    } catch (err) {
      console.error(`Failed to capture ${p.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('Audit complete. All screenshots saved to:', OUTPUT_DIR);
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
