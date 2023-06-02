<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { getAllData } from "../../stores/getAllData"
const { projects , getProjectsById } = storeToRefs(getAllData())
const processing = ref(false)
onMounted(()=>{
    if(projects.value.length === 0){
        processing.value = true
        getAllData().getProjects().finally(()=>{
            processing.value= false
        })
    }
})
</script>
<template>
    <overlayloader v-if="processing" />
    <div>
        <CompBg img="newsBg" :title="getProjectsById($route.params?.slug)?.header" />
        <div class="mt-12 flex flex-col md:px-32 px-8 my-24 gap-4 items-center mx-auto">
            <div class="page-img">
                <img :src="`${getProjectsById($route.params.slug)?.image}`"
                    :alt="getProjectsById($route.params.slug)?.content" class="w-full md:w-3/4 mx-auto">
            </div>
            <h1 class="text-3xl mt-2 text-primary font-semibold">{{ getProjectsById($route.params.slug)?.header }}</h1>
            <p class="leading-8 text-1xl">{{ getProjectsById($route.params.slug)?.content }}</p>
        </div>
    </div>
</template>


<style></style>