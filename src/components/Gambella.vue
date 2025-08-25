<template>
  <div
    class="min-h-screen flex flex-col bg-white relative"
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <!-- Header -->
    <header class="flex justify-between items-center p-3 z-10 relative">
      <img :src="logo1" alt="MOH Logo" class="h-24" />
      <img :src="logo2" alt="Addis Logo" class="h-24" />
    </header>

    <!-- Hero Section -->
    <main class="flex flex-1 flex-col justify-center items-center text-center px-6 relative z-10 -mt-32">
      <h1 class="text-5xl md:text-7xl  font-bold mb-2">welcome!</h1>
      <h2 class="text-4xl md:text-6xl font-bold mb-8">
        To <span class="text-blue-500">Gambella</span> Health Insurance
      </h2>

      <!-- Tagline -->
      <div class="border rounded-lg px-12 py-2 text-blue-400 text-2xl font-medium transparent mb-8 bg-white/80 shadow">
        Affordable, Accessible, and Reliable Healthcare
      </div>
      <!-- Buttons -->
  <div class="item-center">
        <button class="border-2 border-[#0078C9] md:text-2xl md:px-12 text-white bg-blue-400 px-8 py-2 rounded-md font-semibold shadow hover:bg-white hover:text-[#0078C9]">
          CBHI
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import bgImage from '../assets/images/gambella.jpg'
import logo1 from "../assets/images/logo2.jpg"
import logo2 from "../assets/images/hararlogo.jpg"

export default {
  path: '/gambella',
  name: 'Gambella',
  component: () => import('./Gambella.vue'),
  data() {
    return {
      bgImage,
      logo1,
      logo2
    }
  }
}
</script>
