<script setup>
useSeoMeta({
  title: "Getting a catalogue out of Merchant Center Misrepresentation",
  description:
    "Google does not tell you which rule you broke. Here is the audit we run on a suspended Merchant Center account — compare-at pricing, placeholder text, restricted products, shipping contradictions, and landing page mismatch.",
  ogTitle: "Getting a catalogue out of Merchant Center Misrepresentation",
  ogDescription:
    "The audit list for a Misrepresentation suspension, and how to run the bulk fixes without breaking the store.",
  twitterCard: "summary_large_image",
});

// Literal template token — kept in script so the mustache parser doesn't choke
const tokenExample = "{" + "{ product_name }" + "}";

const spec = [
  { k: "Filed", v: "2026.03" },
  { k: "Layer", v: "Channels" },
  { k: "Surface", v: "Google Merchant Center" },
  { k: "Read", v: "8 min" },
];
</script>

<template>
  <article class="mx-auto max-w-3xl px-5 pt-32 pb-20">
    <NoteHeader
      n="002"
      eyebrow="Merchant Center · Feed health"
      title="Getting a catalogue out of Misrepresentation."
      :spec="spec"
    />

    <div class="note-prose">
      <p class="text-[1.2rem] leading-[1.6] text-ink">
        Misrepresentation is the worst notice Google sends, because it is the
        one that tells you nothing. Other policy violations name the item and
        the rule. This one suspends the whole account, cites a policy page with
        a dozen sub-clauses, and leaves you to guess which one applies. Your
        Shopping ads are already off.
      </p>

      <p>
        We have worked through this on more than one store. What follows is the
        audit we run now, in the order we run it, and the part nobody warns you
        about: the appeal process assumes you already found the problem.
      </p>

      <h2>It is about trust, not products</h2>

      <p>
        The mental model that helps: Misrepresentation is not a product policy,
        it is a merchant policy. Google is not saying a listing is wrong. It is
        saying it cannot verify that your business is what it claims to be, or
        that a shopper landing on your store would get what the ad promised.
      </p>

      <p>
        That reframing matters, because most people start by auditing product
        titles. The trigger is usually somewhere else entirely — a discount that
        was never real, a returns page that does not exist, a price the landing
        page does not honour. Here is what we check.
      </p>

      <NoteBlock
        n="01"
        title="Compare-at prices that never held"
        fix="Clear every compare-at value the store cannot defend. If a price was never charged at that level, the discount is fabricated — regardless of intent."
      >
        <p>
          This is the single most common cause we find. A store imports a
          supplier catalogue, the import sets a compare-at price at some
          multiple of cost, and now every product in the store shows a permanent
          40% discount that was never a real price. Google reads a strikethrough
          price as a claim about your own sales history.
        </p>
        <p>
          Bulk imports make this easy to do by accident. Matrixify will happily
          write a compare-at column across ten thousand products, and nobody
          looks at it again.
        </p>
      </NoteBlock>

      <NoteBlock
        n="02"
        title="Placeholder text still in the catalogue"
        fix="Search titles, descriptions, and metafields for template tokens, lorem text, and supplier-internal codes. Unpublish anything that still carries them."
      >
        <p>
          Scraped and templated catalogues leave residue: an unresolved
          <code>{{ tokenExample }}</code> in a description, a supplier's
          internal SKU pattern in the title, a category page that reads
          "Description coming soon." Individually harmless. Across a few hundred
          products it reads as an unfinished storefront, which is exactly the
          signal Misrepresentation is looking for.
        </p>
      </NoteBlock>

      <NoteBlock
        n="03"
        title="Restricted products still published"
        fix="Audit the catalogue against Google's restricted list, not your own sense of what is normal. Unpublish rather than delete, so the URLs stay resolvable."
      >
        <p>
          Dropship and supplier catalogues carry things you did not choose to
          sell. Knife-adjacent tools, certain supplements, anything that reads
          as a medical claim, weapon accessories that arrived inside a general
          hardware feed. You did not add them deliberately — an import did — and
          they are still in your account.
        </p>
      </NoteBlock>

      <NoteBlock
        n="04"
        title="Shipping and returns that contradict the storefront"
        fix="Make the Merchant Center shipping services and the store's own policy pages agree, literally. Same countries, same rates, same return window, same wording."
      >
        <p>
          Merchant Center holds one set of shipping services. The storefront
          holds another. A returns page says thirty days, the account says
          fourteen, and a shipping profile still lists a country you stopped
          serving last year. Each of these is a small inconsistency; together
          they describe a merchant whose stated terms cannot be relied on.
        </p>
        <p>
          Contact information is part of this. An account with no phone number,
          no physical address, and a contact form as the only channel is
          structurally harder to verify.
        </p>
      </NoteBlock>

      <NoteBlock
        n="05"
        title="Feed and landing page disagree"
        fix="Sample the feed against live pages after every bulk update. Price, availability, and currency have to match what a shopper actually sees."
      >
        <p>
          The feed says $4.99 and in stock. The page says $6.49 and sold out,
          because a price rule ran after the last sync. Google checks this
          directly, and a mismatch on a meaningful share of the catalogue is
          read as bait — the exact thing Misrepresentation exists to catch.
        </p>
        <p>
          Multi-currency stores get bitten here more than anyone. A feed
          submitted in one currency against a storefront that price-rounds in
          another will drift apart quietly.
        </p>
      </NoteBlock>

      <h2>Running the fixes without breaking the store</h2>

      <p>
        Every one of these fixes is a bulk write against a live catalogue, which
        means the fix itself is now the risk. Three things we do without
        exception:
      </p>

      <p>
        <strong>Dry run first, always.</strong> Every script gets a mode that
        reports what it would change and writes nothing. Read the report. On one
        pass a compare-at cleanup would have wiped genuine seasonal discounts on
        a few hundred products, and we only caught it because nothing had been
        written yet.
      </p>

      <p>
        <strong>Make it resumable.</strong> Rate limits, timeouts, and a laptop
        that sleeps will all interrupt a run across thousands of products. The
        script should record what it finished and pick up from there — not start
        over and not silently skip.
      </p>

      <p>
        <strong>Verify which store you are pointed at.</strong> If you operate
        more than one storefront, confirm the target before the first write, in
        the script, every time. This sounds paranoid until the day it is not.
      </p>

      <h2>The appeal, and what it actually takes</h2>

      <p>
        Requesting a review before you have fixed anything burns a cycle. The
        automated pass finds the same problems and rejects again, and each round
        trip costs days.
      </p>

      <p>
        Expect more than one rejection even after real fixes, because the
        automated review may be looking at cached crawl data. If you have made
        substantive changes and still get rejected, that is the point to pursue
        a human review through support rather than resubmitting a fourth time.
        Bring specifics: what you changed, how many products it touched, when
        the change went live. A support case that says "we fixed it" reads the
        same as no case at all.
      </p>

      <h2>What we would do differently</h2>

      <p>
        Nothing in this list is hard to fix. Almost all of it is trivial to
        prevent — and the reason it accumulates is that bulk imports write
        fields nobody audits afterward. The compare-at column, the placeholder
        description, the restricted product that came along for the ride.
      </p>

      <p>
        So the real lesson is upstream: audit the import, not the account. A
        pipeline that validates compare-at values, strips unresolved tokens, and
        checks new products against a restricted list costs an afternoon to
        build and would have prevented every suspension we have worked through.
      </p>

      <hr class="border-none border-t border-ink my-14" />

      <p class="text-graphite text-[0.98rem]">
        We build catalogue pipelines and feed remediation for stores selling
        material — stone, tile, flooring, furniture.
        <NuxtLink to="/contact" class="text-cobalt border-b border-cobalt">
          Start a project &rarr;
        </NuxtLink>
      </p>
    </div>
  </article>
</template>
