<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>
<template>
  <div>
    <CompBg img="newsBg" title="Career" />
    <div
      class="my-24 md:px-32 px-12 text-center"
    >   
    <h1 class="text-4xl font-bold text-primary">JOIN OUR TEAM</h1>
    <p class="leading-8 text-2xl my-4 text-zinc-500">
        Our goal is to attract, nurture and retain talents whose passion and vision align with ours and together make an impact in the industry we operate in.
    </p>
    <div class="w-full px-4 pt-16">
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between bg-primary px-8 py-4 text-left text-sm font-medium text-white hover:bg-primary-600 transition-all focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span class="text-3xl">No Vacancy</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-white"
            />
          </DisclosureButton>
          <!-- <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform  opacity-0"
          enter-to-class="transform opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform  opacity-100"
          leave-to-class="transform  opacity-0"
        >
          <DisclosurePanel class="px-4 pt-4 pb-2 text-1xl bg-primary-600 text-white">
            There Are No Jobs Available
          </DisclosurePanel>
        </transition> -->

        </Disclosure>
      </div>
    </div>
    </div>
  </div>
</template>


<style></style>