<script setup>
useSeoMeta({
  title: "Start a project",
  description:
    "Tell us what is breaking — freight that will not rate, a catalogue that will not import, a feed sitting disapproved. You get a written read of where it is failing before any talk of scope or price.",
  ogTitle: "Start a project — Etheera Tech",
  ogDescription:
    "Describe what is failing in your store and you get a written read of where it is breaking.",
  ogImage: "/images/social-share.png",
  twitterCard: "summary_large_image",
});

const form = reactive({
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
  website: "",
  _t: Date.now(),
});

const resetForm = () => {
  Object.assign(form, {
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    website: "",
    _t: Date.now(),
  });
};

const services = [
  { k: "01", v: "Freight & shipping logic" },
  { k: "02", v: "Catalogue import pipeline" },
  { k: "03", v: "Feed / channel remediation" },
  { k: "04", v: "Storefront development" },
  { k: "05", v: "Automation & scraping" },
  { k: "06", v: "Something else" },
];

const budgets = [
  "Under $1,500",
  "$1,500 - $5,000",
  "$5,000+",
  "Not decided yet",
];

const commitments = [
  {
    k: "Reply",
    v: "Within 24 hours",
    d: "A person reads it, not an autoresponder.",
  },
  {
    k: "First response",
    v: "A written read",
    d: "Where we think the problem actually sits, before any scope or price.",
  },
  {
    k: "If it is not a fit",
    v: "We say so",
    d: "Including when you do not need us, or when a cheaper fix exists.",
  },
];

const isLoading = ref(false);
const status = ref(null); // { type: 'ok' | 'warn' | 'error', text: string }

