<script setup>
import logo1 from "../assets/images/logo1.jpg"
import logo2 from "../assets/images/logo2.jpg"
</script>
<template>
     <header class="flex justify-between items-center p-4">
      <img :src="logo1" alt="EHIS Logo" class="h-20 md:h-24" />
      <img :src="logo2" alt="MOH Logo" class="h-20 md:h-24" />
    </header>
</template>
