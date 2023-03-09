<script setup lang="ts">
import Loader from "./Loader.vue"

const props = defineProps({
showIcon : {
    type:Boolean,
    default: false
},
processing:{
    type: Boolean,
    default: false
}
})
const emits = defineEmits(['click'])
const click = ()=>{
    emits('click')
}
</script>

<template>
  <button class="bg-primary text-white px-4 py-2 text-sm border border-primary hover:border-primary-200 duration-300 transition-all hover:bg-primary-100  flex gap-2 items-center" @click="click()">
    <slot />
    <loader v-if="processing" />
    <svg
      v-if="showIcon"
      class="mt-0.5 ms-2 -me-1 arrow-icon"
      fill="none"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
    >
      <path class="transition opacity-0 group-hover:opacity-100" d="M0 5h7" />
      <path class="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4" />
    </svg>
  </button>
</template>


<style>
.arrow-icon{
    stroke:white;
    stroke-width:2px
}
</style>