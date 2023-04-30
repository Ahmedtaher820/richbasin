<script lang="ts" setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { CalendarIcon , ClockIcon     } from "@heroicons/vue/24/outline"
import {PublicFormData} from "../../types/types"
import {  PropType } from 'vue';
const props = defineProps({
  carouselInfo:{
      type:[] as PropType<PublicFormData[]>,
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
const dateFormat = (date:string)=>{
    return new Date(date).toISOString()
          .slice(0, 10)
          .split('/')
          .join('-') || ''
}
</script>
<template>
  <Carousel :items-to-show="2" :wrap-around="true" :breakpoints="breakPoints" :autoplay="4000">
      <Slide v-for="obj in carouselInfo" :key="obj._id" class="w-full">
        <div class="w-1/2 mb-14 cursor-pointer" 
          
          >
          <img :src="obj.image" class="w-full h-60" :alt="obj.header">
          <div class="new-body py-8 pl-8 pr-8 bg-primary-200 text-start">
              <div class="">
                  <h2 class="text-2xl font-semibold text-primary">{{obj.header}}</h2>
                  <p class=" leading-5 mt-2"> {{ obj.content }}
                  </p>
                  <span class="text-sm block mt-2 text-neutral-600">{{new Date(obj.date).toISOString()
                   .slice(0, 10)
                   .split('/')
                   .join('-') || ''}}</span> 
                  <router-link class="bg-primary text-white px-4 py-2 text-sm border border-primary hover:border-primary-200 duration-300 transition-all hover:bg-primary-100  flex gap-2 items-center w-fit mt-3" :to="{path:`/news/${obj._id}`}">Join Now</router-link>
                </div>
              
            </div>
          </div>
    </Slide>
  
    </carousel> 
  </template>
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
    right: -2.5px;
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
  