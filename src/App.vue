<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useApp } from './stores/app';
// import i18n from "./i18n"
import { onMounted } from 'vue';
// import { useI18n } from 'vue-i18n';
import { useWindowScroll } from '@vueuse/core'

// const { locale } = useI18n()


const { x, y } = useWindowScroll()

onMounted(() => {
  // const lang = localStorage.getItem('selected-locale')
  // if (lang) { i18n.global.locale.value = JSON.parse(lang) }
  // else {
  //   if (i18n.global.locale.value !== 'ar' && i18n.global.locale.value !== 'en') {
  //     i18n.global.locale.value = 'en'
  //     localStorage.setItem('selected-locale', JSON.stringify('en'))
  //     return
  //   }
  //   localStorage.setItem('selected-locale', JSON.stringify(i18n.global.locale.value))
  // }
})
const movePageTop = ()=>{
  window.scrollTo(0,0)
}
</script>

<template>
  <div>
    <nav-bar />
      <router-view />
    <Footer />
    <Teleport to="body">
      <div class="btn-up fixed  bottom-10 bg-primary py-2 px-2 rounded-sm hover:bg-primary-100 duration-300 cursor-pointer transition-all right-10" @click="movePageTop()"  v-if="y >= 800">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 move-to" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 11l5-5l5 5M7 17l5-5l5 5"/></svg>
      </div>
    </Teleport>
  </div>
</template>

<style>
*{
  scroll-behavior: smooth;
}
body{
  overflow-x: hidden;
}
::selection{
  color: white;
  @apply bg-primary
}
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
.move-to{
  animation: move-up .5s infinite alternate-reverse;
}
@keyframes move-up{
  to{
    transform: translateY(-5px);
  }
}
</style>
