<script lang="ts" setup>
const carosuelData = ref([
    {
        title:'Offshore Drilling & Well Completion',
        img:{
            src:'about2',
            alt: 'first'
        },
        date:{
            fullTime:'01-jan-2024',
            hours:'8:00 : 10:00'
        },
        place:'New York',
        link:'/',
        id:1
    },
    {
        title:'Offshore Drilling & Well Completion',
        img:{
            src:'about2',
            alt: 'first'
        },
        date:{
            fullTime:'01-jan-2024',
            hours:'8:00 : 10:00'
        },
        place:'New York',
        link:'/',
        id:2
    },
    {
        title:'Offshore Drilling & Well Completion',
        img:{
            src:'about2',
            alt: 'first'
        },
        date:{
            fullTime:'01-jan-2024',
            hours:'8:00 : 10:00'
        },
        place:'New York',
        link:'/',
        id:3
    }
])
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
        
        <main-carousel :carouselInfo="carosuelData" type="events" />

    </div>

</div>  
</template>

<style>

.sec-news .news-box:hover img{
    transform: scale(1.2);
}
</style>