<script setup>
useSeoMeta({
  title: 'Contact Etheera Tech | Shopify Development & Web Projects',
  description:
    'Get in touch with Etheera Tech for Shopify store development, theme customization, SEO audits, or web automation. Based in Turkey, serving clients in the US and Europe. We reply within 24 hours.',
  ogTitle: 'Contact Etheera Tech — Shopify & Web Development Agency',
  ogDescription:
    'Tell us about your project and we\'ll get back to you within 24 hours with a clear scope and honest quote.',
  ogImage: '/images/social-share.png',
  twitterCard: 'summary_large_image',
})

const toast = useToast()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
})

const services = [
  'Web Design',
  'E-Commerce',
  'SEO & Marketing',
  'Custom Software',
  'Bot & Automation',
  'Other',
]

const budgets = [
  '$500 - $1,500',
  '$1,500 - $5,000',
  '$5,000+',
  'Not decided yet',
]

const whyUs = [
  {
    icon: 'heroicons:clock',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    title: 'Reply within 24 hours',
    desc: 'A real person — not a bot — reads every message and responds with something useful.',
  },
  {
    icon: 'heroicons:shield-check',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    title: 'No hard sell',
    desc: 'We\'ll tell you honestly if your project is outside our scope or if you don\'t need us.',
  },
  {
    icon: 'heroicons:shopping-cart',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    title: 'Shopify specialists',
    desc: 'From theme development and Liquid coding to SEO audits and product data pipelines.',
  },
]

let isLoading = ref(false)

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.phone) {
    toast.add({
      severity: 'warn',
      summary: 'Missing Information',
      detail: 'Please fill in your name, email, and phone number.',
      life: 3000,
    })
    return
  }

  isLoading.value = true

  try {
    const response = await $fetch('/api/send-telegram', {
      method: 'POST',
      body: form,
    })

    if (response.success) {
      toast.add({
        severity: 'success',
        summary: 'Request Received 🚀',
        detail: `Thanks ${form.name.split(' ')[0]}! We've received your project details and will get back to you shortly.`,
        life: 5000,
      })

      form.name = ''
      form.email = ''
      form.phone = ''
      form.service = ''
      form.budget = ''
      form.message = ''
    }
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Submission Failed',
      detail: 'Something went wrong on our end. Please reach us directly via WhatsApp or email.',
      life: 5000,
    })
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="pt-32 pb-20 container mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-start">

      <!-- ─── LEFT COLUMN ──────────────────────────────────────────── -->
      <div class="space-y-8">
        <div>
          <!-- H1: keyword-rich -->
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Get a Free Quote for Your<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Shopify or Web Project
            </span>
          </h1>

          <!-- Intro paragraph: specific, honest, keyword-rich -->
          <p class="text-slate-400 text-lg leading-relaxed mb-4">
            Whether you need a new Shopify store built from scratch, an existing
            theme fixed, a technical SEO audit, or a custom automation pipeline —
            fill in the form and tell us what you're working on.
          </p>
          <p class="text-slate-400 leading-relaxed">
            We work with e-commerce brands, exporters, and small businesses across
            Turkey, the US, and Europe. If it involves Shopify, Nuxt, or web
            automation, there's a good chance we've seen it before.
          </p>
        </div>

        <!-- Why reach out cards -->
        <div class="space-y-3">
          <div
            v-for="item in whyUs"
            :key="item.title"
            class="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/30 border border-white/5"
          >
            <div :class="['w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0', item.bg]">
              <Icon :name="item.icon" size="22" :class="item.color" />
            </div>
            <div>
              <p class="text-white font-medium text-sm mb-0.5">{{ item.title }}</p>
              <p class="text-slate-400 text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Contact info -->
        <div class="space-y-3">
          <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-white/5">
            <div class="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Icon name="heroicons:envelope" size="24" />
            </div>
            <div>
              <p class="text-xs text-slate-500 uppercase font-bold">Email</p>
              <a
                href="mailto:info@etheeratech.com"
                class="text-white hover:text-cyan-400 transition"
              >
                info@etheeratech.com
              </a>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-white/5">
            <div class="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Icon name="heroicons:map-pin" size="24" />
            </div>
            <div>
              <p class="text-xs text-slate-500 uppercase font-bold">Office</p>
              <p class="text-white">Denizli Technopark, Turkey</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ─── RIGHT COLUMN — FORM (unchanged) ────────────────────── -->
      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] opacity-20 blur-xl"></div>

        <form
          @submit.prevent="handleSubmit"
          class="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl space-y-6"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300 ml-1">Full Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                placeholder="John Smith"
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div class="space-y-2 mt-6">
            <label class="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span class="text-slate-500 text-sm">+</span>
              </div>
              <input
                v-model="form.phone"
                type="tel"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                placeholder="1 555 000 0000"
              />
            </div>
          </div>

          <div class="space-y-3">
            <label class="text-sm font-medium text-slate-300 ml-1">What do you need help with?</label>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <button
                type="button"
                v-for="item in services"
                :key="item"
                @click="form.service = item"
                :class="[
                  'px-3 py-3 rounded-xl text-sm font-medium border transition-all duration-200',
                  form.service === item
                    ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500',
                ]"
              >
                {{ item }}
              </button>
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300 ml-1">Estimated Budget</label>
            <select
              v-model="form.budget"
              class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-cyan-500 transition-all"
            >
              <option value="" disabled selected>Select a range</option>
              <option v-for="b in budgets" :key="b" :value="b">{{ b }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300 ml-1">Project Details</label>
            <textarea
              v-model="form.message"
              rows="4"
              class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
              placeholder="Tell us a little about your project..."
            ></textarea>
          </div>

          <Button
            type="submit"
            label="Request a Quote"
            :loading="isLoading"
            class="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 border-none text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
          >
            <template #icon v-if="!isLoading">
              <Icon name="heroicons:paper-airplane" class="w-6 h-6" />
            </template>
            <template #loadingicon>
              <Icon name="heroicons:arrow-path" class="w-6 h-6 animate-spin" />
            </template>
          </Button>
        </form>
      </div>

    </div>
  </div>
</template>