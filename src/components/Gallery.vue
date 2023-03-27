<script setup>
import GalleryItem from "./Gallery-Item.vue";
import G11 from "../../public/Image/Gallery/G-1-1.png";
import G12 from "../../public/Image/Gallery/G-1-2.png";
import G21 from "../../public/Image/Gallery/G-2-1.png";
import G22 from "../../public/Image/Gallery/G-2-2.png";
import G23 from "../../public/Image/Gallery/G-2-3.png";
import G31 from "../../public/Image/Gallery/G-3-1.png";
import G32 from "../../public/Image/Gallery/G-3-2.png";
import G41 from "../../public/Image/Gallery/G-4-1.png";
</script>

<template>
  <div class="h-[196.3125rem] w-full py-2 px-20">
    <div class="h-full w-full dev-white relative">
      <div class="text-display-1 right-0 left-0 mx-auto dev-white text-center text-custom-Primary-0 top-[52.5625rem] absolute">Gallery</div>

      <div class="text-heading-3 text-custom-Secondary-2 dev-white absolute left-[3.0625rem] top-[12.625rem]">
        <div>SUMMER</div>
        <div>COLLECTION</div>
      </div>

      <div class="relative top-[12.625rem] grid gap-5 auto-cols-max auto-rows-max place-content-end">
        <div class="dev-red text-heading-3 place-self-end mb-5 text-custom-Secondary-2">SECTION 01</div>
        <GalleryItem class="col-start-1 place-self-end" :img="G11">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2 place-self-end" :img="G12">1997 fhristopher fairbank</GalleryItem>
      </div>

      <div class="relative top-[32.1875rem] grid gap-5 auto-cols-max auto-rows-max place-content-end">
        <div class="col-start-2 dev-red text-heading-3 place-self-end mt-16 mb-5 text-custom-Secondary-2">SECTION 02</div>
        <GalleryItem class="absolute" :img="G21">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2" :img="G22">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-3" :img="G23">1997 fhristopher fairbank</GalleryItem>

        <div class="col-start-1 dev-red text-heading-3 place-self-end mb-5 text-custom-Secondary-2">SECTION 03</div>
        <GalleryItem class="col-start-1" :img="G31">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2" :img="G32">1997 fhristopher fairbank</GalleryItem>

        <div class="col-start-1 dev-red text-heading-3 mt-16 mb-5 text-custom-Secondary-2">SECTION 04</div>
        <GalleryItem class="col-start-1 col-span-3" :img="G41">1997 fhristopher fairbank</GalleryItem>
      </div>

    </div>
  </div>
</template>

<style></style>
