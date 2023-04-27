<script lang="ts" setup>
import { storeToRefs } from "pinia"
import {news} from "../../stores/new"
const { getPageContent} = storeToRefs(news())
</script>
<template>
    <div>
        <CompBg img="newsBg" :title="getPageContent($route.params?.slug)?.title" />
        <div class="mt-12 flex flex-col md:px-32 px-12 my-24 gap-4 items-center w-3/4 mx-auto">
            <div class="page-img">
                <img :src="`../../../public/${getPageContent($route.params.slug)?.imgSrc}.jpeg`" :alt="getPageContent($route.params.slug).imgSrc" class="w-full mx-auto">
            </div>
            <h1 class="text-3xl mt-2 text-primary font-semibold">{{getPageContent($route.params.slug)?.title}}</h1>
            <p class="leading-8 text-1xl">{{getPageContent($route.params.slug)?.desc}}</p>
        </div>
    </div>
</template>


<style></style>