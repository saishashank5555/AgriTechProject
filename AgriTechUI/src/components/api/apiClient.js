// Simulated API client for now (reads local JSON).
// Later: replace with real fetch('/api/...') to Spring Boot.

export async function getOffers() {
  // simulate network delay
  await new Promise(r => setTimeout(r, 250));
  const data = await import('./offers.json');
  return data.default || data;
}

export async function getTopProducts() {
  await new Promise(r => setTimeout(r, 250));
  const data = await import('./topProducts.json');
  return data.default || data;
}

// Example of how you'll switch later:
// export async function getOffers() {
//   const res = await fetch('/api/offers');
//   if (!res.ok) throw new Error('Failed to fetch offers');
//   return res.json();
// }
