<script setup lang="ts">
import { themeModes } from "@/constants/theme";
import { themeStore } from "@/store/ThemeStore";

const projects = [
  "dawki",
  "bluecco",
  "nftix",
  "tix",
  "luki",
  "fincal",
  "finix",
  "fitr",
  "notix",
  "jambox",
  "habgo",
  "xafku",
  "cridux",
];
</script>

<template>
  <div class="flex flex-col grow">
    <footer
      className="footer mt-32 flex flex-col gap-16 border-t border-neutral-content bg-base-200 p-10 text-base-content xl:flex-row xl:px-5 2xl:mt-16  2xl:px-32"
    >
      <div>
        <span className="footer-title">About the developer</span>
        <a
          target="_blank"
          className="link-hover link"
          href="https://suyashsingh.in"
        >
          Website
        </a>
        <a
          target="_blank"
          href="https://suyashsingh.in/posts"
          className="link-hover link"
        >
          Posts
        </a>
        <a
          target="_blank"
          href="https://twitter.com/_SuyashSingh"
          className="link-hover link"
        >
          Twitter
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/suyashsinghin/"
          className="link-hover link"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          href="https://github.com/xaraphix"
          className="link-hover link"
        >
          Github
        </a>
      </div>
      <div>
        <span className="footer-title">All Projects</span>
        <ul className="flex flex-wrap items-center gap-16">
          <li v-for="project in projects">
            <a
              :href="'https://' + project + '.suyashsingh.in'"
              rel="nofollow noopner"
              target="_blank"
              className="mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]"
            >
              <img
                v-if="themeStore.theme === themeModes.LIGHT"
                :src="'../assets/projects/' + project + 'logo-dark.svg'"
                class="w-32"
                alt="Avatar"
              />
              <img
                v-else
                :src="'../assets/projects/' + project + 'logo.svg'"
                class="w-32"
                alt="Avatar"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
    <footer
      className="footer flex flex-row border-t border-base-300 bg-base-200 px-8 py-4 text-base-content xl:px-5 2xl:px-32 grow h-full"
    >
      <div className="ml-auto mb-auto md:place-self-center">
        <div className="flex items-center justify-center">
          <a href="">
            <LinkedInIcon
              className="mx-2 flex !h-6 !w-6 items-center justify-center text-neutral  hover:text-neutral-focus"
            />
          </a>
          <a href="">
            <GitHubIcon
              className="mx-2 flex !h-6 !w-6 items-center justify-center text-neutral  hover:text-neutral-focus"
            />
          </a>
          <a href="">
            <TwitterIcon
              className="mx-2 flex !h-6 !w-6 items-center justify-center text-neutral hover:text-neutral-focus"
            />
          </a>
        </div>
        <div className="my-1 flex flex-col justify-center md:justify-end">
          <p className="text-xs text-neutral">
            Logos by
            <a
              href="https://tailgrids.com"
              rel="nofollow noopner"
              target="_blank"
              className="text-primary hover:underline"
            >
              Logo.com
            </a>
          </p>
          <p className="text-xs text-neutral">
            Illustrations from
            <a
              href="https://storyset.com"
              rel="nofollow noopner"
              target="_blank"
              className="text-primary hover:underline"
            >
              Storysets
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
