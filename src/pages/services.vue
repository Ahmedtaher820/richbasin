<script setup lang="ts" >
const services = ref([
  {
    title:'Well Lifecycle Intervention & integrity Management',
    imgSrc:'petrol2',
    lists:['Optimize well lifecycle and increase recovery, extend life of producing wells','Support exploration, appraisal, development, and producing projects','Managed Pressure Drilling (MPD)','Slickline, wireline and coiled tubing intervention operations','Wellbore and near wellbore reservoir sand face cleaning','Provide intervention vessels, technical personnel, and support services','Well abandonment and decommissioning'],
    id:1
  },
  {
    title:'Well Lifecycle Intervention & integrity Management',
    imgSrc:'petrol2',
    lists:['Optimize well lifecycle and increase recovery, extend life of producing wells','Support exploration, appraisal, development, and producing projects','Managed Pressure Drilling (MPD)','Slickline, wireline and coiled tubing intervention operations','Wellbore and near wellbore reservoir sand face cleaning','Provide intervention vessels, technical personnel, and support services','Well abandonment and decommissioning'],
    id:2
  },
  {
    title:'Well Lifecycle Intervention & integrity Management',
    imgSrc:'petrol2',
    lists:['Optimize well lifecycle and increase recovery, extend life of producing wells','Support exploration, appraisal, development, and producing projects','Managed Pressure Drilling (MPD)','Slickline, wireline and coiled tubing intervention operations','Wellbore and near wellbore reservoir sand face cleaning','Provide intervention vessels, technical personnel, and support services','Well abandonment and decommissioning'],
    id:3
  },
  {
    title:'Well Lifecycle Intervention & integrity Management',
    imgSrc:'petrol2',
    lists:['Optimize well lifecycle and increase recovery, extend life of producing wells','Support exploration, appraisal, development, and producing projects','Managed Pressure Drilling (MPD)','Slickline, wireline and coiled tubing intervention operations','Wellbore and near wellbore reservoir sand face cleaning','Provide intervention vessels, technical personnel, and support services','Well abandonment and decommissioning'],
    id:4
  },
])
</script>

<template>
  <CompBg />
  <div class="md:px-32 px-12  my-24">
    <div class="flex flex-col gap-16">
      <div class="grid md:grid-cols-6 grid-cols-1 mb-12 gap-6" v-for="serv in services" :key="serv.id" :id="serv.id">
        <div class="serv-img md:col-span-2 grid-cols-1" :class="[serv.id % 2 !== 0 ? 'order-1':'']" data-aos="fade-right">
            <img :src="`../../../public/${serv.imgSrc}.jpeg`" class="h-80" alt="">
        </div>
        <div class="serv-content flex flex-col md:col-span-4 grid-cols-1" :data-aos="serv.id % 2 !== 0 ? 'fade-right':'fade-left' ">
          <h2 class="text-4xl text-primary font-semibold">{{serv.title}}</h2>
          <ul class="list-disc ml-8 mt-6 flex flex-col gap-2 text-xl">
            <li v-for="item in serv.lists" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>        
  </div>  
</template>
  

  
  <style>
  
  </style>