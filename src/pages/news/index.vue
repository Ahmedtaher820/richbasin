<script lang="ts" setup>
import {news} from "../../stores/new"
import { storeToRefs } from "pinia";
const {newsList} = storeToRefs(news())
</script>
<template>
    <div>
        <CompBg img="newsBg" />
        <div class="my-24 grid md:grid-cols-2 grid-cols-1 gap-16 md:px-32 px-12" >
            <div class="flex flex-col" v-for="item in newsList" :key="item.id" :data-aos="item.id % 2 !== 0 ? 'fade-right':'fade-left' ">
                <div class="new-img">
                    <img :src="`../../public/${item.imgSrc}.jpeg`" :alt="item.imgSrc">
                </div>
                <h2 class="text-2xl mt-4 mb-6 font-semibold text-primary">{{item.title}}</h2>
                <span class="text-sm">{{item.date}}</span>
                <p class="text-base mt-2">{{item.desc.slice(0,200)}}...</p>
                <BaseButton  class="w-fit mt-6 " @click="$router.push({path:'/news/'+item.link})">Read More</BaseButton>
            </div>
        </div>
    </div>
</template>


<style></style>