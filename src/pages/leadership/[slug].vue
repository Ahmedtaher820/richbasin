<script lang="ts" setup>
import { storeToRefs } from "pinia"
import {getAllData} from "../../stores/getAllData"
import type {LeaderShipType} from "../../types/types"
const {leadershipInfo,getLeaderShipById} = storeToRefs(getAllData())
const processing = ref(false)
const route = useRoute()
const member = ref<LeaderShipType>({name:'',image:'',_id:'',content:'',job:''})
const { getLeaderShip} = storeToRefs(getAllData())
onMounted(()=>{
    if(getLeaderShip.value.length === 0){
        processing.value = true
        getAllData().getAllLeaderShip().finally(()=>{
            processing.value= false
        })
    }
})
</script>
<template>
    <overlayloader v-if="processing" />
  <div class="md:my-24 my-12  md:px-32 px-8">
    <div class="grid grid-cols-4 gap-10">
        <div class="md:col-span-1 col-span-4">
            <img class="h-60 object-contain" :src="getLeaderShipById(route.params.slug)?.image" :alt="member.name">
        </div>
        <div class="md:col-span-3 col-span-4">
            <h1 class="md:text-5xl text-2xl font-bold text-primary">{{getLeaderShipById(route.params.slug)?.name}}</h1>
            <h3 class="md:text-2xl text-xl mt-2 text-amber-600">{{getLeaderShipById(route.params.slug)?.job}}</h3>
            <p class="md:text-2xl w-full mt-4 text-zinc-500 md:leading-10 leading-6">
                {{ getLeaderShipById(route.params.slug)?.content }}
            </p>
        </div>
    </div>
  </div>
</template>


<style>

</style>