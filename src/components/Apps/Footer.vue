<script lang="ts" setup>
import {getAllData} from "../../stores/getAllData"
import { storeToRefs } from "pinia";
const {contact} = storeToRefs(getAllData())
const processing = ref(false);
onMounted(()=>{
    if(!contact.value._id?.length){
      processing.value = true
      getAllData().getContact().finally(()=>{
        processing.value = false
      })
    }
})


</script>
<template>
  <div class="bg-primary flex flex-col  md:px-32 px-4  pt-12 footer text-white">
    <div class="col-span-2">
        <div class="flex md:flex-row flex-col gap-6 justify-between items-center w-full pb-4">
            <img src="../../../public/logo.jfif" class="w-32 h-32 logo rounded-full" alt="Logo">
            <div class="flex flex-col  gap-3">
                <div class="flex items-center gap-3 md:gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg> 
                    <span class="ml-2 md:ml-0">{{contact?.email}}
                    </span>
                </div>
                  <a class="flex items-center  gap-3 md:gap-1" href="https://www.linkedin.com/in/richbasin-exploration-and-production-modules-a7170b26b/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715ZM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.667V9.75H8.34v8.589ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3h.003Z"/></svg>
                    <span class="ml-2 md:ml-0">{{'https://www.linkedin.com/in/richbasin-exploration-and-production-modules-a7170b26b/'.slice(0,30)}}...</span>
                </a>
                <div class="flex items-center  gap-3 md:gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                    <div>
                        <span class="ml-2 md:ml-0">{{contact?.phoneNumber1}} </span> , <span class="ml-2 md:ml-0"> {{ contact?.phoneNumber2}}</span>
                    </div>
                </div>
                <div class="flex items-start gap-3 md:gap-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/></svg>
                    <span class="ml-2 md:ml-0 w-64">{{contact?.location?.address}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="py-4 w-full flex gap-4 md:gap-0 md:flex-row flex-col items-center justify-between border-t">
        <p >
            Copyrights © 2023
            <b class="text-white font-semibold text-1xl">Richbasin</b>
            <span>,All Right Reversed.</span>
        </p>
        <p>
            <span class="font-thin">
                Designed By
            </span>
            <a href="tel:01008203698">
                <b class="text-white font-semibold text-1xl">Taher Div</b>
            </a>
            
        </p>
    </div>
  </div>
  <div>

  </div>
</template>


<style scoped>
.footer{
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.068);
}
</style>