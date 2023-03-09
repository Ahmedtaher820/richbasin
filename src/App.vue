<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useApp } from './stores/app';
import i18n from "./i18n"
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

const {name} = storeToRefs(useApp())

onMounted(() => {
  const lang = localStorage.getItem('selected-locale')
  if (lang) { i18n.global.locale.value = JSON.parse(lang) }
  else {
    if (i18n.global.locale.value !== 'ar' && i18n.global.locale.value !== 'en') {
      i18n.global.locale.value = 'en'
      localStorage.setItem('selected-locale', JSON.stringify('en'))
      return
    }
    localStorage.setItem('selected-locale', JSON.stringify(i18n.global.locale.value))
  }
})
</script>

<template>
  <div style="height:800vh">
    <nav-bar />
    <router-view />
  </div>
</template>

<style>
.sec-header{
  position: relative;
  @apply text-4xl mb-14 text-center text-primary font-bold mx-auto;
  width: fit-content;
}
.header-after::after,.header-after-white::after{
  content:'';
  position:absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  height: 4px;
  @apply bg-primary w-32
}
.header-after-white::after{
  @apply bg-white

}
.overlay{
  @apply absolute top-0 left-0  w-full h-full z-0;
  background-color: #07395eb8;
}
</style>
