<template>
  <Carousel :items-to-show="2" :wrap-around="true" :breakpoints="breakPoints" :autoplay="4000">
      <Slide v-for="obj in carouselInfo" :key="obj.id" class="w-full">
        <div class="w-1/2 mb-14 cursor-pointer" 
          
          >
            <img src="../../../public/about2.jfif" alt="first">
            <div class="new-body grid grid-cols-5 py-8 pl-8 pr-8 bg-primary-200">
              <div class="col-span-2 flex flex-col pr-6 news-info relative border-r-2">
                <span class="pb-5 relative" > <CalendarIcon class="h-4 w-4 text-gray-700" /> {{ obj.date.fullTime }} </span>
                <span class="pb-5 relative" ><ClockIcon class="h-4 w-4 text-gray-700" /> {{ obj.date.hours }}</span>
                <span class="pb-5" ><LocationMarkerIcon class="h-4 w-4 text-gray-700" /> {{ obj.place }}</span>
              </div>
              <div class="col-span-3 pl-6 pr-6 text-left">
                <h2 class="text-1xl font-semibold text-primary">Lorem ipsum dolor sit.</h2>
                <p class="text-sm leading-6 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dignissimos

                </p>
                <base-button class="mt-4" show-icon>Join Now</base-button>
              </div>
            </div>
          </div>
    </Slide>
  
    </carousel>
  </template>
  <script lang="ts" setup>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import { CalendarIcon , ClockIcon     } from "@heroicons/vue/24/outline"
  import {   LocationMarkerIcon     } from "@heroicons/vue/24/solid"



  import {Events} from "../../types/types"
  import {  PropType } from 'vue';
  const props = defineProps({
    carouselInfo:{
        type:[] as PropType<Events[]>,
        required: true
    },
    carouselType:{
        type:String,
        required:true
    }
  })
  const breakPoints = {
    320:{
      itemsToShow: 1,
        snapAlign: 'center',
    },
    700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
  }
  </script>
  <style>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  .news-info span{
  color: rgba(0, 0, 0, 0.696);

    @apply flex gap-4 items-center
  }
  .news-info::after{
    content: '';
    position: absolute;
    right: -1.5px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #e6c10f;
    width: 3px;
    height: 50px;
  }
.news-info span:not(:last-of-type)::after{
  content: '';
  bottom: 10px;
  left: 0px;
  height: 1px;
  background-color: rgba(0,0,0,.15);
  @apply absolute w-full 
}
.carousel__slide > div {
  width: 85% !important;
}
</style>
  