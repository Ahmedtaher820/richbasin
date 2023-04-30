<script lang="ts" setup>
import { getAllData } from "../stores/getAllData";
import { storeToRefs } from "pinia";
const { news, projects, contact, services } = storeToRefs(getAllData());
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
  if (news.value.length === 0) {
    processing.value = true;

    await getAllData()
      .getNews()
      .then((res) => {
        newsData.value = res.data.documents;
      })
      .finally(() => {
        processing.value = false;
      });
  }
  if (services.value.length === 0) {
    await getAllData()
      .getServices()
      .then((res) => {
        servicesData.value = res.data.documents;
      })
      .finally(() => {
        processing.value = false;
      });
  }

  if (projects.value.length === 0) {
    await getAllData()
      .getProjects()
      .finally(() => {
        processing.value = false;
      });
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
        <div class="z-20 relative header-text">
          <h1 class="text-1xl">RichBasin</h1>
          <p class="text-6xl">
            We Have <span> {{ text }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="md:px-32 px-12 mt-24">
      <Services :services="services" />
    </div>
    <div class="serv-bg relative pt-16 pb-6 md:px-32 px-12 mt-20">
      <div class="overlay"></div>
      <h2 class="text-4xl leading-relaxed" data-aos="fade-up">
        We provide the energy industry with world-class drilling rigs, well
        construction, intervention and lifecycle management, engineering
        procurement and construction services, highly trained and motivated
        people, the latest technologies, sustainable and safe operations.
      </h2>
    </div>
    <div class="md:px-32 px-12 mt-24">
      <LastestNews :news="news" class="mt-20" />
    </div>
    <div class="serv-bg relative pt-24 pb-12 md:px-32 px-12 mt-20">
      <OurProject :projects="projects" />
    </div>
    <div class="md:px-32 px-12 mt-24">
      <Partnerships />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Tilt+Prism&display=swap");

.home {
  min-height: 80vh;
}

video {
  width: 100%;
}

.header-text {
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, 50%);
  color: #fff;
  min-width: 400px;
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
  font-family: "Climate Crisis", cursive;
}

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
</style>