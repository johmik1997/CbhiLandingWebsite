<template>
  <section id="services" class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          {{ t('features') }}
        </h2>
        <p class="text-gray-600 mt-3 max-w-2xl mx-auto">
          {{ t('services_intro') }}
        </p>
      </div>

      <!-- Cards Grid -->
     <!-- Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div 
    v-for="(service, i) in services[lang]" 
    :key="i"
    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition transform hover:-translate-y-2"
  >
    <!-- Icon -->
    <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
      <component :is="service.icon" class="w-8 h-8"/>
    </div>

    <!-- Title -->
    <h3 class="text-xl font-semibold text-gray-800 mb-3">
      {{ service.title }}
    </h3>

    <!-- Description -->
    <p class="text-gray-600 leading-relaxed">
      {{ service.description }}
    </p>
  </div>
</div>

    </div>
  </section>
</template>

<script setup>
import { Users, Building2, Hospital, CreditCard, FileCheck2, Info } from "lucide-vue-next"
import { lang, translations } from "../i18n.js"

// helper function
const t = (key) => {
  if (translations[lang.value] && translations[lang.value][key]) {
    return translations[lang.value][key];
  } else if (translations.en && translations.en[key]) {
    return translations.en[key];
  } else {
    return key;
  }
}

// services translations
const services = {
  en: [
    { title: "Community-Based Health Insurance (CBHI)", description: "Affordable healthcare coverage for rural and informal sector households.", icon: Users },
    { title: "Social Health Insurance (SHI)", description: "Payroll-based coverage for formal sector employees and their families.", icon: Building2 },
    { title: "Accredited Health Facilities", description: "Access quality healthcare from our nationwide network of approved hospitals and clinics.", icon: Hospital },
    { title: "Claims & Reimbursements", description: "Fast and transparent claims management system for insured members.", icon: FileCheck2 },
    { title: "Premium Collection & Subsidies", description: "Easy premium payment options and government subsidies for vulnerable groups.", icon: CreditCard },
    { title: "Awareness & Education", description: "Public campaigns and training to promote health insurance awareness.", icon: Info }
  ],
  am: [
    { title: "የማህበረሰብ ተዋህዶ የጤና ኢንሹራንስ (CBHI)", description: "ለገጠር እና ለማይዘርፉ ቤተሰቦች ቀላል የጤና እንክብካቤ ሽፋን።", icon: Users },
    { title: "የማህበራዊ ጤና ኢንሹራንስ (SHI)", description: "ለተመዘገቡ ሰራተኞች እና ለቤተሰቦቻቸው በደመወዝ የተመሠረተ ሽፋን።", icon: Building2 },
    { title: "የተረጋገጡ የጤና ተቋማት", description: "ከአገር አቀፍ የተፈቀዱ ሆስፒታሎችና ክሊኒኮች ጋር የጥራት ጤና አገልግሎት።", icon: Hospital },
    { title: "ጥያቄዎችና ኪሳራ ክፍያ", description: "ለተከበሩ አባላት ፈጣን እና ግልጽ የጥያቄ አስተዳደር ስርዓት።", icon: FileCheck2 },
    { title: "የፕሪሚየም መከፈልና የመንግስት ድጋፍ", description: "ቀላል የፕሪሚየም ክፍያ አማራጮች እና ለተጋላጭ ቡድኖች የመንግስት ድጋፍ።", icon: CreditCard },
    { title: "እርምጃና ትምህርት", description: "የህዝብ ዘመቻዎችና ስልጠና ለጤና ኢንሹራንስ ግንዛቤ ማስፋፊያ።", icon: Info }
  ]
}
</script>
