<script setup>
import gsap from "gsap";
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

  swiper.value.$el.style.display = "flex";
  document.body.style.overflow = "hidden";
}

const L1 = ref();
const L11 = ref();
const L12 = ref();
const L2 = ref();
const L21 = ref();
const L22 = ref();
const L23 = ref();
const L3 = ref();
const L31 = ref();
const L32 = ref();
const L4 = ref();
const L41 = ref();

onMounted(() => {
  gsap.fromTo(
    L11.value.$el,
    { y: 500 },
    {
      y: 0,
      scrollTrigger: {
        trigger: L1.value,
        start: "center 700",
        end: "+=500",
        scrub: 1,
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    L12.value.$el,
    { y: 800 },
    {
      y: 0,
      scrollTrigger: {
        trigger: L1.value,
        start: "center 700",
        end: "+=800",
        scrub: 1,
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    L21.value.$el,
    { y: 600 },
    {
      y: 0,
      scrollTrigger: {
        trigger: L2.value,
        start: "center 700",
        end: "+=400",
        scrub: 1,
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    L22.value.$el,
    { y: 700 },
    {
      y: 0,
      scrollTrigger: {
        trigger: L2.value,
        start: "center 700",
        end: "+=600",
        scrub: 1,
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    L23.value.$el,
    { y: 800 },
    {
      y: 0,
      scrollTrigger: {
        trigger: L2.value,
        start: "center 700",
        end: "+=800",
        scrub: 1,
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    L31.value.$el,
    { y: 800 },
    {
      y: 0,
      scrollTrigger: {
        trigger: L3.value,
        start: "center 700",
        end: "+=800",
        scrub: 1,
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    L32.value.$el,
    { y: 500 },
    {
      y: 0,
      scrollTrigger: {
        trigger: L3.value,
        start: "center 700",
        end: "+=700",
        scrub: 1,
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    L41.value.$el,
    { y: 500 },
    {
      y: 0,
      scrollTrigger: {
        trigger: L4.value,
        start: "center 700",
        end: "+=500",
        scrub: 1,
        // markers: true,
      },
    }
  );
});


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
      <Button class="col-start-1 col-end-13 row-start-3 place-self-center text-display-1 devs-white text-center text-custom-Primary-0 -mt-10 mb-10 hover:scale-110 duration-300 transition" @click="OpenSwiper">Gallery</Button>

      <div class="col-start-2 col-end-3 place-self-start text-heading-3 text-custom-Secondary-2 devs-white">
        <div>SUMMER</div>
        <div>COLLECTION</div>
      </div>

      <div ref="L1" class="col-start-9 col-end-10 place-self-end sm:mt-5 sm:place-self-start devs-red text-heading-3 mb-5 text-custom-Secondary-2">SECTION 01</div>
      <GalleryItem ref="L11" class="col-start-4 col-end-10 place-self-end sm:place-self-start w-[41.1875rem]" :img="G11">1997 fhristopher fairbank</GalleryItem>
      <GalleryItem ref="L12" class="col-start-10 col-end-13 row-start-2 place-self-end sm:place-self-start w-[20.6875rem] sm:w-auto" @click="OpenSwiper(1)" :img="G12">1997 fhristopher fairbank</GalleryItem>

      <div ref="L2" class="col-start-9 col-end-10 row-start-5 sm:mt-5 devs-red text-heading-3 place-self-end sm:place-self-start text-custom-Secondary-2 mb-5">SECTION 02</div>
      <GalleryItem ref="L21" class="col-start-1 col-end-5 row-start-4 row-end-[12] w-[27.0625rem] place-self-start" :img="G21">1997 fhristopher fairbank</GalleryItem>
      <GalleryItem ref="L22" class="col-start-7 col-end-10 row-start-6 row-end-[12] w-[17.625rem] place-self-end sm:place-self-start" :img="G22">1997 fhristopher fairbank</GalleryItem>
      <GalleryItem ref="L23" class="col-start-10 col-end-13 row-start-6 row-end-[15] w-[20.6875rem]" :img="G23">1997 fhristopher fairbank</GalleryItem>

      <div ref="L3" class="col-start-4 col-end-4 row-start-[18] mb-5 sm:mt-5 devs-red text-heading-3 place-self-end sm:place-self-start text-custom-Secondary-2">SECTION 03</div>
      <GalleryItem ref="L31" class="col-start-4 col-end-7 row-start-[19] w-[21.875rem] place-self-end sm:place-self-start" :img="G31">1997 fhristopher fairbank</GalleryItem>
      <GalleryItem ref="L32" class="col-start-7 col-end-10 row-start-[19] w-[17.625rem] place-self-stretch" :img="G32">1997 fhristopher fairbank</GalleryItem>

      <div ref="L4" class="col-start-4 col-end-4 row-start-[26] mb-5 sm:mt-5 devs-red text-heading-3 text-custom-Secondary-2">SECTION 04</div>
      <GalleryItem ref="L41" class="col-start-4 col-end-13 row-start-[27] w-[63.3125rem]" :img="G41">1997 fhristopher fairbank</GalleryItem>
    </div>
  </div>
  <GallerySwiper class="hidden" ref="swiper" :imgs="galleryImgs"></GallerySwiper>

  <!-- <div class="h-[196.3125rem] sm:h-auto w-full py-2 px-20 sm:px-4">
    <div class="h-full w-full devs-white relative">
      <div class="text-display-1 center devs-white text-center text-custom-Primary-0 top-[52.5625rem] absolute sm:top-[40px]">Gallery</div>

      <div class="text-heading-3 text-custom-Secondary-2 devs-white absolute left-[3.0625rem] sm:left-0 top-[12.625rem]">
        <div>SUMMER</div>
        <div>COLLECTION</div>
      </div>

      <div class="relative top-[12.625rem] grid gap-5 auto-cols-max auto-rows-max place-content-end sm:block">
        <div class="dev-red text-heading-3 place-self-end sm:place-self-start mb-5 text-custom-Secondary-2">SECTION 01</div>
        <GalleryItem class="col-start-1 place-self-end sm:place-self-start w-[41.1875rem]" :img="G11">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2 place-self-end sm:place-self-start w-[25.125rem]" :img="G12">1997 fhristopher fairbank</GalleryItem>
      </div>

      <div class="relative top-[32.1875rem] grid gap-5 auto-cols-max auto-rows-max place-content-end sm:block">
        <div class="col-start-2 devs-red text-heading-3 place-self-end sm:place-self-start mt-16 mb-5 text-custom-Secondary-2">SECTION 02</div>
        <GalleryItem class="absolute w-[27.0625rem]" :img="G21">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2 w-[17.625rem]" :img="G22">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-3 w-[25.125rem]" :img="G23">1997 fhristopher fairbank</GalleryItem>

        <div class="col-start-1 devs-red text-heading-3 place-self-end sm:place-self-start mb-5 text-custom-Secondary-2">SECTION 03</div>
        <GalleryItem class="col-start-1 w-[21.875rem]" :img="G31">1997 fhristopher fairbank</GalleryItem>
        <GalleryItem class="col-start-2 w-[17.625rem]" :img="G32">1997 fhristopher fairbank</GalleryItem>

        <div class="col-start-1 devs-red text-heading-3 mt-16 mb-5 text-custom-Secondary-2">SECTION 04</div>
        <GalleryItem class="col-start-1 col-span-3 w-[63.3125rem]" :img="G41">1997 fhristopher fairbank</GalleryItem>
      </div>
    </div>
  </div> -->
</template>

<style></style>
