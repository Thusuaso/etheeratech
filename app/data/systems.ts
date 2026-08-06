// app/data/systems.ts
//
// The rack. Each entry is a system that came out of a real engagement and
// is now reusable. Keep `scope` factual — never write a metric you cannot
// point at inside a real store's analytics.

export interface System {
  n: string;
  slug: string;
  name: string;
  layer: string;
  line: string;
  body: string;
  scope: string;
  stack: string[];
  status: "live" | "in build" | "on file";
}

export const systems: System[] = [
  {
    n: "01",
    slug: "freight-engine",
    name: "Freight Engine",
    layer: "Shipping",
    line: "LTL rates that appear in the cart, not on the invoice.",
    body: "A carrier rating service wired into Shopify checkout for pallet freight. Destination normalized against the postal code before rating, accessorials declared up front, pickup dates checked against the carrier calendar, and oversized carts split into pallets before a rate is ever requested.",
    scope: "Live on a US tile and stone storefront",
    stack: ["CarrierService API", "Nuxt", "Vercel", "ABF"],
    status: "live",
  },
  {
    n: "02",
    slug: "catalogue-pipeline",
    name: "Catalogue Pipeline",
    layer: "Data",
    line: "From a supplier with no API to a clean Shopify import.",
    body: "Scrapers pull the source catalogue, a normalizer maps it to Shopify schema — variants, options, metafields, media rows — and Matrixify does the import. Currency conversion, delivery-time metafields, and tag rules are applied on the way through, so the sheet that lands is already the sheet you want.",
    scope: "Eight supplier catalogues, furniture and stone",
    stack: ["Python", "Playwright", "Matrixify", "Admin API"],
    status: "live",
  },
  {
    n: "03",
    slug: "feed-doctor",
    name: "Feed Doctor",
    layer: "Channels",
    line: "Getting a disapproved catalogue back into Merchant Center.",
    body: "A review pass over everything Google actually checks: compare-at prices that no longer hold, placeholder tokens left in titles, restricted products still published, shipping services that contradict the feed. Bulk scripts run with a dry-run mode first, then resume from where they stopped.",
    scope: "Misrepresentation remediation across two storefronts",
    stack: ["GraphQL Admin API", "Python", "GMC"],
    status: "live",
  },
  {
    n: "04",
    slug: "filter-builder",
    name: "Filter Builder",
    layer: "Catalogue",
    line: "Storefront filters that work because the metafields are real.",
    body: "Filters fail when metafields are half-populated and inconsistently spelled. This audits the catalogue against a canonical value map, fills the gaps with an LLM pass, and validates every write back against the allowed set before it commits.",
    scope: "Applied across a multi-thousand product core catalogue",
    stack: ["Python", "Claude API", "Metafields"],
    status: "live",
  },
  {
    n: "05",
    slug: "index-control",
    name: "Index Control",
    layer: "SEO",
    line: "A catalogue that large should not all be indexed.",
    body: "Search Console and store analytics decide what stays. Products that have sold, drawn traffic, belong to the core catalogue, or were added recently are protected; the long tail is tagged for noindex so crawl budget goes where revenue is.",
    scope: "Designed for catalogues past 100k products",
    stack: ["Search Console", "Shopify Analytics", "Python"],
    status: "in build",
  },
  {
    n: "06",
    slug: "multi-store-ops",
    name: "Multi-store Ops",
    layer: "Operations",
    line: "Five storefronts, one operator, no drift.",
    body: "Publication targets, inventory locations, taxonomy assignment, and shipping profiles kept consistent across a portfolio of stores. Every script verifies which store it is pointed at before it writes anything — the failure mode here is silent and expensive.",
    scope: "Five US-market storefronts under one company",
    stack: ["GraphQL Admin API", "Python", "Shopify Flow"],
    status: "live",
  },
  {
    n: "07",
    slug: "price-monitor",
    name: "Price Monitor",
    layer: "Market",
    line: "Competitor pricing, checked on a schedule.",
    body: "A tracker that watches listing prices over time and reports movement, running unattended on a schedule. Built for marketplace pricing but the same shape works for any competitor set.",
    scope: "Running against a marketplace product set",
    stack: ["Python", "GitHub Actions"],
    status: "live",
  },
];
