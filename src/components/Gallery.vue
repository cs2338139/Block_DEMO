<script setup>
import { ref, onMounted } from "vue";
import GalleryItem from "./Gallery-Item.vue";
import GallerySwiper from "./Gallery-Swiper.vue";
import G11 from "../../public/Image/Gallery/G-1-1.png";
import G12 from "../../public/Image/Gallery/G-1-2.png";
import G21 from "../../public/Image/Gallery/G-2-1.png";
import G22 from "../../public/Image/Gallery/G-2-2.png";
import G23 from "../../public/Image/Gallery/G-2-3.png";
import G31 from "../../public/Image/Gallery/G-3-1.png";
import G32 from "../../public/Image/Gallery/G-3-2.png";
import G41 from "../../public/Image/Gallery/G-4-1.png";

const galleryImgs = ref([G11, G12, G21, G22, G23, G31, G32, G41]);
// const _galleryImages = ref([]);
const swiper = ref();

function OpenSwiper() {
  // _galleryImages.value = [];
  // for (let i = index; i < galleryImgs.value.length - 1; i++) {
  //   _galleryImages.value.push(galleryImgs.value[i]);
  // }

  // for (let i = 0; i < index+1; i++) {
  //   _galleryImages.value.push(galleryImgs.value[i]);
  // }

  // console.log(_galleryImages.value);

  swiper.value.$el.style.display = "block";
  document.body.style.overflow = "hidden";
}
</script>

<!-- <script>
import gql from 'graphql-tag'

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`query {
      hello
    }`,
  },
}
</script> -->

<template>
  <div class="w-full py-24 px-14 sm:px-4">
    <div class="h-full w-full grid grid-flow-dense gap-3 sm:flex sm:flex-col">
      <Button class="col-start-1 col-end-13 row-start-3 place-self-center text-display-1 dev-white text-center text-custom-Primary-0 -mt-10 mb-10 hover:scale-110 duration-300 transition" @click="OpenSwiper">Gallery</Button>

      <div class="col-start-2 col-end-3 place-self-start text-heading-3 text-custom-Secondary-2 dev-white">
        <div>SUMMER</div>
        <div>COLLECTION</div>
      </div>

      <div class="col-start-9 col-end-10 place-self-end sm:mt-5 sm:place-self-start dev-red text-heading-3 mb-5 text-custom-Secondary-2">SECTION 01</div>
      <GalleryItem class="col-start-4 col-end-10 place-self-end sm:place-self-start w-[41.1875rem]" :img="G11">1997 fhristopher fairbank</GalleryItem>
      <GalleryItem class="col-start-10 col-end-13 row-start-2 place-self-end sm:place-self-start w-[20.6875rem] sm:w-auto" @click="OpenSwiper(1)" :img="G12">1997 fhristopher fairbank</GalleryItem>

      <div class="col-start-9 col-end-10 row-start-5 sm:mt-5 dev-red text-heading-3 place-self-end sm:place-self-start text-custom-Secondary-2 mb-5">SECTION 02</div>
      <GalleryItem class="col-start-1 col-end-5 row-start-4 row-end-[12] w-[27.0625rem] place-self-start" :img="G21">1997 fhristopher fairbank</GalleryItem>
      <GalleryItem class="col-start-7 col-end-10 row-start-6 row-end-[12] w-[17.625rem] place-self-end sm:place-self-start" :img="G22">1997 fhristopher fairbank</GalleryItem>
      <GalleryItem class="col-start-10 col-end-13 row-start-6 row-end-[15] w-[20.6875rem]" :img="G23">1997 fhristopher fairbank</GalleryItem>

      <div class="col-start-4 col-end-4 row-start-[18] mb-5 sm:mt-5 dev-red text-heading-3 place-self-end sm:place-self-start text-custom-Secondary-2">SECTION 03</div>
      <GalleryItem class="col-start-4 col-end-7 row-start-[19] w-[21.875rem] place-self-end sm:place-self-start" :img="G31">1997 fhristopher fairbank</GalleryItem>
      <GalleryItem class="col-start-7 col-end-10 row-start-[19] w-[17.625rem] place-self-stretch" :img="G32">1997 fhristopher fairbank</GalleryItem>

      <div class="col-start-4 col-end-4 row-start-[26] mb-5 sm:mt-5 dev-red text-heading-3 text-custom-Secondary-2">SECTION 04</div>
      <GalleryItem class="col-start-4 col-end-13 row-start-[27] w-[63.3125rem]" :img="G41">1997 fhristopher fairbank</GalleryItem>
    </div>
  </div>
  <GallerySwiper class="hidden" ref="swiper" :imgs="galleryImgs"></GallerySwiper>

  <!-- <div class="h-[196.3125rem] sm:h-auto w-full py-2 px-20 sm:px-4">
    <div class="h-full w-full dev-white relative">
      <div class="text-display-1 center dev-white text-center text-custom-Primary-0 top-[52.5625rem] absolute sm:top-[40px]">Gallery</div>

      <div class="text-heading-3 text-custom-Secondary-2 dev-white absolute left-[3.0625rem] sm:left-0 top-[12.625rem]">
        <div>SUMMER</div>
        <div>COLLECTION</div>
      </div>

      <div class="relative top-[12.625rem] grid gap-5 auto-cols-max auto-rows-max place-content-end sm:block">
        <div class="dev-red text-heading-3 place-self-end sm:place-self-start mb-5 text-custom-Secondary-2">SECTION 01</div>
        <GalleryItem class="col-start-1 place-self-end sm:place-self-start w-[41.1875rem]" :img="G11">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2 place-self-end sm:place-self-start w-[25.125rem]" :img="G12">1997 fhristopher fairbank</GalleryItem>
      </div>

      <div class="relative top-[32.1875rem] grid gap-5 auto-cols-max auto-rows-max place-content-end sm:block">
        <div class="col-start-2 dev-red text-heading-3 place-self-end sm:place-self-start mt-16 mb-5 text-custom-Secondary-2">SECTION 02</div>
        <GalleryItem class="absolute w-[27.0625rem]" :img="G21">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2 w-[17.625rem]" :img="G22">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-3 w-[25.125rem]" :img="G23">1997 fhristopher fairbank</GalleryItem>

        <div class="col-start-1 dev-red text-heading-3 place-self-end sm:place-self-start mb-5 text-custom-Secondary-2">SECTION 03</div>
        <GalleryItem class="col-start-1 w-[21.875rem]" :img="G31">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2 w-[17.625rem]" :img="G32">1997 fhristopher fairbank</GalleryItem>

        <div class="col-start-1 dev-red text-heading-3 mt-16 mb-5 text-custom-Secondary-2">SECTION 04</div>
        <GalleryItem class="col-start-1 col-span-3 w-[63.3125rem]" :img="G41">1997 fhristopher fairbank</GalleryItem>
      </div>
    </div>
  </div> -->
</template>

<style></style>
