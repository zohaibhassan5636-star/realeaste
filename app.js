// ---- CONFIG: same project as the staff dashboard ----
const SUPABASE_URL = 'https://vmeaxswvvgzxnswrzrga.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_L7J9z8fTsV6SdRQhyIF6Zw_y060UZtf';

// ---- CONFIG: your Lead Intake webhook (Phase 1) - PRODUCTION url, not /webhook-test/ ----
const LEAD_WEBHOOK_URL = 'https://alihassan0987.app.n8n.cloud/webhook/lead-intake';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const money = (n) => n == null ? 'Price on request' : 'PKR ' + Number(n).toLocaleString('en-US');
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const placeholderPhoto = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

function propertyCard(p) {
  const cover = (p.image_urls && p.image_urls[0]) || placeholderPhoto;
  const bedsLine = p.bedrooms ? p.bedrooms + ' bed' + (p.bathrooms ? ' · ' + p.bathrooms + ' bath' : '') : (p.area_sqft ? p.area_sqft + ' sqft' : '');
  return `<a class="card" href="property.html?id=${p.id}">
    <div class="photo" style="background-image:url('${cover}')">
      <span class="tag">${esc(p.listing === 'rent' ? 'For rent' : 'For sale')}</span>
    </div>
    <div class="body">
      <div class="price">${money(p.price)}${p.listing === 'rent' ? '<small> / month</small>' : ''}</div>
      <div class="title">${esc(p.title)}</div>
      <div class="loc">${esc(p.location || '')}</div>
      ${bedsLine ? `<div class="meta"><span>${esc(bedsLine)}</span></div>` : ''}
    </div>
  </a>`;
}

async function fetchProperties(filters) {
  filters = filters || {};
  let q = sb.from('properties').select('*').eq('status', 'available').order('created_at', { ascending: false });
  if (filters.type) q = q.eq('type', filters.type);
  if (filters.listing) q = q.eq('listing', filters.listing);
  if (filters.location) q = q.ilike('location', '%' + filters.location + '%');
  if (filters.maxPrice) q = q.lte('price', filters.maxPrice);
  if (filters.bedrooms) q = q.gte('bedrooms', filters.bedrooms);
  if (filters.limit) q = q.limit(filters.limit);
  const { data, error } = await q;
  if (error) throw error;
  return data;
}

async function fetchProperty(id) {
  const { data, error } = await sb.from('properties').select('*').eq('id', id).eq('status', 'available').maybeSingle();
  if (error) throw error;
  return data;
}

async function submitEnquiry(payload) {
  const res = await fetch(LEAD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    let msg = 'Something went wrong. Please try again.';
    try { const j = await res.json(); if (j.errors) msg = j.errors.join(', '); } catch (e) {}
    throw new Error(msg);
  }
  return res.json();
}
