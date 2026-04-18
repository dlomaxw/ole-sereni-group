import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  query, 
  onSnapshot, 
  orderBy,
  updateDoc,
  doc
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Lead Types
export interface ProjectLead {
  id?: string;
  type: 'brief' | 'booking' | 'estimate';
  clientName?: string;
  clientEmail?: string;
  projectTitle?: string;
  services?: string[];
  area?: number;
  budget?: string;
  status: 'new' | 'contacted' | 'visit_scheduled' | 'quoted' | 'closed';
  details: any;
  createdAt: any;
}

/**
 * Submit a comprehensive project brief
 */
export const submitProjectBrief = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      type: 'brief',
      clientName: data.clientName || 'Anonymous',
      clientEmail: data.clientEmail || '',
      projectTitle: data.projectTitle || 'Untitled Project',
      services: data.services || [],
      area: Number(data.area) || 0,
      budget: data.budget || '',
      status: 'new',
      details: data,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting brief:', error);
    throw error;
  }
};

/**
 * Create a site visit booking
 */
export const createBooking = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      clientName: data.clientName || 'Anonymous',
      clientEmail: data.clientEmail || '',
      projectType: data.projectType || '',
      preferredDate: data.date || '',
      preferredTime: data.time || '',
      status: 'pending',
      createdAt: serverTimestamp(),
    });
    
    // Also create a shadow lead for CRM tracking
    await addDoc(collection(db, 'leads'), {
      type: 'booking',
      clientName: data.clientName || 'Anonymous',
      clientEmail: data.clientEmail || '',
      projectTitle: `Site Visit: ${data.projectType}`,
      status: 'new',
      details: data,
      createdAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

/**
 * Save an indicative valuation estimate
 */
export const saveEstimate = async (data: any) => {
  try {
    await addDoc(collection(db, 'estimates'), {
      ...data,
      createdAt: serverTimestamp(),
    });
    
    // Log as a low-priority lead if contact info exists
    if (data.clientEmail) {
      await addDoc(collection(db, 'leads'), {
        type: 'estimate',
        clientEmail: data.clientEmail,
        projectTitle: `Estimate: ${data.service}`,
        status: 'new',
        details: data,
        createdAt: serverTimestamp(),
      });
    }
  } catch (error) {
    console.error('Error saving estimate:', error);
  }
};

/**
 * Real-time listener for leads (CRM)
 */
export const subscribeToLeads = (callback: (leads: ProjectLead[]) => void) => {
  const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
  
  return onSnapshot(q, (snapshot) => {
    const leadsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ProjectLead[];
    callback(leadsData);
  });
};

/**
 * Update lead status
 */
export const updateLeadStatus = async (leadId: string, status: ProjectLead['status']) => {
  const leadRef = doc(db, 'leads', leadId);
  await updateDoc(leadRef, { status });
};

/**
 * Subscribe to all lead bookings in real-time
 */
export const subscribeToBookings = (callback: (bookings: any[]) => void) => {
  const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const bookings = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(bookings);
  });
};

/**
 * Subscribe to all lead estimates in real-time
 */
export const subscribeToEstimates = (callback: (estimates: any[]) => void) => {
  const q = query(collection(db, 'estimates'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const estimates = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(estimates);
  });
};