const handleSubmit = async () => {
  if (isLoading.value) return;
  status.value = null;

  if (!form.name || !form.email || !form.phone) {
    status.value = {
      type: "warn",
      text: "Name, email, and phone are needed before this can be sent.",
    };
    return;
  }

  isLoading.value = true;

  try {
    const response = await $fetch("/api/send-telegram", {
      method: "POST",
      body: { ...form },
    });

    if (response.success) {
      const first = form.name.split(" ")[0];
      resetForm();
      status.value = {
        type: "ok",
        text: `Received, ${first}. We will come back to you within 24 hours.`,
      };
    }
  } catch (error) {
    const code = error?.statusCode || error?.response?.status;
    status.value =
      code === 429
        ? {
            type: "warn",
            text: "That is a few requests in a short window. Try again in an hour, or email info@etheeratech.com directly.",
          }
        : {
            type: "error",
            text: "This did not send. Email info@etheeratech.com and we will pick it up there.",
          };
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="pt-14">
    <section class="mx-auto max-w-6xl px-5 pt-20 pb-24">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- ── LEFT: the brief ─────────────────────────────── -->
        <div class="lg:col-span-5">
          <p class="label text-cobalt mb-8">Start a project</p>

          <h1
            class="font-display font-semibold tracking-[-0.03em] leading-[1.02] text-[2.3rem] sm:text-[2.9rem] text-balance"
          >
            Tell us what is breaking.
          </h1>

          <p class="mt-7 text-[1.05rem] leading-relaxed text-ink/85">
            A store that will not rate freight. A supplier catalogue that will
            not import cleanly. A product feed sitting disapproved for the third
            week. Describe the failure, not the project &mdash; that is the part
            we can actually read.
          </p>

          <!-- commitments, as a spec block -->
          <dl class="mt-10 border-t border-ink">
            <div
              v-for="c in commitments"
              :key="c.k"
              class="py-4 border-b border-rule"
            >
              <dt class="label mb-1">{{ c.k }}</dt>
              <dd class="font-mono text-[0.85rem] mb-1">{{ c.v }}</dd>
              <dd class="text-[0.95rem] text-graphite leading-relaxed">
                {{ c.d }}
              </dd>
            </div>
          </dl>

          <dl class="mt-8 space-y-3">
            <div>
              <dt class="label mb-1">Direct</dt>
              <dd>
                <a
                  href="mailto:info@etheeratech.com"
                  class="font-mono text-[0.85rem] border-b border-rule hover:text-cobalt hover:border-cobalt transition-colors"
                >
                  info@etheeratech.com
                </a>
              </dd>
            </div>
            <div>
              <dt class="label mb-1">Studio</dt>
              <dd class="font-mono text-[0.85rem] text-graphite">
                Denizli, Turkey &middot; Remote
              </dd>
            </div>
          </dl>
        </div>

        <!-- ── RIGHT: the form ─────────────────────────────── -->
        <div class="lg:col-span-6 lg:col-start-7">
          <form novalidate class="relative" @submit.prevent="handleSubmit">
            <p class="label pb-3 border-b border-ink">
              Project brief &mdash; all fields on one page
            </p>

            <!-- name -->
            <div class="pt-6">
              <label for="f-name" class="label block mb-2">
                Name <span class="text-cobalt">*</span>
              </label>
              <input
                id="f-name"
                v-model="form.name"
                type="text"
                maxlength="100"
                autocomplete="name"
                placeholder="Jane Okonkwo"
                class="w-full bg-transparent border-b border-rule pb-2 font-mono text-[0.9rem] placeholder:text-graphite/60 focus:border-cobalt focus:outline-none transition-colors"
              />
            </div>

            <!-- email -->
            <div class="pt-7">
              <label for="f-email" class="label block mb-2">
                Email <span class="text-cobalt">*</span>
              </label>
              <input
                id="f-email"
                v-model="form.email"
                type="email"
                maxlength="150"
                autocomplete="email"
                placeholder="jane@company.com"
                class="w-full bg-transparent border-b border-rule pb-2 font-mono text-[0.9rem] placeholder:text-graphite/60 focus:border-cobalt focus:outline-none transition-colors"
              />
            </div>

            <!-- HONEYPOT -->
            <div
              class="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
              aria-hidden="true"
            >
              <label for="website">Company website</label>
              <input
                id="website"
                v-model="form.website"
                type="text"
                name="website"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <!-- phone -->
            <div class="pt-7">
              <label for="f-phone" class="label block mb-2">
                Phone <span class="text-cobalt">*</span>
              </label>
              <input
                id="f-phone"
                v-model="form.phone"
                type="tel"
                maxlength="30"
                autocomplete="tel"
                placeholder="+1 555 000 0000"
                class="w-full bg-transparent border-b border-rule pb-2 font-mono text-[0.9rem] placeholder:text-graphite/60 focus:border-cobalt focus:outline-none transition-colors"
              />
            </div>

            <!-- service, as a ledger -->
            <fieldset class="pt-9">
              <legend class="label mb-3">Where it is failing</legend>
              <div class="border-t border-rule">
                <button
                  v-for="s in services"
                  :key="s.k"
                  type="button"
                  :aria-pressed="form.service === s.v"
                  class="w-full flex items-baseline gap-4 py-3 border-b border-rule text-left transition-colors"
                  :class="
                    form.service === s.v
                      ? 'bg-panel text-ink'
                      : 'hover:bg-panel/60 text-graphite'
                  "
                  @click="form.service = s.v"
                >
                  <span
                    class="font-mono text-[0.7rem] w-8 shrink-0"
                    :class="form.service === s.v ? 'text-cobalt' : 'text-rule'"
                  >
                    {{ form.service === s.v ? "■" : s.k }}
                  </span>
                  <span class="font-mono text-[0.85rem]">{{ s.v }}</span>
                </button>
              </div>
            </fieldset>

            <!-- budget -->
            <div class="pt-7">
              <label for="f-budget" class="label block mb-2">Budget</label>
              <select
                id="f-budget"
                v-model="form.budget"
                class="w-full bg-transparent border-b border-rule pb-2 font-mono text-[0.9rem] focus:border-cobalt focus:outline-none transition-colors"
              >
                <option value="">Not specified</option>
                <option v-for="b in budgets" :key="b" :value="b">
                  {{ b }}
                </option>
              </select>
            </div>

            <!-- message -->
            <div class="pt-7">
              <label for="f-message" class="label block mb-2">
                What is happening
              </label>
              <textarea
                id="f-message"
                v-model="form.message"
                rows="5"
                maxlength="2000"
                placeholder="Rates stopped returning for some addresses about two weeks ago. No error, the shipping step just shows nothing."
                class="w-full bg-transparent border-b border-rule pb-2 font-mono text-[0.9rem] leading-relaxed placeholder:text-graphite/60 focus:border-cobalt focus:outline-none transition-colors resize-y"
              ></textarea>
            </div>

            <!-- status -->
            <p
              v-if="status"
              role="status"
              aria-live="polite"
              class="mt-7 font-mono text-[0.82rem] leading-relaxed border-l-2 pl-4 py-2"
              :class="{
                'border-cobalt text-ink': status.type === 'ok',
                'border-oxide text-oxide':
                  status.type === 'warn' || status.type === 'error',
              }"
            >
              {{ status.text }}
            </p>

            <!-- submit -->
            <div class="pt-9 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                :disabled="isLoading"
                class="font-mono text-[0.85rem] tracking-wide text-paper bg-ink px-7 py-3 hover:bg-cobalt disabled:opacity-50 disabled:hover:bg-ink transition-colors"
              >
                {{ isLoading ? "Sending…" : "Send brief →" }}
              </button>
              <span class="label">Reply within 24 hours</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
