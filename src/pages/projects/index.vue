<script setup lang="ts" >
import { getAllData } from "../../stores/getAllData";
import { storeToRefs } from "pinia";
import overlayloader from "../../components/Apps/overlayloader.vue";
const { projects } = storeToRefs(getAllData());
const processing = ref(false);
onMounted(async () => {
  if (projects.value.length === 0) {
    processing.value = true;

    getAllData()
      .getProjects()
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
    <overlayloader v-if="processing" />

    <div>
        <CompBg img="newsBg" />
        <div class="md:my-24 my-12 grid md:grid-cols-2 grid-cols-1 gap-16 md:px-32 px-8">
            <div class="flex flex-col" v-for="(item,index) in projects" :key="index"
                :data-aos="(index + 1) % 2 !== 0 ? 'fade-right' : 'fade-left'">
                <div class="new-img">
                    <img :src="item.image" class="h-60 w-full object-cover" :alt="item.image">
                </div>
                <div class="pe-4">
                    <h2 class="text-2xl mt-y font-semibold text-primary">{{ item.header }}</h2>
                    <p class="text-base mt-2">{{ item.content.slice(0, 200) }}...</p>
                    <base-button class="w-fit mt-6 " @click="$router.push({ path: `/projects/${item._id}`})">Read More</base-button>
                </div>
            </div>
        </div>
    </div>
</template>
  

  
  <style>
  
  </style>