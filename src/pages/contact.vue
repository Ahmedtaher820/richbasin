
<script setup lang="ts">
import { defineComponent, h, ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import {getAllData} from "../stores/getAllData"
import {
  Bars3Icon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,LinkIcon 
} from "@heroicons/vue/24/outline";
import { useApp } from "../stores/app";
import { storeToRefs } from "pinia";
import { GoogleMap, Marker } from 'vue3-google-map'
const {contact} = storeToRefs(getAllData())
const processing = ref(false);

const showEmailSvg = ref(false);

onMounted(async() => {
  if(!contact.value._id?.length){
    processing.value = true
    getAllData().getContact().finally(()=>{
      processing.value = false
    })
  }
});

const mobileMenuOpen = ref(false);
</script>

<template>
  <Teleport to="body">
    <a
      href="https://sso.godaddy.com/v1/login?realm=pass&app=ox&fbclid=IwAR1ymaIRTAxQ4q2EcKCE7bjTVnJv74_swFirYRYPVfGRUjApXsFXDIfsRE4"
      class="btn-up fixed bottom-10 bg-primary py-2 px-4 rounded-sm hover:bg-primary-100 duration-300 cursor-pointer transition-all"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8"
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        >
          <path d="M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5" />
          <path d="m4 9l20 15L44 9" />
        </g>
      </svg>
    </a>
  </Teleport>
  <overlayloader v-if="processing" />

  <div class="bg-white">
    <main>
      <!-- Contact form -->
      <div class="relative isolate bg-gray-900">
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div class="relative px-6 pt-14 lg:static lg:px-8">
            <div
              class="mx-auto max-w-xl pt-24 pb-20 sm:pt-32 lg:mx-0 lg:max-w-lg lg:py-48"
            >
              <div
                class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"
              >
                <svg
                  class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                      width="200"
                      height="200"
                      x="100%"
                      y="-1"
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg
                    x="100%"
                    y="-1"
                    class="overflow-visible fill-gray-800/20"
                  >
                    <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    stroke-width="0"
                    fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                  />
                </svg>
                <svg
                  class="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                  viewBox="0 0 1155 678"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)"
                    fill-opacity=".2"
                    d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z"
                  />
                  <defs>
                    <linearGradient
                      id="0a9a5302-e517-46c6-85f0-d826aa6a313e"
                      x1="1155.49"
                      x2="-78.208"
                      y1="677.823"
                      y2="203.355"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4F46E5" />
                      <stop offset="1" stop-color="#80CAFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h1
                class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Get in touch
              </h1>
              <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <BuildingOffice2Icon
                      class="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>{{contact?.location?.address}}</dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <PhoneIcon
                      class="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a class="hover:text-white" :href="`tel:${contact.phoneNumber1}`"
                      >{{contact.phoneNumber1}}</a
                    >
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <PhoneIcon
                      class="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a class="hover:text-white" :href="`tel:${contact.phoneNumber2}`"
                      >{{contact.phoneNumber2}}</a
                    >
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <EnvelopeIcon
                      class="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a class="hover:text-white" :href="`mailto:${contact.email}`"
                      >{{contact.email}}</a
                    >
                  </dd>
                </div>
                <!-- <a href="https://sso.godaddy.com/v1/login?realm=pass&app=ox&fbclid=IwAR1ymaIRTAxQ4q2EcKCE7bjTVnJv74_swFirYRYPVfGRUjApXsFXDIfsRE4" class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">
                    </span>
                    <LinkIcon
                      class="h-7 w-6 text-white"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                      Login As  Admin
                  </dd>
                </a> -->
              </dl>
            </div>
          </div>
          <div>
            <GoogleMap api-key="AIzaSyCpNs9VoHbAgqcjHqydjeIXW82UHp3b3NM" style="width: 100%; height: 500px" :center="{lat:contact.location?.coordinates[0],lng:contact.location?.coordinates[1]}" :zoom="15" class="mt-36">
              <MarkerCluster>
                <Marker :draggable="true" :options="{ position: {lat:contact.location?.coordinates[0],lng:contact.location?.coordinates[1]} }" />
              </MarkerCluster>
            </GoogleMap>
          </div>
        </div>
      </div>

     
    </main>

    <!-- Footer -->
  </div>
</template>