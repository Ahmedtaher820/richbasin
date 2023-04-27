<script lang="ts" setup>
import { storeToRefs } from "pinia"
import {leadership} from "../../stores/leadership"
import type {LeaderShipType} from "../../types/types"
const {leadershipInfo,getLeaderShipById} = storeToRefs(leadership())
const processing = ref(false)
const route = useRoute()
const member = ref<LeaderShipType>({name:'',image:'',_id:'',content:'',job:''})
const { getLeaderShip} = storeToRefs(leadership())
onMounted(()=>{
    if(getLeaderShip.value.length === 0){
        processing.value = true
        leadership().getAllLeaderShip().finally(()=>{
            processing.value= false
        })
    }
    // @ts-ignore
})
</script>
<template>
    <overlayloader v-if="processing" />
  <div class="my-24  md:px-32 px-12">
    <div class="grid grid-cols-10 gap-10">
        <div class="col-span-3">
            <img :src="getLeaderShipById(route.params.slug)?.image" :alt="member.name">
        </div>
        <div class="col-span-7">
            <h1 class="md:text-5xl text-2xl font-bold text-primary">{{getLeaderShipById(route.params.slug)?.name}}</h1>
            <h3 class="text-2xl mt-2 text-amber-600">Corporate Communications Manager</h3>
            <p class="text-2xl mt-4 text-zinc-500 leading-10">
                {{ getLeaderShipById(route.params.slug)?.content }}
            </p>
        </div>
    </div>
  </div>
</template>


<style>

</style>