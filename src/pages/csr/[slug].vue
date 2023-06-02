<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { getAllData } from "../../stores/getAllData"
const { csr , getCsrById } = storeToRefs(getAllData())
const processing = ref(false)
onMounted(()=>{
    if(csr.value.length === 0){
        processing.value = true
        getAllData().getCsr().finally(()=>{
            processing.value= false
        })
    }
})
</script>
<template>
  <overlayloader v-if="processing" />

    <div>
        <CompBg img="newsBg" :title="getCsrById($route.params?.slug)?.header" />
        <div class="mt-12 flex flex-col md:px-32 px-8 my-24 gap-4 items-center w-3/4 mx-auto">
            <div class="page-img">
                <img :src="`${getCsrById($route.params.slug)?.image}`"
                    :alt="getCsrById($route.params.slug)?.content" class="w-full mx-auto">
            </div>
            <h1 class="text-3xl mt-2 text-primary font-semibold">{{ getCsrById($route.params.slug)?.header }}</h1>
            <p class="leading-8 text-1xl ">{{ getCsrById($route.params.slug)?.content }}</p>
        </div>
    </div>
</template>


<style></style>