<script lang="ts" setup>
import { ref } from "vue";
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
} from "@headlessui/vue";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
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
  SpeakerWaveIcon,
  ChevronUpIcon,
  LockClosedIcon
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";
// import i18n from '../../i18n';

const about = [
  { name: "Leadership", href: "/leadership", icon: UserGroupIcon },
  {
    name: "Health Safety And Environment",
    href: "/health-safety-and-environment-hse",
    icon: GlobeAltIcon,
  },
  { name: "Vision", href: "/vision", icon: ChartPieIcon },
  { name: "Mission", href: "/mission", icon: SpeakerWaveIcon },
  { name: "Value", href: "/value", icon: CursorArrowRaysIcon },
  { name: "Privacy", href: "/privacy", icon: LockClosedIcon },
];
const callsToAction = [{ name: "Watch demo", href: "#", icon: PlayCircleIcon }];
const nav = [
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/csr",
    name: "CSR",
  },
  {
    path: "/news",
    name: "News",
  },
  {
    path: "/career",
    name: "Career",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];
const mobileMenuOpen = ref(false);

const list = ref();
const showIcon = ref(true)
const showNavList = () => {
  (list.value as HTMLElement).classList.toggle("active");
  showIcon.value = !showIcon.value
};
const checkAboutNav = ()=>{
  if((list.value as HTMLElement).classList.contains("active")){
  (list.value as HTMLElement).classList.remove("active");
    
  }
}
</script>

<template>
  <header class="bg-white sticky w-full top-0 left-0 shadow-sm z-50">
    <nav
      class="mx-auto flex w-full items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="w-20" src="../../../public/logo.jfif" alt="" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex items-center flex-1 gap-8 justify-end">
        <div class="relative ">
          <div @click="showNavList" class="flex gap-1">
            <span>
              About
            </span>
            <ChevronDownIcon class="w-4" v-if="showIcon"  />
            <ChevronUpIcon class="w-4" v-else />
          </div>
          <div
            class="nav-list absolute z-50 w-96 list text-primary -bottom-80 rounded-lg shadow-inner bg-white "
            ref="list"
          >
            <ul class="flex flex-col overflow-hidden">
              <router-link :to="{ path: item.href }" v-for="item in about" :key="item.name" class="flex items-center gap-2 hover:bg-slate-500 relative hover:text-white transition-all duration-300 pl-6 cursor-pointer">
                <component :is="item.icon" class="w-6 h-6" />
                <span class="block w-full top-3 py-3" @click="showNavList">
                    {{
                    item.name
                  }}
                </span>
              </router-link>
            </ul>
          </div>
        </div>

        <router-link
          v-for="item in nav"
          :key="item.name"
          :to="item.path"
          >
          <span class="-mx-3 block rounded-lg p-2 text-base leading-7 text-gray-900 link relative" @click="checkAboutNav">
            {{ `${item.name}` }}
          </span>
          </router-link
        >
      </div>
    </nav>
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="mobileMenuOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute right-0 top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="mobileMenuOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon
                      class="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
              >
                <Disclosure as="div" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full mt-16 items-center justify-between rounded-lg py-2 text-base hover:bg-gray-50"
                  >
                    About
                    <ChevronDownIcon
                      :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <router-link
                      v-for="item in [...about, ...callsToAction]"
                      :key="item.name"
                      as="a"
                      :to="{path:item.href}"
                      class="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-gray-600 hover:bg-primary-50"
                      ><span  @click="mobileMenuOpen = false">
                        {{ item.name }}
                      </span>
                    </router-link>
                  </DisclosurePanel>
                </Disclosure>

                <router-link
                  v-for="item in nav"
                  :key="item.name"
                  :to="item.path"
                  class="block rounded-lg py-2 text-1xl font-semibold leading-7 text-gray-900"
                >
                  <span @click="mobileMenuOpen = false">
                    {{ `${item.name}` }}
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
.router-link-active {
  @apply relative font-semibold;
}

.link::after {
  content: "";
  @apply absolute bottom-1 left-1/2 w-0  h-0.5 bg-primary transition-all duration-300;
  transform: translateX(-50%);
}
.link:hover::after {
  @apply w-1/2;
}
.mob-nav {
  z-index: 999;
}
.nav-list {
  transform: translateY(10%);
  opacity: 0;
  display: none;

  pointer-events: none;
  transform-style: all 0.5s ease-in-out;
}
.nav-list.active {
  display: block;
  pointer-events: auto;

  animation: fadeLeft .5s ease-in-out both;
}
@keyframes fadeLeft {
  from{
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>