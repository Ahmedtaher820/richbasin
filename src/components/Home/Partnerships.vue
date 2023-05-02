<script lang="ts" setup>
import type {PartnerShip} from "../../types/types"
  const props = defineProps({
    partners:{
      type:Array as PropType<PartnerShip[]>,
      default:()=>([{image:'',text:''}])
    }
  })
</script>
<template>
  <div class="mb-24">
    <h2 class="sec-header pb-3 header-after">Strategic Clients & Partnerships
    </h2>
    <div class="flex gap-8 md:flex-row items-center justify-center flex-col partnerships mx-auto w-full overflow-x-hidden">
      <div class="flex items-center flex-col justify-center" data-aos="fade-right">
        <a  :href="partners[0]?.text"> <img :src="partners[0]?.image" target="_blank"  alt=""></a>
      </div>
      <div class="flex items-center md:flex-col flex-row justify-center  gap-4" data-aos="fade-right" data-aos-delay="100">
        <a :href="partners[1]?.text" > <img :src="partners[1]?.image" alt=""></a>
        <a :href="partners[2]?.text" > <img :src="partners[2]?.image" alt=""></a>
      </div>
      <div class="flex items-center  md:flex-col flex-row justify-center gap-4" data-aos="fade-right" data-aos-delay="300">
        <a :href="partners[3]?.text" > <img :src="partners[3]?.image" alt=""></a>
        <a :href="partners[4]?.text"> <img :src="partners[4]?.image" alt=""></a>
        <a :href="partners[5]?.text"> <img :src="partners[5]?.image" alt=""></a>
      </div>
      <div class="flex items-center  md:flex-col flex-row justify-center gap-4" data-aos="fade-left" data-aos-delay="300">
        <a :href="partners[6]?.text"> <img :src="partners[6]?.image" alt=""></a>
        <a :href="partners[7]?.text"> <img :src="partners[7]?.image" alt=""></a>
        <a :href="partners[8]?.text"> <img :src="partners[8]?.image" alt=""></a>
      </div>
      <div class="flex items-center  md:flex-col flex-row justify-center gap-4" data-aos="fade-left" data-aos-delay="100">
        <a :href="partners[9]?.text" > <img :src="partners[9]?.image" alt=""></a>
        <a :href="partners[10]?.text"> <img :src="partners[10]?.image" alt=""></a>
      </div>
      <div class="flex items-center flex-col justify-center " data-aos="fade-left" >
        <a :href="partners[11]?.text" > <img :src="partners[11]?.image" alt=""></a>
      </div>
      <!-- 
       
       -->
    </div>
    <base-button @click="$router.push({path:'/partnerships'})" class="mx-auto mt-6" text-size="md:text-2xl  rounded-sm">Show More Partnerships</base-button>
  </div>
</template>

<style>
.partnerships img {
  @apply w-32 h-32
}
</style>