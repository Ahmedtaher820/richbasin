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
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  UserGroupIcon,
  GlobeAltIcon,
  SpeakerWaveIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
// import i18n from '../../i18n';

const about = [
  { name: 'Leadership', href: '/leadership', icon: UserGroupIcon },
  { name: 'Health Safety And Environment-hse', href: '/health-safety-and-environment-hse', icon: GlobeAltIcon },
  { name: 'Vision', href: '/vision', icon: ChartPieIcon },
  { name: 'Mission', href: '/mission', icon: SpeakerWaveIcon },
  { name: 'Value', href: '/value', icon: CursorArrowRaysIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
]
const nav = [
  {
        path:"/",
        name:'Home',
    },
    {
        path:"/services",
        name:'Services',
    },
    {
        path:"/projects",
        name:'Projects',
    },
    {
        path:"/csr",
        name:'CSR',
    },
    {
        path:"/news",
        name:'News',
    },
    {
        path:"/career",
        name:'Career',
    },
    {
        path:"/contact",
        name:'Contact',
    },  
]
const mobileMenuOpen = ref(false)
</script>

<template>
    <header class="bg-white sticky w-full top-0 left-0 shadow-sm z-50">
        <nav class="mx-auto flex w-full items-center justify-between p-6 lg:px-8" aria-label="Global">
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
              <PopoverButton class="flex items-center gap-x-1 text-1xl focus:outline-none  border-none text-gray-900">
                   About
                  <ChevronDownIcon  class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />

              </PopoverButton>
    
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div class="p-4">
                    <div v-for="item in about" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div class="flex-auto">
                        <router-link :to="{path:item.href}" class="block text-1xl font-semibold text-gray-900">
                          {{item.name}}
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
    
          <router-link v-for="item in nav"  :key="item.name" :to="item.path" class="-mx-3 block rounded-lg p-2 text-base leading-7 text-gray-900 link relative">{{`${item.name}`}}</router-link>
          </PopoverGroup>
        </nav>
        <TransitionRoot as="template" :show="mobileMenuOpen">
          <Dialog as="div" class="relative z-50 lg:hidden" @close="mobileMenuOpen = false">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>
    
            <div class="fixed inset-0 flex">
              <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="absolute right-0 top-0 flex w-16 justify-center pt-5">
                      <button type="button" class="-m-2.5 p-2.5" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close sidebar</span>
                        <XMarkIcon class="h-6 w-6 text-primary" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  <!-- Sidebar component, swap this element with another sidebar if you like -->
                  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
               
                    <Disclosure as="div"  v-slot="{ open }">
                      <DisclosureButton class="flex w-full mt-16 items-center justify-between rounded-lg py-2 text-base  hover:bg-gray-50">
                        About
                        <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                      </DisclosureButton>
                      <DisclosurePanel class="mt-2 space-y-2">
                        <DisclosureButton v-for="item in [...about, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-gray-600 hover:bg-primary-50">{{ item.name }}</DisclosureButton>
                      </DisclosurePanel>
                    </Disclosure>
                    <router-link v-for="item in nav"  :key="item.name" :to="item.path" class=" block rounded-lg py-2 text-1xl font-semibold  leading-7 text-gray-900">
                      <span @click="mobileMenuOpen = false">
                        {{`${item.name}`}}
                      </span> 
                    </router-link>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </TransitionRoot>
        <!-- <Dialog as="div" class="lg:hidden " @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 " />
          <DialogPanel class="fixed inset-y-0 mob-nav left-0 w-full overflow-y-auto bg-white px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-end">
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
             
                </div>
                <div class="py-6">
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog> -->
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