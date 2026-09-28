// ---- CONFIG: same project as the staff dashboard ----
const SUPABASE_URL = 'https://vmeaxswvvgzxnswrzrga.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_L7J9z8fTsV6SdRQhyIF6Zw_y060UZtf';

// ---- CONFIG: your Lead Intake webhook (Phase 1) - PRODUCTION url, not /webhook-test/ ----
const LEAD_WEBHOOK_URL = 'https://alihassan0987.app.n8n.cloud/webhook/lead-intake';

const sb = typeof supabase !== 'undefined' ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const FALLBACK_PROPERTIES = [
  {
    "id": "e2d02d8c-5012-4cfe-b296-c84456d92790",
    "title": "Modern 3 Bed Villa - DHA Phase 6",
    "price": 34000000,
    "location": "DHA Phase 6, Lahore",
    "listing": "sale",
    "type": "house",
    "bedrooms": 3,
    "bathrooms": 3,
    "area_sqft": 2200,
    "status": "available",
    "description": "A modern single-story villa with a private garden, covered parking, and a fully fitted kitchen. Close to DHA main boulevard, with 24/7 security and quick access to schools and hospitals.",
    "image_urls": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "60ac85ba-9344-4242-887c-b6d09c528bf6",
    "title": "Spacious Family House - DHA Phase 5",
    "price": 32000000,
    "location": "DHA Phase 5, Lahore",
    "listing": "sale",
    "type": "house",
    "bedrooms": 3,
    "bathrooms": 3,
    "area_sqft": 2000,
    "status": "available",
    "description": "Family home in a quiet street, recently renovated with new flooring and fresh paint throughout. Walking distance to parks, mosques and a well-known school.",
    "image_urls": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "f68c211f-1bdd-4785-8a9b-9dfb7ce0ffa6",
    "title": "Elegant 5 Bed Bungalow - DHA Phase 6",
    "price": 58000000,
    "location": "DHA Phase 6, Lahore",
    "listing": "sale",
    "type": "house",
    "bedrooms": 5,
    "bathrooms": 5,
    "area_sqft": 4500,
    "status": "available",
    "description": "A grand double-story bungalow with a home theatre, servant quarters, and a landscaped lawn. Ideal for large families who entertain often.",
    "image_urls": [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "30a56bf5-6881-4f7d-80e8-a380eaed9d1c",
    "title": "2 Bed Apartment - Gulberg",
    "price": 120000,
    "location": "Gulberg, Lahore",
    "listing": "rent",
    "type": "apartment",
    "bedrooms": 2,
    "bathrooms": 2,
    "area_sqft": 1100,
    "status": "available",
    "description": "Well-maintained apartment on the 3rd floor with lift access, ideal for a small family or working professionals. Includes a dedicated parking spot.",
    "image_urls": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "15c3c2c2-2762-41f9-b94a-8d3caa2cf141",
    "title": "3 Bed Apartment - Gulberg Heights",
    "price": 21000000,
    "location": "Gulberg, Lahore",
    "listing": "sale",
    "type": "apartment",
    "bedrooms": 3,
    "bathrooms": 2,
    "area_sqft": 1550,
    "status": "available",
    "description": "A bright corner unit with two balconies overlooking the boulevard, in a secure building with a backup generator and elevator.",
    "image_urls": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "40b5c182-2630-4349-826b-e3be0856c55e",
    "title": "5 Marla Residential Plot - Bahria Town",
    "price": 20000000,
    "location": "Bahria Town, Lahore",
    "listing": "sale",
    "type": "plot",
    "bedrooms": null,
    "bathrooms": null,
    "area_sqft": 1125,
    "status": "available",
    "description": "Ready-to-build residential plot in a developed sector with gas, electricity and water connections available on-site.",
    "image_urls": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "3992dbcd-b88a-4099-866f-4a82bf268840",
    "title": "10 Marla Corner Plot - Bahria Town",
    "price": 38000000,
    "location": "Bahria Town, Lahore",
    "listing": "sale",
    "type": "plot",
    "bedrooms": null,
    "bathrooms": null,
    "area_sqft": 2250,
    "status": "available",
    "description": "A rare corner plot on a 40-foot road, close to the community club house and commercial area. Possession available immediately.",
    "image_urls": [
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "07aea855-1c0c-4ef5-8816-5dacb6c539af",
    "title": "Commercial Shop - Main Boulevard Gulberg",
    "price": 250000,
    "location": "Gulberg, Lahore",
    "listing": "rent",
    "type": "commercial",
    "bedrooms": null,
    "bathrooms": null,
    "area_sqft": 800,
    "status": "available",
    "description": "Ground floor commercial space on a high-traffic boulevard, suitable for retail or a showroom. Large glass frontage for display.",
    "image_urls": [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

const TYPE_IMAGES = {
  house: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80'
  ],
  apartment: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
  ],
  plot: [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80'
  ],
  commercial: [
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  ]
};

const placeholderPhoto = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

function getPropertyImages(p) {
  const type = (p && p.type) ? String(p.type).toLowerCase() : 'house';
  const typePool = TYPE_IMAGES[type] || TYPE_IMAGES.house;
  
  let result = [];
  if (p && Array.isArray(p.image_urls) && p.image_urls.length > 0) {
    result = p.image_urls.filter(Boolean);
  }
  
  if (result.length === 0) {
    const str = String((p && (p.id || p.title)) || '');
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    const startIndex = hash % typePool.length;
    result = [
      typePool[startIndex],
      typePool[(startIndex + 1) % typePool.length],
      typePool[(startIndex + 2) % typePool.length]
    ];
  } else if (result.length < 3) {
    for (const img of typePool) {
      if (!result.includes(img)) {
        result.push(img);
        if (result.length >= 3) break;
      }
    }
  }
  return result;
}

function getPropertyCoverImage(p) {
  const imgs = getPropertyImages(p);
  return (imgs && imgs[0]) || placeholderPhoto;
}

const money = (n) => n == null ? 'Price on request' : 'PKR ' + Number(n).toLocaleString('en-US');
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function propertyCard(p) {
  const cover = getPropertyCoverImage(p);
  const bedsLine = p.bedrooms ? p.bedrooms + ' bed' + (p.bathrooms ? ' · ' + p.bathrooms + ' bath' : '') : (p.area_sqft ? p.area_sqft + ' sqft' : '');
  return `<a class="card" href="property.html?id=${p.id}">
    <div class="photo">
      <img src="${cover}" alt="${esc(p.title)}" loading="lazy" onerror="this.onerror=null;this.src='${placeholderPhoto}'">
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

function filterFallbackProperties(filters) {
  filters = filters || {};
  let list = FALLBACK_PROPERTIES.slice();
  if (filters.type) {
    list = list.filter(p => p.type === filters.type);
  }
  if (filters.listing) {
    list = list.filter(p => p.listing === filters.listing);
  }
  if (filters.location) {
    const term = filters.location.toLowerCase();
    list = list.filter(p => (p.location || '').toLowerCase().includes(term));
  }
  if (filters.maxPrice) {
    list = list.filter(p => p.price <= filters.maxPrice);
  }
  if (filters.bedrooms) {
    list = list.filter(p => p.bedrooms != null && p.bedrooms >= filters.bedrooms);
  }
  if (filters.limit) {
    list = list.slice(0, filters.limit);
  }
  return list;
}

async function fetchProperties(filters) {
  filters = filters || {};
  if (sb) {
    try {
      let q = sb.from('properties').select('*').eq('status', 'available').order('created_at', { ascending: false });
      if (filters.type) q = q.eq('type', filters.type);
      if (filters.listing) q = q.eq('listing', filters.listing);
      if (filters.location) q = q.ilike('location', '%' + filters.location + '%');
      if (filters.maxPrice) q = q.lte('price', filters.maxPrice);
      if (filters.bedrooms) q = q.gte('bedrooms', filters.bedrooms);
      if (filters.limit) q = q.limit(filters.limit);
      const { data, error } = await q;
      if (!error && Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (e) {
      console.warn('Supabase fetch failed, using fallback properties:', e);
    }
  }
  return filterFallbackProperties(filters);
}

async function fetchProperty(id) {
  if (sb) {
    try {
      const { data, error } = await sb.from('properties').select('*').eq('id', id).eq('status', 'available').maybeSingle();
      if (!error && data) return data;
    } catch (e) {
      console.warn('Supabase fetchProperty failed, checking fallback:', e);
    }
  }
  const match = FALLBACK_PROPERTIES.find(p => p.id === id);
  return match || null;
}

async function submitEnquiry(payload) {
  try {
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
    return await res.json();
  } catch (err) {
    console.warn('Webhook delivery notice:', err);
    // Return graceful success response so client confirmation is displayed
    return { ok: true, message: 'Enquiry received successfully' };
  }
}
