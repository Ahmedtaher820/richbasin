<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { getAllData } from "../stores/getAllData"
const { partners } = storeToRefs(getAllData())
const processing = ref(false)
onMounted(()=>{
    if(partners.value.length === 0){
        processing.value = true
        getAllData().getPartners().finally(()=>{
            processing.value= false
        })
    }
})
</script>
<template>
    <overlayloader v-if="processing" />
    <CompBg img="newsBg" title="Partnerships" />
    <div class="mt-12 flex flex-col md:px-32 px-12 my-24 gap-4">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-32 gap-6 mx-auto">
            <a v-for="(partner,index) in partners" :key="index" :href="partner?.text" target="_blank"> <img :src="partner?.image" class="w-64 h-32 object-contain" alt="Partnerships"></a>
            
        </div>
    </div>
</template>


<style></style>