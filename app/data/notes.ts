// app/data/notes.ts
//
// Index of field notes. Each entry needs a matching page at
// app/pages/notes/<slug>.vue — add the entry here and the note appears
// on the homepage and the notes index automatically. Newest first.

export interface Note {
  n: string;
  slug: string;
  title: string;
  dek: string;
  tags: string[];
  read: string;
  filed: string; // YYYY.MM
}

export const notes: Note[] = [
  {
    n: "002",
    slug: "merchant-center-misrepresentation",
    title: "Getting a catalogue out of Merchant Center Misrepresentation",
    dek: "Google suspends the account and names no rule. The audit we run now — compare-at pricing, placeholder text, restricted products, shipping contradictions, and landing page mismatch.",
    tags: ["Merchant Center", "Feed"],
    read: "8 min",
    filed: "2026.03",
  },
  {
    n: "001",
    slug: "shopify-ltl-freight",
    title: "What breaks when you wire an LTL carrier into Shopify checkout",
    dek: "Four failure modes from a natural stone storefront — address validation, consignee fields, pickup calendars, and splitting oversized shipments.",
    tags: ["Freight", "CarrierService"],
    read: "6 min",
    filed: "2026.02",
  },
];
