<script setup lang="ts">
import { themeModes } from "./constants/theme";
import "./assets/base.css";
import TheNavigation from "./layout/TheNavigation.vue";
import TheFooter from "./layout/TheFooter.vue";
import { themeStore } from "./store/ThemeStore";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) && darkThemeMq.matches)
) {
  localStorage.setItem("color-theme", "dark");
  themeStore.setTheme(themeModes.DARK);
} else {
  localStorage.setItem("color-theme", "light");
  themeStore.setTheme(themeModes.LIGHT);
}
</script>

<template>
  <div
    class="h-full w-full flex flex-col"
    :data-theme="
      themeStore.theme === themeModes.DARK ? 'aphx-dark' : 'aphx-light'
    "
  >
    <TheNavigation />
    <div class="flex flex-col w-full">
      <router-view></router-view>
      <TheFooter />
    </div>
  </div>
</template>
