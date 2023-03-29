<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
modules: [EffectCards];

const props = defineProps({
  imgs: [],
});
onMounted(() => {
  CheckVhView();
  let timeoutID = window.setInterval(() => CheckVhView(), 100);
  window.addEventListener("resize", () => {
    CheckVhView();
  });
});

const vh = ref();

function CheckVhView() {
  vh.value = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh.value}px`);
}

const main = ref();
function Close() {
  main.value.style.display = "none";
  document.body.style.overflowY = "scroll";
}
</script>

<template>
  <div class="fixed bottom-0 left-0 z-50 w-screen h-screen bg-black/50 flex justify-center items-center duration-300 transition" ref="main" >
    <div class="dev-white w-1/5 h-full" @click="Close()"></div>
    <swiper :effect="'cards'" :modules="modules" class="w-1/3 dev-white sm:w-1/2 h-1/2">
      <!-- <gallery-swiper-items v-for="img in props.imgs" :img="img"></gallery-swiper-items> -->
      <swiper-slide v-for="img in props.imgs">
        <img :src="img" alt="" />
      </swiper-slide>
    </swiper>
    <div class="dev-white w-1/5 h-full" @click="Close()"></div>
  </div>
</template>

<style>
/* .swiper {
  width: 1/2;
  height: 320px;
} */

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.panel {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
</style>
