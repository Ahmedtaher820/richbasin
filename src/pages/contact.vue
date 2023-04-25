
<script setup lang="ts">
import { defineComponent, h, ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import {
  Bars3Icon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { PROPERTY_TYPES } from "@babel/types";
import { useApp } from "../stores/app";
import { storeToRefs } from "pinia";
const emails = [
  {
    email: "khaled@richbasin",
    password: "01230123",
  },
  {
    email: "mossad@richbasin",
    password: "01230123",
  },
  {
    email: "ahmed@richbasin",
    password: "01230123",
  },
];
const showEmailSvg = ref(false);
const { isAdmin } = storeToRefs(useApp());

onMounted(() => {
    const isAdminStorage = JSON.parse( localStorage.getItem('isAdmin'))
    if(!isAdminStorage && isAdminStorage !== null){
        return
    }
  else if (isAdmin.value) {
    showEmailSvg.value = true
    return;
  } else {
    let admin = confirm("you are admin?");
    if (admin) {
      const email = prompt("Enter your email", "ahmed@example.com");
      const pass = prompt("Enter your password", "");
      let flag = 0;
      console.log(email, pass);
      for (let prop in emails) {
        if (emails[prop].email == email && emails[prop].password == pass) {
          showEmailSvg.value = true;
          console.log(showEmailSvg.value);
          admin = true;
          flag++;
          break;
        }
      }
      if (flag > 0) {
        isAdmin.value = true;
      }
      admin = false;
    }else{
        localStorage.setItem('isAdmin' , JSON.stringify(false))
    }
  }
});

const mobileMenuOpen = ref(false);
</script>

<template>
  <Teleport to="body" v-if="showEmailSvg">
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
              <p class="mt-6 text-lg leading-8 text-gray-300">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <BuildingOffice2Icon
                      class="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
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
                    <a class="hover:text-white" href="tel:+1 (555) 234-5678"
                      >+1 (555) 234-5678</a
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
                    <a class="hover:text-white" href="mailto:info@richbasin.co"
                      >info@richbasin.co</a
                    >
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form action="#" method="POST" class="px-6 lg:px-8 lg:pt-14">
            <div
              class="mx-auto max-w-xl pb-24 pt-20 sm:pb-32 lg:mr-0 lg:max-w-lg lg:py-48"
            >
              <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label
                    for="first-name"
                    class="block text-sm font-semibold leading-6 text-white"
                    >First name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 "
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last-name"
                    class="block text-sm font-semibold leading-6 text-white"
                    >Last name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2    "
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6 text-white"
                    >Email</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2    "
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="phone-number"
                    class="block text-sm font-semibold leading-6 text-white"
                    >Phone number</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autocomplete="tel"
                      class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2    "
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6 text-white"
                    >Message</label
                  >
                  <div class="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2    "
                    />
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-end">
                <button
                  type="submit"
                  class="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Contact details -->
      <!-- <div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Our offices</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
          </div>
          <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <h3 class="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Los Angeles</h3>
              <address class="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
                <p>4556 Brendan Ferry</p>
                <p>Los Angeles, CA 90210</p>
              </address>
            </div>
            <div>
              <h3 class="border-l border-indigo-600 pl-6 font-semibold text-gray-900">New York</h3>
              <address class="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
                <p>886 Walter Streets</p>
                <p>New York, NY 12345</p>
              </address>
            </div>
            <div>
              <h3 class="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Toronto</h3>
              <address class="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>7363 Cynthia Pass</p>
                <p>Toronto, ON N3Y 4H8</p>
              </address>
            </div>
            <div>
              <h3 class="border-l border-indigo-600 pl-6 font-semibold text-gray-900">London</h3>
              <address class="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>114 Cobble Lane</p>
                <p>London N1 2EF</p>
              </address>
            </div>
          </div>
        </div>
   -->
      <!-- Newsletter section -->
      <!-- <div class="mx-auto mt-24 max-w-7xl sm:mt-48 sm:px-6 lg:px-8">
          <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Get notified when we’re launching.</h2>
            <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.</p>
            <form class="mx-auto mt-10 flex max-w-md gap-x-4">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2   focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" />
              <button type="submit" class="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
            </form>
            <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="3096c803-efce-4a18-a601-c2f068f9adf3" width="200" height="200" x="50%" y="-24" patternUnits="userSpaceOnUse">
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-24" class="overflow-visible fill-gray-800/20">
                <path d="M0 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#3096c803-efce-4a18-a601-c2f068f9adf3)" />
            </svg>
            <svg viewBox="0 0 1108 632" aria-hidden="true" class="absolute -top-24 -right-14 -z-10 w-[69.25rem] transform-gpu blur-3xl">
              <path fill="url(#986f4ec8-ca62-4906-a05f-981d15a9baf5)" fill-opacity=".25" d="M235.233 229.055 57.541 310.091.83.615l234.404 228.44L555.251 83.11c-65.036 115.261-134.286 322.756 109.01 230.655C968.382 198.638 1031-19.583 1092.23 172.304c48.98 153.51-34.51 321.107-82.37 385.717L810.952 307.442 648.261 631.576 235.233 229.055Z" />
              <defs>
                <linearGradient id="986f4ec8-ca62-4906-a05f-981d15a9baf5" x1="1220.59" x2="-85.053" y1="198.898" y2="-7.05" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4F46E5" />
                  <stop offset="1" stop-color="#80CAFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div> -->
    </main>

    <!-- Footer -->
  </div>
</template>