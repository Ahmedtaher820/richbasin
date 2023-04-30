<script setup lang="ts">
import { PropType } from "vue";
import { PublicFormData } from "../../types/types";

const props = defineProps({
  projects:{
    type:Array as PropType<PublicFormData[]>
  }
})
</script>
<template>
  <div>
    <div class="overlay"></div>
    <h2 class="sec-header header-after-white text-white" data-aos="fade-up">
      Projects
    </h2>    
    <div class="grid md:grid-cols-3 grid-cols-1 gap-8 relative text-white text-center" >
      <div class="col-span-1" v-for="(project,index) in projects" :key="index">
        <router-link :to="{path:`/projects/${project._id}`}" class=" flex flex-col items-center justify-center gap-3"  data-aos="flip-left" 
          :data-aos-delay="150 * index"
        >
          <img :src="project.image" class="h-60" alt="project.header">
          <h2 class="text-3xl">{{project.header}}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style>

</style>