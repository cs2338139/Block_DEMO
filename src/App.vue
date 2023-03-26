<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import Loading from "./View/Loading.vue";
import Home from "./View/Home.vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EaselPlugin);

const isLoaded = ref(false);
</script>

<template>
  <Loading @loadEnd="isLoaded = true" v-show="!isLoaded" />
  <Home v-show="isLoaded" />
</template>

<style scoped></style>
