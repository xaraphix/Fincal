<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { themeModes } from "@/constants/theme";
import { themeStore } from "@/store/ThemeStore";
import { computed } from "@vue/reactivity";
import { onMounted, onUnmounted } from "vue";

let top = true;
const isAtTop = () => {
  top = window.pageYOffset === 0;
  console.log(top);
};

const navbarClass = computed(() => ({
  "drop-shadow-lg": !top,
}));

onMounted(() => window.addEventListener("scroll", isAtTop));
onUnmounted(() => window.removeEventListener("scroll", isAtTop));
</script>

<template>
  <div
    class="navbar sticky top-0 z-[9999] h-12 w-full bg-base-100 py-0 xl:px-5 2xl:mt-16 2xl:px-32"
    :class="navbarClass"
  >
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="{0}" className="btn-ghost btn xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="{0}"
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a
              href="#home"
              className="menu-scroll-link aphx-dark:text-neutral-content rounded aphx-light:text-neutral-focus btn-primary btn border-0 bg-transparent  py-0 px-2 hover:bg-opacity-20 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              Calculators
            </a>
          </li>
        </ul>
      </div>
      <a className="btn-ghost btn  px-0 normal-case">
        <img
          v-if="themeStore.theme === themeModes.LIGHT"
          :src="'../assets/projects/fincallogo-dark.svg'"
          class="rounded-full w-32"
          alt="Avatar"
        />
        <img
          v-else
          :src="'../assets/projects/fincallogo.svg'"
          class="rounded-full w-32"
          alt="Avatar"
        />
      </a>
    </div>

    <div className="navbar-end px-2 lg:px-10 xl:px-0">
      <ul
        className="menu menu-horizontal mr-10 hidden flex-nowrap gap-12 p-0 xl:flex"
      >
        <li>
          <router-link
            to="/"
            className="menu-scroll-link aphx-dark:text-neutral-content rounded aphx-light:text-neutral-focus btn-primary btn border-0 bg-transparent  py-0 px-2 hover:bg-opacity-20 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
          >
            Calculators
          </router-link>
        </li>
      </ul>

      <div className="mr-10 cursor-pointer">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
  <!-- <div
    class="w-60 h-full flex flex-col shadow-md bg-base-100"
    id="sidenavSecExample"
  >
    <div class="pt-4 pb-2 px-6">
      <a href="#!">
        <div class="flex items-center">
          <div class="shrink-0">
            <img
              v-if="themeStore.theme === themeModes.LIGHT"
              :src="'../assets/projects/fincallogo-dark.svg'"
              class="rounded-full w-32"
              alt="Avatar"
            />
            <img
              v-else
              :src="'../assets/projects/fincallogo.svg'"
              class="rounded-full w-32"
              alt="Avatar"
            />
          </div>
        </div>
      </a>
    </div>

    <ul class="menu w-full grow mt-[5.2rem]">
      <li>
        <router-link to="/sip" class="bg-transparent">
          <a class="px-4">SIP </a></router-link
        >
      </li>
      <li>
        <router-link to="/lumpsum" class="bg-transparent"
          ><a class="px-4">Lumpsum </a></router-link
        >
      </li>
      <li>
        <router-link to="/swp" class="bg-transparent"
          ><a class="px-4">SWP</a></router-link
        >
      </li>
      <li>
        <router-link to="/mf-returns" class="bg-transparent"
          ><a class="px-4">MF Returns </a></router-link
        >
      </li>
    </ul>
    <div class="text-center w-full">
      <hr
        class="m-0 border-neutral-content dark:border-primary-focus border-opacity-50 dark:border-opacity-10 border"
      />
      <div class="flex flex-row">
        <ThemeSwitcher />
        <p class="p-4 mr-10 text-sm text-base-content">suyashsingh.in</p>
      </div>
    </div>
  </div>  -->
</template>
1
