<script setup>
useHead({
  title: 'Start a Shopify or Web Project | Etheera Tech',
})
useSeoMeta({
  title: 'Start a Shopify or Web Project | Etheera Tech',
  description:
    'Tell us about your project in 4 simple steps. Get a custom quote for Shopify development, e-commerce stores, SEO, web automation, or Nuxt web apps from Etheera Tech.',
  ogTitle: 'Start Your Project — Etheera Tech',
  ogDescription:
    'Answer a few quick questions and we\'ll get back to you within 24 hours with a tailored quote for your Shopify or web project.',
  ogImage: '/images/social-share.png',
  twitterCard: 'summary_large_image',
})

const toast = useToast()
const isLoading = ref(false)
const currentStep = ref(1)

const form = reactive({
  type: '',
  features: [],
  budget: '',
  timeline: '',
  name: '',
  email: '',
  phone: '',
  message: '',
})

const projectTypes = [
  { id: 'web',       title: 'Website',         icon: 'heroicons:globe-alt' },
  { id: 'ecommerce', title: 'E-Commerce',       icon: 'heroicons:shopping-bag' },
  { id: 'mobile',    title: 'Mobile App',       icon: 'heroicons:device-phone-mobile' },
  { id: 'bot',       title: 'Bot / Automation', icon: 'heroicons:cpu-chip' },
  { id: 'redesign',  title: 'Redesign',         icon: 'heroicons:paint-brush' },
  { id: 'other',     title: 'Custom Software',  icon: 'heroicons:cube' },
]

const featuresList = [
  'Admin Panel (CMS)',
  'Payment Integration',
  'Multi-language',
  'User Authentication',
  'SEO Optimization',
  'Logo Design',
  'Animated UI',
  'Analytics & Reporting',
]

const budgets = [
  '$500 - $1,500',
  '$1,500 - $5,000',
  '$5,000 - $15,000',
  '$15,000+',
]

const timelines = [
  'ASAP (1 Month)',
  '1–3 Months',
  '3–6 Months',
  'Flexible',
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery call',
    desc: 'We talk through your goals, existing setup, and what success looks like for your project. No jargon, no pressure.',
    icon: 'heroicons:chat-bubble-left-right',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    number: '02',
    title: 'Scoping & quote',
    desc: 'You get a clear breakdown — what we build, how long it takes, and what it costs. No surprise invoices.',
    icon: 'heroicons:document-text',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    number: '03',
    title: 'Development',
    desc: 'We build in sprints and share progress regularly. You stay in the loop via Telegram, email, or whatever works for you.',
    icon: 'heroicons:code-bracket-square',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    number: '04',
    title: 'Launch & support',
    desc: 'We go live together and stick around for questions, fixes, and future improvements — not just hand off and disappear.',
    icon: 'heroicons:rocket-launch',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
]

const faqs = [
  {
    q: 'Do you only work with Shopify stores?',
    a: 'Shopify is our core platform, but we also build with Nuxt/Vue for custom web apps, and handle backend automation with Python. If your project touches e-commerce, web, or automation — we can help.',
  },
  {
    q: 'How long does a typical Shopify project take?',
    a: 'A theme customization or product import pipeline usually takes 1–2 weeks. A full store build with multilingual setup, SEO, and integrations is typically 3–6 weeks. We scope everything clearly upfront so there are no surprises.',
  },
  {
    q: 'Can you fix or improve my existing Shopify store?',
    a: 'Absolutely — this is actually most of what we do. Whether it\'s a broken theme, slow performance, messy product data, or SEO issues, we start with an audit and give you a clear action plan.',
  },
  {
    q: 'What does the $500–$1,500 budget cover?',
    a: 'Smaller tasks like a single-page redesign, a custom section in Liquid, a product data import, or a focused SEO audit. For a full store build or automation pipeline, budget typically starts at $1,500+.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. Many of our clients work with us on a retainer basis for ongoing updates, new features, and monitoring. We\'re not the kind of agency that disappears after handoff.',
  },
  {
    q: 'I\'m not sure what I need — can I still reach out?',
    a: 'That\'s actually the best time to reach out. Fill in the form with what you know and we\'ll figure out the rest together on a free discovery call.',
  },
]

const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

