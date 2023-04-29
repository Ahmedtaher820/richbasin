<script lang="ts" setup>
import {PublicFormData} from "../../types/types"
import {  PropType } from 'vue';

const props = defineProps({
  services:{
      type:[] as PropType<PublicFormData[]>,
      required: true
  },
})
</script>

<template>
    <div>
        <h2 class="sec-header header-after" data-aos="fade-down" data-aos-delay="100">Our Services</h2>
        <div class="grid md:grid-cols-3 grid-cols-1 text-center gap-8"             
    >
          <router-link :to="{path:'/services',hash:'/#'+serv._id}" class="  md:mb-14 cursor-pointer"
          v-for="(serv,index) in services" :key="serv._id"
          :data-aos="index % 2 !== 0 ? 'fade-right':'fade-left' "
          data-aos-delay="300"
          >
            <img :src="serv.image" class="h-60" :alt="serv.header">
            <h2 class="text-2xl mt-5 font-semibold text-primary">{{serv.header}}</h2>
          </router-link>
</div>
      </div>
</template>

<style>

</style>