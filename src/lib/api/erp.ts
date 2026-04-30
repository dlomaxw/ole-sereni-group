/**
 * ERP Integration Layer (Production Grade)
 * Handles communication with Frappe/ERPNext REST API
 */

const ERP_PROXY_URL = '/api/erp';

/**
 * Generic Fetch Wrapper for local Proxy to Frappe
 */
export async function frappeFetch(endpoint: string, options: RequestInit = {}) {
  // Extract path and query for the proxy
  const url = `${ERP_PROXY_URL}/${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error._server_messages || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`ERP Proxy Error (${endpoint}):`, error);
    throw error;
  }
}

export interface ERPMetrics {
  totalRevenue: number;
  openLeads: number;
  stockAlerts: number;
  projectCount: number;
}

export interface ERPLead {
  name: string;
  customer_name: string;
  status: string;
  territory: string;
  creation: string;
  base_total?: number;
}

export interface ERPStockItem {
  item_code: string;
  item_name: string;
  actual_qty: number;
  valuation_rate: number;
  warehouse: string;
  reorder_level: number;
  stock_uom?: string;
}

export interface ERPInvoice {
  name: string;
  customer: string;
  posting_date: string;
  grand_total: number;
  status: string;
}

/**
 * AGGREGATED METRICS
 */
export const getERPMetrics = async (): Promise<ERPMetrics> => {
  try {
    // For production, we'd ideally use a custom API script in Frappe or multiple count requests
    const leads = await frappeFetch('Lead?filters=[["status","=","Lead"]]&fields=["count(name)"]');
    const items = await frappeFetch('Item?fields=["count(name)"]');
    const stock = await frappeFetch('Bin?filters=[["actual_qty","<","low_stock_level"]]&fields=["count(name)"]');
    
    return {
      totalRevenue: 0, // Requires specialized report/aggregation
      openLeads: leads.data?.[0]?.['count(name)'] || 0,
      stockAlerts: stock.data?.[0]?.['count(name)'] || 0,
      projectCount: items.data?.[0]?.['count(name)'] || 0,
    };
  } catch (e) {
    // Fallback to minimal data if API fails to prevent total UI collapse
    return { totalRevenue: 0, openLeads: 0, stockAlerts: 0, projectCount: 0 };
  }
};

/**
 * CRM / LEADS
 */
export const getCRMLeads = async (): Promise<ERPLead[]> => {
  const res = await frappeFetch('Lead?fields=["name","customer_name","status","territory","creation","base_total"]&limit_page_length=20&order_by=creation desc');
  return res.data || [];
};

export const createLead = async (data: any): Promise<ERPLead> => {
  const res = await frappeFetch('Lead', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.data;
};

/**
 * STOCK / INVENTORY
 */
export const getStockLevels = async (): Promise<ERPStockItem[]> => {
  const res = await frappeFetch('Item?fields=["item_code","item_name","actual_qty","valuation_rate","warehouse","reorder_level"]&limit_page_length=50');
  return res.data || [];
};

export const createItem = async (data: any): Promise<ERPStockItem> => {
  const res = await frappeFetch('Item', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.data;
};

export const deleteItem = async (item_code: string): Promise<any> => {
  return await frappeFetch(`Item/${item_code}`, {
    method: 'DELETE',
  });
};

/**
 * OPERATIONS / WORKSHOP (Work Orders)
 */
export const getWorkOrders = async (): Promise<any[]> => {
  const res = await frappeFetch('Work Order?fields=["name","status","production_item","qty","planned_start_date"]&limit_page_length=20');
  return res.data || [];
};

/**
 * MAINTENANCE / SERVICE
 */
export const getServiceVisits = async (): Promise<any[]> => {
  const res = await frappeFetch('Maintenance Visit?fields=["name","customer","status","mntc_date","mntc_time"]&limit_page_length=20');
  return res.data || [];
};

/**
 * MARKETING / ANALYTICS
 */
export const getCampaigns = async (): Promise<any[]> => {
  const res = await frappeFetch('Campaign?fields=["name","campaign_name","status","total_leads","total_conversion"]&limit_page_length=20');
  return res.data || [];
};

export const getMarketingInsights = async () => {
  // Aggregate data for charts
  const leads = await getCRMLeads();
  const sources = leads.reduce((acc: any, lead: any) => {
    const src = lead.lead_source || 'Other';
    acc[src] = (acc[src] || 0) + 1;
    return acc;
  }, {});

  return {
    recentLeads: leads.slice(0, 10),
    sourceDistribution: Object.entries(sources).map(([name, value]) => ({ name, value })),
    totalLeads: leads.length,
    conversionRate: (leads.filter(l => l.status === 'Converted').length / (leads.length || 1) * 100).toFixed(1)
  };
};

/**
 * BRANDS
 */
export const getBrands = async (): Promise<any[]> => {
  const res = await frappeFetch('Brand?fields=["name","brand_name","description"]&limit_page_length=50');
  return res.data || [];
};

/**
 * FINANCE
 */
export const getFinancialSummary = async (): Promise<ERPInvoice[]> => {
  const res = await frappeFetch('Sales Invoice?fields=["name","customer","status","posting_date","grand_total"]&limit_page_length=20&order_by=posting_date desc');
  return res.data || [];
};
