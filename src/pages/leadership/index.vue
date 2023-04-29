<script lang="ts" setup>
import { storeToRefs } from "pinia"
import {getAllData} from "../../stores/getAllData"
const {leadershipInfo} = storeToRefs(getAllData())
const processing = ref(false)
onMounted(()=>{
    if(leadershipInfo.value.length === 0){
        processing.value= true
        getAllData().getAllLeaderShip().finally(()=>{
        processing.value= false

        })
    }
})
</script>

<template>
<div>
    <overlayloader v-if="processing" />
    <CompBg img="newsBg" title="Leadership Team" />
    <div class="my-24  md:px-32 px-12">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12 gap-6">
            <div class="col-span-1" v-for="member in leadershipInfo" :key="member._id">
                <div class="box flex flex-col text-center">
                    <div class="box-img border py-6 center-items mb-2">
                        <img :src="member.image"  :alt="member.name">
                    </div>
                    <h2 class="text-primary font-semibold text-2xl leading-6 mb-2">{{ member.name }}
                    </h2>
                    <h2 class="text-2xl text-amber-600">{{member.job}}</h2>
                    <base-button class="rounded-full w-fit mx-auto mt-4" @click="$router.push({path:`/leadership/${member._id}` , params:{id:member._id}})">Read More</base-button>
                </div>
            </div>
            
        </div>
    </div>
</div>  
</template>


<style>
.box-img img{
    height: 300px;
    width: 90%;
}
@media (max-width:762px){
    .box-img img{
        height: 200px;
        width: 80%;
    }
}
</style>