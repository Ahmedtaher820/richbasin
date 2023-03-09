<template>
  <div>
    <div class="overlay"></div>
    <h2 class="sec-header header-after-white text-white" data-aos="fade-up">
      Projects
    </h2>    
    <div class="grid md:grid-cols-3 grid-cols-1 gap-8 relative text-white text-center">
      <router-link to="/" class="flex flex-col items-center justify-center gap-3"  data-aos="flip-left" 
        data-aos-delay="150"
      
      >
        <img src="../../public/project1.jpg" alt="">
        <h2 class="text-3xl">Platform Installation & Drilling</h2>
      </router-link>
      <router-link to="/" class="flex flex-col items-center justify-center gap-3"  data-aos="flip-right" 
        data-aos-delay="250"
      
      >
        <img src="../../public/project1.jpg" alt="">
        <h2 class="text-3xl">Platform Installation & Drilling</h2>
      </router-link>
      <router-link to="/" class="flex flex-col items-center justify-center gap-3"  data-aos="flip-left" 
        data-aos-delay="150"
      
      >
        <img src="../../public/project1.jpg" alt="">
        <h2 class="text-3xl">Platform Installation & Drilling</h2>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>

</style>