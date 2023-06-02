<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { getAllData } from "../../stores/getAllData"
const { news , getNewsById } = storeToRefs(getAllData())
const processing = ref(false)
onMounted(()=>{
    if(news.value.length === 0){
        processing.value = true
        getAllData().getNews().finally(()=>{
            processing.value= false
        })
    }
})
</script>
<template>
  <overlayloader v-if="processing" />

    <div>
        <CompBg img="newsBg" :title="getNewsById($route.params?.slug)?.header" />
        <div class="mt-12 flex flex-col md:px-32 px-8 md:my-24 my-12 gap-4 items-center md:w-3/4 mx-auto">
            <div class="page-img">
                <img :src="`${getNewsById($route.params.slug)?.image}`"
                    :alt="getNewsById($route.params.slug)?.content" class="w-full mx-auto">
            </div>
            <h1 class="text-3xl mt-2 text-primary font-semibold">{{ getNewsById($route.params.slug)?.header }}</h1>
            <p class="leading-8 text-1xl">{{ getNewsById($route.params.slug)?.content }}</p>
        </div>
    </div>
</template>


<style></style>