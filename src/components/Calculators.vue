<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";

const routes = computed(() => useRouter().currentRoute.value);

const calculators = [
  {
    name: "SIP",
    desc: "Calculate how much you need to save or how much you will accumulate with your SIP",
    img: "",
    navLink: "/calculators/sip",
  },
  {
    name: "Lumpsum",
    desc: "Calculate returns for lumpsum investments to achieve your financial goals",
    img: "",
    navLink: "/calculators/lumpsum",
  },
  {
    name: "Mutual Fund Returns",
    img: "",
    desc: "Calculate the returns on your mutual fund investments",
    navLink: "/calculators/mf-returns",
  },
  {
    name: "SWP",
    img: "",
    desc: "Calculate your final amount with Systematic Withdrawal Plans (SWP)",
    navLink: "/calculators/swp",
  },
];
</script>

<template>
  <div class="mt-16 mb-16 min-h-min">
    <router-view></router-view>
    <ul
      v-if="routes.path.substring(1).split('/').length == 1"
      class="flex flex-row flex-wrap items-center justify-center gap-5 w-full"
    >
      <li v-for="calc in calculators">
        <router-link :to="calc.navLink">
          <div
            class="card cursor-pointer w-96 bg-base-100 dark:bg-secondary-focus light:bg-opacity-10 dark:bg-opacity-10 hover:bg-primary-focus hover:bg-opacity-25 hover:dark:bg-opacity-70 transition-all ease-in-out duration-300 border-neutral border-opacity-10 border"
          >
            <figure class="px-10 pt-10">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">{{ calc.name }}</h2>
              <p>{{ calc.desc }}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
