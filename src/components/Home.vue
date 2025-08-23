<script setup>
import { ref, watch } from "vue"
import { useRouter } from "vue-router"

// Logos & Background
import logo1 from "../assets/images/logo1.jpg"
import logo2 from "../assets/images/logo2.jpg"
import bgImage from "../assets/images/homebggg.jpg"
import HomeNavbar from "./HomeNavbar.vue"

const selectedRegion = ref("")
const router = useRouter()

watch(selectedRegion, (newRegion) => {
  if (!newRegion) return
  router.push({ name: newRegion })
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HomeNavbar/>
   <div
      class="flex flex-col flex-1 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bgImage})`,
        backgroundPosition:'center', 
        backgroundRepeat: 'no-repeat',
        // backgroundSize:cover
       }"
    >
    <!-- Header -->
    <!-- <header class="flex justify-between items-center p-4">
      <img :src="logo1" alt="EHIS Logo" class="h-20 md:h-24" />
      <img :src="logo2" alt="MOH Logo" class="h-20 md:h-24" />
    </header> -->

    <!-- Background Wrapper -->
 
      <!-- Hero Section -->
      <main class="flex flex-col md:flex-row flex-1">
        <!-- Left Text -->
        <div class="w-full md:w-3/5 p-8 flex flex-col justify-center -translate-y-2">
          <h1 class="text-4xl md:text-5xl font-bold">
            <span class="text-5xl">Welcome to </span> <br />
            Ethiopian Health <br /> Insurance
          </h1>

          <div class="space-y-8 mt-6">
            <div class="glass-card p-4">
              <h2 class="text-blue-600 font-semibold">Our Vision</h2>
              <p>To see healthy, productive and prosperous Ethiopians.</p>
            </div>

            <div class="glass-card p-4">
              <h2 class="text-blue-600 font-semibold">Our Mission</h2>
              <p>
                “To promote the health and well-being of the society through providing
                and regulating a comprehensive package of health services of the highest
                possible quality in an equitable manner.”
              </p>
            </div>
          </div>
        </div>

        <!-- Region Selector -->
        <div class="md:flex-1 mt-32 flex justify-center items-center p-4">
          <div class="bg-white/80 p-4 rounded shadow max-w-xs w-full">
            <label class="block mb-2 font-semibold">Select Region</label>
            <select
              v-model="selectedRegion"
              class="w-full text-black bg-blue-500 rounded px-3 py-2 border"
            >
              <option value="">Select region</option>
              <option value="AddisAbaba">Addis Ababa</option>
              <option value="Amhara">Amhara</option>
              <option value="Oromia">Oromia</option>
              <option value="Tigray">Tigray</option>
              <option value="Gambella">Gambella</option>
              <option value="Harer">Harari</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
.glass-card {
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 12px 6px rgba(255, 255, 255, 0.6);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}

.glass-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    transparent,
    rgba(255, 255, 255, 0.3)
  );
}
</style>
