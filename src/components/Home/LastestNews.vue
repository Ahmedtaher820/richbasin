<script lang="ts" setup>
import { PropType } from "vue"
import type {PublicFormData} from "../../types/types"

const props = defineProps({
    news:{
        type: Array as PropType<PublicFormData[]>
    }
})
const carosuelData = ref([])

</script>
<template>
<div            data-aos-offset="600"
data-aos-easing="ease-in-out"
>
    <h2 class="sec-header header-after" data-aos="fade-down">Lastest News</h2>
    <h5 class="text-1xl text-center" data-aos="fade-up" 
    >Be ready for upcoming
    <small class="text-primary font-semibold inline-block text-base">*RICHBASIN*</small> events</h5>
    <div class="mt-10 sec-news">
        
        <main-carousel carouselType="events" :carouselInfo="news"  />

    </div>

</div>  
</template>

<style>

.sec-news .news-box:hover img{
    transform: scale(1.2);
}
</style>