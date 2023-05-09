
<script lang="ts" setup>

const props = defineProps({
    img:{
        type:String,
        default:''
    },
    title:{
        type: String,
        default: ''
    }
})
const route = useRoute()
const paths = route.path.split("/")
</script>

<template>
  <div class="comp-bg serv-bg flex items-center h-96 md:pl-16 pl-8 text-white relative">
    <div class="overlay absolute"></div>
    <div class="relative flex flex-col">
        <h2 class="text-start md:text-4xl text-2xl leading-10 capitalize">{{title ? title : $route.name}}</h2>
        <div class="flex items-center gap-3 mt-8">
            <router-link :to="{path:link === '' ? '/': '/'+link}" v-for="(link,ind) in paths" :key="link">
                <span v-if="link === ''" class="flex items-center gap-3">Home  <span><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 16 16"><path fill="#f1f1f1" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></span></span>
                <span v-else-if="ind !== link.length - 1" class=" flex items-center gap-3 " :class="link === 'csr'?'uppercase':'capitalize'">{{link}} <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 16 16"><path fill="#f1f1f1" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></span>
                <span v-else class="capitalize">
                    {{ link }} 
                </span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>