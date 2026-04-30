const http = require('http');

const PORT = 8000;

const mockData = {
  'Lead': {
    data: [
      { name: 'LEA-001', customer_name: 'John Doe', status: 'Lead', territory: 'Website', creation: '2026-04-23 10:00:00' },
      { name: 'LEA-002', customer_name: 'Jane Smith', status: 'Converted', territory: 'API', creation: '2026-04-22 15:00:00' },
    ]
  },
  'Item': {
    data: [
      { item_code: 'ALU-PRF-001', item_name: 'Aluminum Profile Grade A', actual_qty: 150, valuation_rate: 45.0, warehouse: 'Main Store', reorder_level: 50 },
      { item_code: 'GLS-TMP-005', item_name: 'Tempered Glass 10mm', actual_qty: 20, valuation_rate: 85.0, warehouse: 'Glass Workshop', reorder_level: 30 },
    ]
  },
  'Bin': {
    data: [
      { name: 'BIN-001', actual_qty: 20, low_stock_level: 30 },
    ]
  },
  'Work Order': {
    data: [
      { name: 'WO-001', status: 'In Progress', production_item: 'Curtain Wall Module', qty: 10, planned_start_date: '2026-04-24' },
    ]
  },
  'Maintenance Visit': {
    data: [
      { name: 'MV-001', customer: 'Capital Towers', status: 'Scheduled', mntc_date: '2026-04-25', mntc_time: '10:00 AM' },
    ]
  },
  'Campaign': {
    data: [
      { name: 'CP-001', campaign_name: 'Spring Architectural Launch', status: 'Active', total_leads: 45, total_conversion: 12.5 },
    ]
  },
  'Brand': {
    data: [
      { name: 'OSG-ALU', brand_name: 'OSG Aluminum', description: 'Premium architectural aluminum profiles.' },
    ]
  },
  'Sales Invoice': {
    data: [
      { name: 'SINV-001', customer: 'Global Real Estate', status: 'Paid', posting_date: '2026-04-20', grand_total: 12500.0 },
    ]
  }
};

const server = http.createServer((req, res) => {
  console.log(`[Mock ERP] ${req.method} ${req.url}`);

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Basic routing for api/resource/DocType
  const urlParts = req.url.split('?')[0].split('/');
  const docType = decodeURIComponent(urlParts[urlParts.length - 1]);

  if (mockData[docType]) {
    res.writeHead(200);
    res.end(JSON.stringify(mockData[docType]));
  } else {
    // Default response for unspecified types
    res.writeHead(200);
    res.end(JSON.stringify({ data: [] }));
  }
});

server.listen(PORT, () => {
  console.log(`[Mock ERP] Server running on http://localhost:${PORT}`);
});
