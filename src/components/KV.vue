<script setup>
import fakeImage from "../components/fakeImage.vue";
import KV1 from "../../public/Image/KV-1.png";
import KV2 from "../../public/Image/KV-2.png";
</script>

<template>
  <div class="dev-yellow h-[57.1875rem] w-[99.625rem] left-[-2.5625rem] relative">
    <img :src="KV1" class="absolute top-[8.5rem] left-[24.25rem] w-[46.625rem] h-[32.4375rem] z-0">
    <img :src="KV2" class="absolute top-[0rem] left-[56.8125rem] w-[31.4375rem] h-[26.0625rem] -z-20">
    <div class="absolute top-0 left-0 text-display-0 text-custom-Primary-0 -z-10">1976--Mazda</div>
    <div class="absolute top-[17rem] left-0 text-display-0 text-custom-Primary-0 z-0">RX7s</div>
    <div class="absolute top-[40rem] left-[53.625rem] text-display-0 text-custom-Primary-0 z-0">Movie</div>

    <div class="absolute top-[43.25rem] left-[6.875rem] w-[29.625rem] text-body-2 text-custom-Secondary-2">Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa.</div>
    <button class="absolute top-[50rem] left-[13.8125rem] w-[22.125rem] flex justify-between items-center">
      <div class="flex items-center justify-center w-16 h-16 border rounded-full border-custom-Secondary-2 bg-custom-GrayScale-0"><img class="w-[1.125rem]" src="/src/assets/UI/arrow.svg" /></div>
      <div class="text-heading-1 text-custom-Secondary-2">View All</div>
    </button>
  </div>
</template>

<style></style>
