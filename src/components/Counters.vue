<template>
  <section id="counters" class="py-16 bg-gradient-to-r from-blue-50 to-blue-80">
    <div class="max-w-6xl mx-auto text-center px-6">
      <!-- Title -->
      <h3 class="text-3xl md:text-4xl font-semibold text-[#1a365d] mb-12 about">
        {{ t("OurNationalImpact")}}
      </h3>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Clients -->
        <div class="card bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <p class="text-4xl md:text-5xl font-extrabold text-[#1a365d]">5,420+</p>
          <p class="mt-3 text-lg text-gray-600">{{ t('HappyClientsNationwide')}}</p>
        </div>

        <!-- Policies -->
        <div class="card bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <p class="text-4xl md:text-5xl font-extrabold text-green-600">1,290+</p>
          <p class="mt-3 text-lg text-gray-600">{{ t('ActiveInsurancePolicies')}}</p>
        </div>

        <!-- Years -->
        <div class="card bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <p class="text-4xl md:text-5xl font-extrabold text-purple-600">18+</p>
          <p class="mt-3 text-lg text-gray-600">{{ t('YearsofService')}}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { translations, lang } from '../i18n.js'
const t = (key) => (translations[lang.value] && translations[lang.value][key]) || translations.en[key] || key
</script>