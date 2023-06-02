<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>
<template>
  <div>
    <CompBg img="newsBg" title="Career" />
    <div
      class="md:my-24 my-12 md:px-32 px-8 text-center"
    >   
    <h1 class="md:text-4xl text-2xl font-bold text-primary">JOIN OUR TEAM</h1>
    <p class="md:leading-8 md:text-2xl text-base my-4 text-zinc-500">
        Our goal is to attract, nurture and retain talents whose passion and vision align with ours and together make an impact in the industry we operate in.
    </p>
    <div class="w-full px-4 md:pt-16">
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between bg-primary md:px-8 px-4 md:py-4 py-2 text-left text-sm font-medium text-white hover:bg-primary-600 transition-all focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span class="md:text-3xl text-xl">No Vacancy</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-white"
            />
          </DisclosureButton>
        </Disclosure>
      </div>
    </div>
    </div>
  </div>
</template>


<style></style>