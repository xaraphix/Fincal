<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
</script>

<template>
  <div
    class="w-60 h-full shadow-md bg-base-200 absolute"
    id="sidenavSecExample"
  >
    <div class="pt-4 pb-2 px-6">
      <a href="#!">
        <div class="flex items-center">
          <div class="shrink-0">
            <img
              src="../assets/fincallogo-dark.svg"
              class="rounded-full w-32"
              alt="Avatar"
            />
          </div>
        </div>
      </a>
    </div>

    <ul class="menu w-full">
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
    <div class="text-center bottom-0 absolute w-full">
      <hr class="m-0" />
      <ThemeSwitcher />
      <p class="py-2 text-sm text-gray-700">suyashsingh.in</p>
    </div>
  </div>
</template>
1
