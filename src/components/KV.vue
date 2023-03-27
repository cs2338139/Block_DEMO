<script setup>
import KV1 from "../../public/Image/KV-1.png";
import KV2 from "../../public/Image/KV-2.png";
</script>

<template>
  <div class="dev-yellow h-[57.1875rem] w-full relative">
    <!-- <img :src="KV1" class="absolute top-[8.5rem] left-[21.875rem] opacity-50 w-[46.625rem] h-[32.4375rem] z-0"> -->
    <!-- <img :src="KV1" class="absolute top-[8.5rem] right-80 opacity-50 w-[46.625rem] h-[32.4375rem] z-0"> -->
    <img :src="KV1" class="absolute top-[8.5rem] center ml-4 min-w-[46.625rem] h-[32.4375rem] z-0">
    <!-- <img :src="KV2" class="absolute top-[0rem] left-216 opacity-30 w-[31.4375rem] h-[26.0625rem] -z-20"> -->
    <!-- <img :src="KV2" class="absolute top-[0rem] right-14 opacity-50 w-[31.4375rem] h-[26.0625rem] -z-20"> -->
    <img :src="KV2" class="absolute top-[0rem] center ml-100 min-w-[31.4375rem] h-[26.0625rem] -z-20">
    <div class="absolute top-0 -left-10 w-[99.625rem] text-display-0 text-custom-Primary-0 -z-10">1976--Mazda</div>
    <div class="absolute top-[17rem] -left-10 text-display-0 text-custom-Primary-0 z-0">RX7s</div>
    <div class="absolute top-[40rem] -right-28 text-display-0 text-custom-Primary-0 z-0">Movie</div>

    <div class="absolute top-[43.25rem] left-20 w-[29.625rem] text-body-2 text-custom-Secondary-2">Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa.</div>
    <button class="absolute top-[50rem] left-48 w-[22.125rem] flex justify-between items-center">
      <div class="flex items-center justify-center w-16 h-16 border rounded-full border-custom-Secondary-2 bg-custom-GrayScale-0"><img class="w-[1.125rem]" src="/src/assets/UI/arrow.svg" /></div>
      <div class="text-heading-1 text-custom-Secondary-2">View All</div>
    </button>
  </div>
</template>

<style></style>
