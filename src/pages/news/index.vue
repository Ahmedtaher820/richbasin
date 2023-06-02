<script lang="ts" setup>
import { getAllData } from "../../stores/getAllData"
import { storeToRefs } from "pinia";
const { news} = storeToRefs(getAllData());

// const { newsList } = storeToRefs(getAllData())
const processing = ref(false)
onMounted(async () => {
  if (news.value.length === 0) {
    processing.value = true;
    getAllData()
      .getNews()
      .finally(() => {
        processing.value = false;
      });
  }
});
const dateFormat = (date:string)=>{
    return new Date(date).toISOString()
          .slice(0, 10)
          .split('/')
          .join('-') || ''
}
</script>
<template>
  <overlayloader v-if="processing" />

    <div>
        <CompBg img="newsBg" />
        <div class="md:my-24 my-12 grid md:grid-cols-2 grid-cols-1 gap-16 md:px-32 px-8">
            <div class="flex flex-col" v-for="(item,index) in news" :key="index"
                :data-aos="(index + 1) % 2 !== 0 ? 'fade-right' : 'fade-left'">
                <div class="new-img">
                    <img :src="item.image" class="h-60 w-full object-cover" :alt="item.image">
                </div>
                <div class="pe-4">
                    <h2 class="text-2xl mt-y font-semibold text-primary">{{ item.header }}</h2>
                    <span class="text-sm mt-1 text-zinc-600">{{ dateFormat(item.date) }}</span>
                    <p class="text-base mt-2">{{ item.content.slice(0, 200) }}...</p>
                    <base-button class="w-fit mt-6 " @click="$router.push({ path: `/news/${item._id}`})">Read More</base-button>
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>