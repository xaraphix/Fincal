<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { themeModes } from "@/constants/theme";
import { themeStore } from "@/store/ThemeStore";
</script>

<template>
  <div
    class="w-60 h-full flex flex-col shadow-md bg-base-200"
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

    <ul class="menu w-full grow">
      <li>
        <a class="px-8"><router-link to="/sip">SIP</router-link> </a>
      </li>
      <li>
        <a class="px-8"><router-link to="/lumpsum">Lumpsum</router-link> </a>
      </li>
      <li>
        <a class="px-8"><router-link to="/swp">SWP</router-link> </a>
      </li>
      <li>
        <a class="px-8"
          ><router-link to="/mf-returns">MF Returns</router-link>
        </a>
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
  </div>
</template>
1
