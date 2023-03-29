<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import Loading from "./View/Loading.vue";
import Home from "./View/Home.vue";
import { register } from "swiper/element/bundle";

register();

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EaselPlugin);

const isLoaded = ref(false);
function IsLoaded() {
  isLoaded.value = true;
  window.scrollTo(0, 0);
}
</script>

<template>
  <Loading class="z-50 fixed" @loadEnd="IsLoaded" v-show="!isLoaded" />
  <Home />
</template>

<style scoped></style>
