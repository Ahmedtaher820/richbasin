<script lang="ts" setup>
import {PublicFormData} from "../../types/types"
import {  PropType } from 'vue';

const props = defineProps({
  services:{
      type:[] as PropType<{
            content: string[]
            header: string 
            image: string
            date:string 
            _id:string 
        }[]>,
      required: true
  },
})
const newServices = computed(()=>{
    return props.services.length > 3 ? props.services.slice(0,3): props.services
})
</script>

<template>
    <div>
        <h2 class="sec-header header-after" data-aos="fade-down" data-aos-delay="100">Our Services</h2>
        <div class="grid md:grid-cols-3 grid-cols-1 text-center gap-6">
          <router-link :to="{path:'/services',hash:'/#'+serv._id}" class="shadow rounded-md px-2 pt-2 pb-2  md:mb-14 cursor-pointer text-center hover:bg-primary text-primary hover:text-white transition-all duration-400"
          v-for="(serv,index) in newServices" :key="serv._id"
          :data-aos="index % 2 !== 0 ? 'fade-right':'fade-left' "
          data-aos-delay="300"
          >
            <img :src="serv.image" class="h-60 mx-auto w-full rounded-md" :alt="serv.header">
            <h2 class="text-2xl mt-5 font-semibold ">{{serv.header}}</h2>
          </router-link>
        </div>
        <base-button data-aos="fade-up" @click="$router.push({path:'/services'})" class="mx-auto" text-size="md:text-1xl  rounded-sm mt-6 md:mt-0">More Services</base-button>
      </div>
</template>

<style>

</style>