<script setup>
useSeoMeta({
  title: "Wiring an LTL carrier into Shopify checkout",
  description:
    "Four failure modes we hit connecting an LTL freight carrier to Shopify's CarrierService API for a natural stone catalogue — address validation, consignee fields, pickup calendars, and shipment splitting.",
  ogTitle: "What breaks when you wire an LTL carrier into Shopify checkout",
  ogDescription:
    "Field notes from a natural stone storefront: address validation, missing consignee fields, weekend pickups, and splitting oversized shipments.",
  twitterCard: "summary_large_image",
});

const spec = [
  { k: "Filed", v: "2026.02" },
  { k: "Layer", v: "Freight" },
  { k: "Surface", v: "CarrierService API" },
  { k: "Read", v: "6 min" },
];

const logFields = [
  "Raw cart payload as received from Shopify",
  "Normalized destination after postal code resolution",
  "Full outbound request body",
  "Carrier response, including empty rate sets",
  "Pallet split decisions and resulting weights",
];
</script>

<template>
  <article class="mx-auto max-w-3xl px-5 pt-32 pb-20">
    <NoteHeader
      n="001"
      eyebrow="Freight · Shopify · Natural stone"
      title="What breaks when you wire an LTL carrier into Shopify checkout."
      :spec="spec"
    />

    <div class="note-prose">
      <p class="text-[1.2rem] leading-[1.6] text-ink">
        Flat-rate shipping works until the box weighs 900 kilos. For a stone and
        tile catalogue it stops working immediately — the difference between a
        pallet going to a commercial dock in New Jersey and a residential
        driveway in Montana is several hundred dollars, and no flat rate absorbs
        that. So you wire the carrier into checkout and let it quote in real
        time. Here is what nobody tells you about the four weeks after that
        decision.
      </p>

      <h2>The shape of the integration</h2>

      <p>
        Shopify exposes a CarrierService endpoint. You register a callback URL;
        at checkout Shopify posts the cart and destination to it and waits for a
        list of rates. Return an empty list and the shopper sees no shipping
        options at all. Return slowly and Shopify gives up and shows nothing.
        The whole integration lives inside a few seconds, with no retry and no
        error surface — which is why the failures below are all silent.
      </p>

      <p>
        Everything after this point assumes that skeleton is in place and
        returning rates for a clean test address. That is the easy day. These
        are the other days.
      </p>

      <NoteBlock
        n="01"
        title="The city has to match the postal code"
        fix="Normalize the destination server-side before rating. Resolve the city from the postal code, ignore the typed city entirely, and keep the shopper's version only for the label."
      >
        <p>
          Carrier rating endpoints validate the destination against their own
          address book. Shopify sends whatever the shopper typed. A shopper in
          Falls Church who types "Washington" because that is what their mail
          says will fail rating — not with a bad address error, but with an
          empty rate set, which Shopify renders as "no shipping available at
          this address."
        </p>
      </NoteBlock>

      <NoteBlock
        n="02"
        title="Consignee fields are not optional, even when they are"
        fix="Declare accessorials on every request. Infer residential from an address type lookup, and let the shopper correct it in the cart rather than discovering it on the invoice."
      >
        <p>
          The documentation marks several consignee parameters as optional. In
          practice, omitting them returns a rate well below what the carrier
          will actually bill, because the default assumes a commercial dock with
          a forklift. Residential delivery, liftgate, and limited access are all
          surcharges that only appear if you declare the accessorials up front.
        </p>
      </NoteBlock>

      <NoteBlock
        n="03"
        title="Nobody picks up on Sunday"
        fix="Compute the next valid pickup date against the carrier's own calendar, not a generic business-day helper. Cache the holiday list and refresh it quarterly."
      >
        <p>
          Rating requests carry a pickup date. Send today's date on a Saturday
          evening and the carrier rejects the request outright. Send it during a
          holiday week and you get a transit estimate that is quietly two days
          short, which becomes a delivery promise the storefront cannot keep.
        </p>
      </NoteBlock>

      <NoteBlock
        n="04"
        title="One order is not one shipment"
        fix="Split the cart into pallets before rating, rate each pallet, and sum. Splitting logic belongs in your code, not in the carrier's assumptions."
      >
        <p>
          A pallet of travertine has a weight ceiling and a linear footage
          ceiling. Past either one, the shipment is no longer a single rating
          unit — but the carrier will still return a number, and that number
          will be wrong. Large orders are exactly the orders you cannot afford
          to misquote.
        </p>
      </NoteBlock>

      <h2>Log the whole exchange, from day one</h2>

      <p>
        Every one of the four failures above presents identically to the
        shopper: no rates, no explanation. You cannot debug that from the
        storefront, and the shopper who hit it has already left. The only way
        back is a log that captures both sides of every rating call.
      </p>

      <ul class="border-t border-rule my-6">
        <li
          v-for="l in logFields"
          :key="l"
          class="font-mono text-[0.84rem] leading-relaxed py-3 border-b border-rule text-ink/85"
        >
          {{ l }}
        </li>
      </ul>

      <p>
        Keep thirty days of it. The pattern in a failing integration is almost
        never visible in one request — it shows up as a cluster of empty
        responses from one state, or every Saturday night, or only on carts
        above a certain weight.
      </p>

      <h2>What this actually costs</h2>

      <p>
        The engineering is a week. The four weeks after it are address edge
        cases, and they are the part worth budgeting for. If you are quoting
        this work, quote the tail — a freight integration that rates correctly
        for the first fifty orders and then silently stops rating for Alaska is
        worse than a flat rate, because nobody notices until the quarter closes.
      </p>

      <hr class="border-none border-t border-ink my-14" />

      <p class="text-graphite text-[0.98rem]">
        We build freight, catalogue, and feed systems for brands shipping
        material — stone, tile, wood, furniture.
        <NuxtLink to="/contact" class="text-cobalt border-b border-cobalt">
          Start a project &rarr;
        </NuxtLink>
      </p>
    </div>
  </article>
</template>
