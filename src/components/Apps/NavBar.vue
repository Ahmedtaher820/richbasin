<script lang="ts" setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import i18n from '../../i18n';

const about = [
  { name: 'leadership', href: '/leadership', icon: ChartPieIcon },
  { name: 'hse', href: '/about/health-safety-and-environment-hse', icon: CursorArrowRaysIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const nav = [
    {
        path:"/services",
        name:'services',
    },
    {
        path:"/project",
        name:'project',
    },
    {
        path:"/csr",
        name:'csr',
    },
    {
        path:"/news",
        name:'news',
    },
    {
        path:"/career",
        name:'career',
    },
    {
        path:"/contact",
        name:'contact',
    },  
]
const mobileMenuOpen = ref(false)
</script>

<template>
    <header class="bg-white sticky w-full top-0 left-0 shadow-sm z-50">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <router-link to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="w-20" src="../../../public/logo.jfif" alt="" />
            </router-link>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <PopoverGroup class="hidden lg:flex lg:gap-x-12">
            <Popover class="relative flex">
              <PopoverButton class="flex items-center gap-x-1 text-sm  border-none text-gray-900">
                  
                  <ChevronDownIcon v-if="i18n.global.locale.value === 'ar'" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ $t('nav.about') }}
                  <ChevronDownIcon v-if="i18n.global.locale.value !== 'ar'" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />

              </PopoverButton>
    
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div class="p-4">
                    <div v-for="item in about" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div class="flex-auto">
                        <router-link :to="{path:item.href}" class="block font-semibold text-gray-900">
                          {{$t(`${item.name}`) }}
                          <span class="absolute inset-0" />
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 ">
                      <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
    
            <router-link v-for="item in nav"  :key="item.name" :to="item.path" class="-mx-3 block rounded-lg p-2 text-sm leading-7 text-gray-900 link relative">{{$t(`nav.${item.name}`)}}</router-link>
          </PopoverGroup>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <language-switcher />
          </div>
        </nav>
        <Dialog as="div" class="lg:hidden " @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 " />
          <DialogPanel class="fixed inset-y-0 mob-nav right-0 w-full overflow-y-auto bg-white px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-end">
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <Disclosure as="div"  v-slot="{ open }">
                    <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 text-base  hover:bg-gray-50">
                      {{ $t('nav.about') }}
                      <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                    </DisclosureButton>
                    <DisclosurePanel class="mt-2 space-y-2">
                      <DisclosureButton v-for="item in [...about, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-gray-600 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                    </DisclosurePanel>
                  </Disclosure>
                  <router-link v-for="item in nav"  :key="item.name" :to="item.path" class=" block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900">{{$t(`nav.${item.name}`)}}</router-link>
                </div>
                <div class="py-6">
                  <language-switcher />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
</template>
<style>
.router-link-active{
  @apply relative font-semibold
}

.link::after{
  content: '';
  @apply absolute bottom-1 left-1/2 w-0  h-0.5 bg-primary transition-all duration-300;
  transform: translateX(-50%);
}
.link:hover::after{
  @apply w-1/2
}
.mob-nav{
  z-index: 999;
}
</style>