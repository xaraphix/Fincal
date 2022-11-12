<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { themeModes } from "@/constants/theme";
import { themeStore } from "@/store/ThemeStore";
import { computed } from "@vue/reactivity";
import { onMounted, onUnmounted, reactive } from "vue";
import { loadRouteLocation, useRouter } from "vue-router";

const scrollState = reactive({ scrolled: false });
const isAtTop = () => {
  scrollState.scrolled = window.scrollY > 50;
};

const routes = computed(() => useRouter().currentRoute.value);

onMounted(() => window.addEventListener("scroll", isAtTop));
onUnmounted(() => window.removeEventListener("scroll", isAtTop));
</script>

<template>
  <div
    class="navbar sticky top-0 z-[9999] h-12 w-full bg-base-100 py-0 xl:px-5 2xl:mt-16 2xl:px-32"
    :class="scrollState.scrolled ? 'drop-shadow-xl' : ''"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <label tabIndex="{0}" class="btn-ghost btn xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
          class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a
              href="#home"
              class="menu-scroll-link aphx-dark:text-neutral-content rounded aphx-light:text-neutral-focus btn-primary btn border-0 bg-transparent py-0 px-2 hover:bg-opacity-20 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              Calculators
            </a>
          </li>
        </ul>
      </div>
      <router-link to="/">
        <a class="btn-ghost btn px-0 normal-case">
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
      </router-link>
    </div>

    <div class="navbar-end">
      <ul
        class="menu menu-horizontal mr-10 hidden flex-nowrap gap-12 p-0 xl:flex"
      >
        <li>
          <router-link
            to="/calculators"
            class="menu-scroll-link aphx-dark:text-neutral-content rounded aphx-light:text-neutral-focus btn-primary btn border-0 bg-transparent py-0 px-2 hover:bg-opacity-20 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
          >
            Calculators
          </router-link>
        </li>
      </ul>

      <ThemeSwitcher />
    </div>
  </div>
  <div class="mt-16 px-16 xl:px-32 2xl:px-36 py-10 text-sm breadcrumbs">
    {{}}
    <ul>
      <li>
        <router-link to="/">
          <a>HOME</a>
        </router-link>
      </li>

      <li v-for="(p, idx) in routes.path.substring(1).split('/')" :key="idx">
        <router-link
          :to="
            '/' +
            routes.path
              .substring(1)
              .split('/')
              .slice(0, idx + 1)
              .join('/')
          "
        >
          <a>{{ p.toUpperCase() }}</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>
1
