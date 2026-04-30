/**
 * LEADS & BRIEF API (Integrated with ERPNext)
 * 
 * Replaces Firebase logic with direct ERPNext ingestion.
 * All submissions are routed via /api/erp proxy.
 */

import { frappeFetch } from './erp';

export interface ProjectBrief {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  sector?: string;
  service?: string;
  location?: string;
  stage?: string;
  urgency?: string;
  budget?: string;
  description?: string;
  fileUrls?: string[];
  // Support for wizard-style naming
  clientName?: string;
  clientEmail?: string;
  projectTitle?: string;
  services?: string[];
  area?: string;
  materialGrade?: string;
}

/**
 * SUBMIT PROJECT BRIEF
 * Maps to ERPNext "Lead" with description containing technical brief details.
 * Handles both unified intake and wizard-style form data.
 */
export async function submitProjectBrief(data: ProjectBrief) {
  console.log('[API] Processing Technical Brief submission to ERPNext...');
  
  const name = data.name || data.clientName || 'Anonymous Stakeholder';
  const email = data.email || data.clientEmail || 'no-email@osg.com';
  const title = data.projectTitle || data.service || 'New Structural Lead';

  // Construct the Lead data
  const leadData = {
    first_name: name,
    email_id: email,
    mobile_no: data.phone || '000',
    company_name: data.company || 'Private Stakeholder',
    lead_source: 'Website - Technical Brief',
    description: `
PROJECT TITLE: ${title}
Sector: ${data.sector || 'General'}
Services: ${data.service || data.services?.join(', ') || 'Structural'}
Location: ${data.location || 'TBD'}
Stage: ${data.stage || 'Initial'}
Urgency: ${data.urgency || 'Standard'}
Budget: ${data.budget || 'TBD'}
Area: ${data.area || 'N/A'}
Material Grade: ${data.materialGrade || 'Standard'}

PROJECT DESCRIPTION:
${data.description}

ATTACHMENTS:
${data.fileUrls?.join('\n') || 'None'}
    `.trim(),
    status: 'Lead',
    industry: data.sector || 'Construction',
  };

  try {
    const response = await frappeFetch('Lead', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
    
    return {
      success: true,
      ref: response.data?.name || 'QUEUED',
      source: 'erpnext'
    };
  } catch (error: any) {
    console.error('[API] ERPNext Brief Submission Fault:', error);
    throw error;
  }
}

/**
 * BOOK APPOINTMENT
 * Maps to ERPNext "Lead" with appointment tag.
 */
export async function bookAppointment(data: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}) {
  const leadData = {
    first_name: data.name,
    email_id: data.email,
    mobile_no: data.phone,
    lead_source: 'Website - Appointment',
    description: `APPOINTMENT REQUESTED: ${data.date} at ${data.time} for ${data.service}`,
    status: 'Lead',
  };

  try {
    const response = await frappeFetch('Lead', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
    
    return {
      success: true,
      ref: response.data?.name,
      source: 'erpnext'
    };
  } catch (error) {
    console.error('[API] ERPNext Appointment Booking Fault:', error);
    throw error;
  }
}

/**
 * CREATE BOOKING (Consultation)
 * Alias for bookAppointment to support legacy and current frontend naming.
 */
export async function createBooking(data: {
  clientName: string;
  clientEmail: string;
  projectType: string | null;
  date: string;
  time: string | null;
}) {
  return await bookAppointment({
    name: data.clientName,
    email: data.clientEmail,
    phone: '000', // Mock phone if not provided
    date: data.date,
    time: data.time || 'TBD',
    service: data.projectType || 'General Consultation'
  });
}

/**
 * SAVE ESTIMATE
 * Maps to ERPNext "Lead" with estimator tag.
 */
export async function saveEstimate(data: {
  clientEmail: string;
  service: string;
  dimensions: { width: number, height: number };
  specs: { glass: string, finish: string };
  valuation: { min: number, max: number };
}) {
  const leadData = {
    email_id: data.clientEmail,
    lead_source: 'Website - Estimator',
    description: `
ESTIMATE GENERATED:
Service: ${data.service}
Dimensions: ${data.dimensions.width}x${data.dimensions.height}mm
Specs: ${data.specs.glass}, ${data.specs.finish}
Valuation: $${data.valuation.min.toLocaleString()} - $${data.valuation.max.toLocaleString()}
    `.trim(),
    status: 'Lead',
  };

  try {
    const response = await frappeFetch('Lead', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
    
    return {
      success: true,
      ref: response.data?.name
    };
  } catch (error) {
    console.error('[API] ERPNext Estimate Saving Fault:', error);
    throw error;
  }
}

/**
 * FETCH LEADS
 */
export async function getLeads() {
  try {
    const res = await frappeFetch('Lead?fields=["name","customer_name","status","territory","creation","base_total","industry"]&limit_page_length=50&order_by=creation desc');
    return (res.data || []).map((l: any) => ({
      id: l.name,
      clientName: l.customer_name,
      clientEmail: l.email_id || 'client@example.com',
      projectTitle: l.name,
      projectType: l.industry || 'Structural',
      status: l.status,
      budget: l.base_total ? `$${l.base_total.toLocaleString()}` : 'N/A',
      type: l.industry || 'Technical Brief',
      services: [l.industry],
      area: 0
    }));
  } catch (error) {
    console.error('[API] Fetch Leads Error:', error);
    return [];
  }
}

/**
 * FETCH BOOKINGS (Appointments)
 */
export async function getBookings() {
  try {
    // In ERPNext, appointments might be stored as "Maintenance Visit" or custom DocType
    // For now, we'll fetch leads with 'Website - Appointment' source
    const res = await frappeFetch('Lead?filters=[["lead_source","=","Website - Appointment"]]&fields=["name","customer_name","status","creation","description"]');
    return (res.data || []).map((l: any) => ({
      id: l.name,
      clientName: l.customer_name,
      clientEmail: 'contact@osg.com',
      projectTitle: 'Site Audit Appointment',
      status: l.status,
      type: 'Consultation',
      services: ['Site Visit'],
      budget: 'N/A'
    }));
  } catch (error) {
    return [];
  }
}

/**
 * FETCH ESTIMATES
 */
export async function getEstimates() {
  try {
    // Fetch Quotations or Leads with 'Estimator' tag
    const res = await frappeFetch('Quotation?fields=["name","customer_name","status","grand_total"]&limit_page_length=20');
    return (res.data || []).map((q: any) => ({
      id: q.name,
      clientName: q.customer_name,
      clientEmail: 'estimator@osg.com',
      projectTitle: `Quotation: ${q.name}`,
      status: q.status,
      type: 'Valuation',
      services: ['Cost Estimation'],
      budget: `$${q.grand_total?.toLocaleString()}`
    }));
  } catch (error) {
    return [];
  }
}

/**
 * UPDATE LEAD STATUS
 */
export async function updateLeadStatus(id: string, status: string) {
  return await frappeFetch(`Lead/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  });
}
