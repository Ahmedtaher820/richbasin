<script lang="ts" setup>
import { getAllData } from "../stores/getAllData";
import { storeToRefs } from "pinia";
const { news, projects,  services,partners } = storeToRefs(getAllData());
const fun = [
  "innonvation",
  "integrity",
  "safety",
  "performance",
  "partnership",
  "operation excellence",
];
let ind = 0;
let currentChar = "";
let currentText = "";
let count = 0;
const text = ref("");
(function dynamicWriting() {
  if (count === fun.length) {
    count = 0;
  }
  currentText = fun[count];
  currentChar = currentText.slice(0, ++ind);
  text.value = currentChar;
  if (currentChar.length === currentText.length) {
    count++;
    ind = 0;
  }
  setTimeout(() => {
    dynamicWriting();
  }, 300);
})();
const newsData = ref([]);
const servicesData = ref([]);
const processing = ref(false);
onMounted(async () => {
  if(news.value.length === 0 || services.value.length === 0  || projects.value.length === 0 || partners.value.length === 0){

    processing.value = true;
    Promise.all([getAllData()
    .getNews(),getAllData()
      .getServices(),getAllData()
      .getProjects(),getAllData()
    .getPartners()]).finally(()=>{
        processing.value = false;
        
      })
    }
});
</script>

<template>
  <overlayloader v-if="processing" />
  <div class="relative">
    <div class="home overflow-hidden md:block hidden">
      <div class="header-content relative flex">
        <div>
          <video autoplay loop class="absolute top-0 z-0">
            <source src="../../public/sea-1.mp4" type="video/mp4" />
            <!-- <source src="Browsing.webm" type="video/webm" /> -->
          </video>
        </div>
        <div class="z-20 relative header-text flex flex-col justify-start items-start">
          <h1 class="text-1xl font-bold">RichBasin</h1>
          <p class="text-6xl">
            <span> {{ text }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="md:px-32 px-12 mt-24">
      <Services :services="services" />
    </div>
    <div class="serv-bg relative pt-16 pb-6 md:px-32 px-12 mt-20">
      <div class="overlay"></div>
      <h2 class="md:text-4xl text-1xl text-value" data-aos="fade-up">
        Started in 2018 in Petroleum R&D, build a new petroleum model based on a computerized technique using AI & ML learnings through analysis of world actual exploration and reservoir results using the conventional petroleum geology and exploration understanding. 
Hundreds of world field maps were analyzed, iterated and applied concepts of geology. An exploration model was achieved
model is engineering developed includes a mathematical algorithm with new phenomena support exploration, reservoir and production. It is a combination of many features. Four maps need to fit within a shape to prove successful reservoir.
      </h2>
    </div>
    <div class="md:px-32 px-12 mt-24">
      <LastestNews :news="news" class="mt-20" />
    </div>
    <div class="serv-bg relative pt-24 pb-12 md:px-32 px-12 mt-20">
      <OurProject :projects="projects" />
    </div>
    <div class="md:px-32 px-12 mt-24">
      <Partnerships :partners="partners" />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Red+Hat+Display:wght@300;400;600;700;800;900&family=Signika+Negative:wght@700&family=Tilt+Prism&display=swap');
.home {
  min-height: 80vh;
}

video {
  width: 100%;
}

.header-text {
  left: 60%;
  bottom: -50px;
  transform: translate(-50%, 50%);
  color: #fff;
  min-width: 600px;
}

.header-text::after {
  content: "";
  position: absolute;
  left: -20px;
  top: 30px;
  width: 10px;
  height: 100%;
  background-color: #555;
}

.header-text h1 {
  font-size: 80px;
  font-family: 'Signika Negative', sans-serif;}

.header-text span {
  color: #c3a70a;
  font-weight: bold;
  font-family: "Climate Crisis", cursive;
  font-family: "Tilt Prism", cursive;
  position: relative;
}

.header-text span::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 34px;
  top: 24px;
  right: -15px;
  background-color: #927e06;
  animation: animate ease-in-out 0.3s infinite;
}

@keyframes animate {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.serv-bg {
  background: url("../../public/pertol1.jpeg");
  background-position-y: 60%;
  background-size: cover;
}

.serv-bg h2 {
  @apply relative text-center text-white;
}
.text-value{
  line-height: 1.5;
}
</style>