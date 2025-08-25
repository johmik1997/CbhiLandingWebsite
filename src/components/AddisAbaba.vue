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
    <main class="flex flex-1 flex-col justify-center items-center text-center px-6">
      <h1 class="text-5xl md:text-7xl  font-bold mb-2">welcome!</h1>
      <h2 class="text-4xl md:text-6xl font-bold mb-8">
        To <span class="text-blue-500">Addis Ababa</span> Health Insurance Services
      </h2>

      <!-- Tagline -->
      <div class="border rounded-lg px-12 py-2 text-blue-400 text-2xl font-medium transparent mb-8 bg-white/80 shadow">
        Affordable, Accessible, and Reliable Healthcare
      </div>

      <!-- Buttons -->
      <div class="flex gap-10">
        <button class="bg-[#0078C9] text-white md:text-2xl px-8 md:px-12 py-2 rounded-md font-semibold shadow hover:bg-white hover:text-[#0078C9]">
          SHI
        </button>
        <button class="border-2 border-blue-900 md:text-2xl md:px-12 text-[#0078C9] bg-white px-8 py-2 rounded-md font-semibold shadow hover:bg-[#0078C9] hover:text-white">
          <a href="https://cftest.kenemapharmacy.com/">
          CBHI
          </a>
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import bgImage from '../assets/images/addisababa.jpg'
import logo1 from "../assets/images/logo2.jpg"
import logo2 from "../assets/images/addis.jpg"

export default 
{
  name: 'AddisAbaba',
  data() {
    return {
      bgImage,
      logo1,
      logo2
    }
  }
}
</script>
