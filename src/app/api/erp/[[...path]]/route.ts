import { NextRequest, NextResponse } from 'next/server';

const ERP_URL = process.env.ERP_URL || 'http://localhost:8000';
const ERP_API_KEY = process.env.ERP_API_KEY || '';
const ERP_API_SECRET = process.env.ERP_API_SECRET || '';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  return handleRequest(request, params);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  return handleRequest(request, params);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  return handleRequest(request, params);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  return handleRequest(request, params);
}

async function handleRequest(
  request: NextRequest,
  paramsPromise: Promise<{ path?: string[] }>
) {
  try {
    const params = await paramsPromise;
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();
    const pathSegments = params.path || [];
    
    // Determine the base API path
    // If first segment is 'resource' or 'method', use it directly.
    // Otherwise, default to 'resource' to maintain backward compatibility.
    let apiBase = 'api/resource';
    let targetSubPath = pathSegments.join('/');

    if (pathSegments[0] === 'resource' || pathSegments[0] === 'method') {
      apiBase = `api/${pathSegments[0]}`;
      targetSubPath = pathSegments.slice(1).join('/');
    }
    
    const targetUrl = `${ERP_URL}/${apiBase}/${targetSubPath}${queryString ? `?${queryString}` : ''}`;
    
    console.log(`[ERP Proxy] Forwarding to: ${targetUrl}`);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (ERP_API_KEY && ERP_API_SECRET) {
      headers['Authorization'] = `token ${ERP_API_KEY}:${ERP_API_SECRET}`;
    }

    const body = ['POST', 'PUT'].includes(request.method) 
      ? await request.json().catch(() => null) 
      : undefined;

    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error(`[ERP Proxy] Error from ERPNext (${response.status}):`, data);
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('[ERP Proxy] Fatal Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}