const toggleFeature = (feature) => {
  if (form.features.includes(feature)) {
    form.features = form.features.filter((f) => f !== feature)
  } else {
    form.features.push(feature)
  }
}

const nextStep = () => {
  if (currentStep.value === 1 && !form.type) {
    toast.add({
      severity: 'warn',
      summary: 'Select a type',
      detail: 'Please choose a project type to continue.',
      life: 2000,
    })
    return
  }
  if (currentStep.value < 4) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const submitProject = async () => {
  if (!form.name || !form.phone) {
    toast.add({
      severity: 'warn',
      summary: 'Missing Information',
      detail: 'Please enter your name and phone number.',
      life: 3000,
    })
    return
  }

  isLoading.value = true

  const payload = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    service: form.type,
    budget: form.budget,
    message: `
      TIMELINE: ${form.timeline}
      FEATURES: ${form.features.join(', ')}
      NOTE: Submitted via project wizard.
    `,
  }

  try {
    const response = await $fetch('/api/send-telegram', {
      method: 'POST',
      body: payload,
    })

    if (response.success) {
      toast.add({
        severity: 'success',
        summary: 'Request Received! 🚀',
        detail: 'We\'ve got your project details and will be in touch shortly.',
        life: 5000,
      })
      currentStep.value = 1
      Object.assign(form, {
        type: '', features: [], budget: '', timeline: '',
        name: '', email: '', phone: '', message: '',
      })
    }
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Submission Failed',
      detail: 'Something went wrong. Please contact us directly via WhatsApp or email.',
      life: 3000,
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="pt-32 pb-20">

    <!-- ─── HERO ──────────────────────────────────────────────────── -->
    <div class="container mx-auto px-6 text-center mb-16">
      <div
        class="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4"
      >
        Free quote · Reply within 24 hours
      </div>

      <h1 class="text-3xl md:text-5xl font-bold mb-5">
        Let's Build Your Shopify Store<br class="hidden md:block" />
        or Web Project Together
      </h1>

      <p class="text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Whether you need a custom Shopify store, a theme fix, an SEO audit, or a
        full automation pipeline — fill in the form below and we'll come back to
        you with a clear scope and honest quote. No fluff, no hard sell.
      </p>
    </div>

    <!-- ─── HOW IT WORKS ──────────────────────────────────────────── -->
    <section class="container mx-auto px-6 mb-20">
      <h2 class="text-2xl font-bold text-center mb-10">How it works</h2>
      <div class="grid md:grid-cols-4 gap-6">
        <div
          v-for="step in processSteps"
          :key="step.number"
          class="relative p-6 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-white/10 transition-all"
        >
          <div
            :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-4', step.bg]"
          >
            <Icon :name="step.icon" size="24" :class="step.color" />
          </div>
          <span class="text-xs font-bold text-slate-600 tracking-widest">{{ step.number }}</span>
          <h3 class="text-white font-bold mt-1 mb-2">{{ step.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ─── WIZARD FORM ───────────────────────────────────────────── -->
    <div class="container mx-auto px-6 flex flex-col items-center">
      <div class="w-full max-w-3xl bg-slate-800 rounded-full h-2 mb-12 relative overflow-hidden">
        <div
          class="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
          :style="{ width: (currentStep / 4) * 100 + '%' }"
        ></div>
      </div>

      <div
        class="w-full max-w-4xl bg-slate-900/50 border border-white/10 rounded-3xl p-6 md:p-10 relative backdrop-blur-sm"
      >
        <!-- Step 1 -->
        <div v-if="currentStep === 1" class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">1</span>
            What do you want to build?
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="item in projectTypes"
              :key="item.id"
              @click="form.type = item.id"
              :class="[
                'cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center hover:scale-[1.02]',
                form.type === item.id
                  ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 ring-1 ring-cyan-500'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500',
              ]"
            >
              <Icon :name="item.icon" size="40" />
              <span class="font-medium">{{ item.title }}</span>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div v-else-if="currentStep === 2" class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">2</span>
            What features do you need?
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div
              v-for="feature in featuresList"
              :key="feature"
              @click="toggleFeature(feature)"
              :class="[
                'cursor-pointer px-4 py-3 rounded-xl border text-sm font-medium transition-all text-center select-none',
                form.features.includes(feature)
                  ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500',
              ]"
            >
              {{ feature }}
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div v-else-if="currentStep === 3" class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">3</span>
            Budget &amp; Timeline
          </h2>
          <div class="space-y-8">
            <div>
              <label class="block text-slate-400 mb-3 text-sm font-bold uppercase">Estimated Budget</label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  v-for="b in budgets"
                  :key="b"
                  @click="form.budget = b"
                  type="button"
                  :class="[
                    'py-3 rounded-xl border text-sm transition-all',
                    form.budget === b
                      ? 'bg-cyan-600 border-cyan-600 text-white'
                      : 'bg-slate-800 border-slate-700 text-slate-400',
                  ]"
                >
                  {{ b }}
                </button>
              </div>
            </div>
            <div>
              <label class="block text-slate-400 mb-3 text-sm font-bold uppercase">Target Timeline</label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  v-for="t in timelines"
                  :key="t"
                  @click="form.timeline = t"
                  type="button"
                  :class="[
                    'py-3 rounded-xl border text-sm transition-all',
                    form.timeline === t
                      ? 'bg-cyan-600 border-cyan-600 text-white'
                      : 'bg-slate-800 border-slate-700 text-slate-400',
                  ]"
                >
                  {{ t }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div v-else-if="currentStep === 4" class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">4</span>
            How can we reach you?
          </h2>
          <div class="space-y-4 max-w-2xl mx-auto">
            <div class="grid md:grid-cols-2 gap-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="Full Name"
                class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
              />
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Phone (+1 555 000 0000)"
                class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <input
              v-model="form.email"
              type="email"
              placeholder="Email Address"
              class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
            />

            <div class="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-sm text-slate-400 mt-4">
              <p><strong class="text-white">Project Type:</strong> {{ form.type }}</p>
              <p><strong class="text-white">Selected Features:</strong> {{ form.features.length }} selected</p>
              <p><strong class="text-white">Budget:</strong> {{ form.budget }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
          <button
            v-if="currentStep > 1"
            @click="prevStep"
            class="text-slate-400 hover:text-white px-6 py-2 flex items-center gap-2"
          >
            <Icon name="heroicons:arrow-left" /> Back
          </button>
          <div v-else></div>

          <Button
            v-if="currentStep < 4"
            @click="nextStep"
            label="Continue"
            icon="pi pi-arrow-right"
            iconPos="right"
            class="px-8 py-3 rounded-xl bg-white text-slate-900 font-bold border-none hover:bg-cyan-50"
          />

          <Button
            v-else
            @click="submitProject"
            label="Launch My Project"
            :loading="isLoading"
            class="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 border-none font-bold text-white hover:shadow-lg hover:shadow-purple-500/25"
          >
            <template #loadingicon>
              <Icon name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
            </template>
          </Button>
        </div>
      </div>
    </div>

    <!-- ─── FAQ ───────────────────────────────────────────────────── -->
    <section class="container mx-auto px-6 mt-28 max-w-3xl">
      <h2 class="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>

      <div class="space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="rounded-2xl border border-white/5 bg-slate-800/30 overflow-hidden"
        >
          <button
            class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors"
            @click="toggleFaq(i)"
          >
            <span class="font-medium text-white">{{ faq.q }}</span>
            <Icon
              name="heroicons:chevron-down"
              size="20"
              class="text-slate-400 transition-transform duration-300 flex-shrink-0"
              :class="openFaq === i ? 'rotate-180' : ''"
            />
          </button>
          <div
            v-show="openFaq === i"
            class="px-6 pb-5 text-slate-400 leading-relaxed text-sm border-t border-white/5 pt-4"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 text-center p-8 rounded-3xl bg-slate-800/30 border border-white/5">
        <p class="text-slate-400 mb-2 text-sm uppercase tracking-wide font-semibold">Still have questions?</p>
        <h3 class="text-xl font-bold text-white mb-4">
          Just drop us a message directly
        </h3>
        <p class="text-slate-400 text-sm mb-6 max-w-md mx-auto">
          We reply within 24 hours. No bots, no templated responses — a real person who knows Shopify and web development.
        </p>
        <NuxtLink to="/contact">
          <button
            class="px-8 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white hover:border-white transition-all text-sm font-medium"
          >
            Go to Contact Page
          </button>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>