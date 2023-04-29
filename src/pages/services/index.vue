<script setup lang="ts" >
import { getAllData } from "../../stores/getAllData";
import { storeToRefs } from "pinia";
import overlayloader from "../../components/Apps/overlayloader.vue";
const { services } = storeToRefs(getAllData());
const processing = ref(false);
onMounted(async () => {
  if (services.value.length === 0) {
    processing.value = true;

    getAllData()
      .getServices()
      .finally(() => {
        processing.value = false;
      });
  }
});
const listArr = (arr:string[]):string[]=>{
    return arr.join('-').split('-')
}
</script>

<template>
  <CompBg />
  <overlayloader v-if="processing" />
  <div class="md:px-32 px-12  my-24">
    <div class="flex flex-col gap-8">
      <div class="grid md:grid-cols-6 grid-cols-1 mb-12 gap-6" v-for="(serv,index) in services" :key="serv._id" >
        <div class="serv-img md:col-span-2 grid-cols-1" :class="[(index + 1) % 2 !== 0 ? 'order-1':'']" data-aos="fade-right">
            <img :src="serv.image" class="h-80" alt="">
        </div>
        <div class="serv-content flex flex-col md:col-span-4 grid-cols-1" :data-aos="(index+1) % 2 !== 0 ? 'fade-right':'fade-left' ">
          <h2 class="text-4xl text-primary font-semibold">{{serv.header}}</h2>
          <ul class="list-disc ml-8 mt-6 flex flex-col gap-2 text-xl">
            <li v-for="item in listArr(serv.content)" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>        
  </div>  
</template>
  

  
  <style>
  
  </style>