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
    class="flex flex-col font-sans min-h-screen w-screen"
    :data-theme="themeStore.theme === themeModes.DARK ? 'dark' : 'light'"
  >
    <TheNavigation />
    <div class="flex flex-col min-h-screen px-16 xl:px-5 2xl:px-32 py-10">
      <router-view></router-view>
    </div>
    <TheFooter />
  </div>
</template>
