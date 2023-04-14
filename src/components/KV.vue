<script setup>
import { ref, onMounted } from "vue";
import KV1 from "../../public/Image/KV-1.jpeg";
import KV2 from "../../public/Image/KV-2.jpeg";
import gsap from "gsap";

const button = ref();
const buttonIcon = ref();
const buttonRect = ref();
const movie = ref();

const emits = defineEmits(["popupOpen"]);

function Click() {
  // buttonState.value = !buttonState.value;

  // if (buttonState.value) {
  //   buttonIcon.value.style.backgroundColor = "rgb(40, 142, 62)";
  //   // button.value.style.opacity = "1";
  // } else {
  //   buttonIcon.value.style.backgroundColor = null;
  //   // buttonIcon.value.style.backgroundColor = "rgb(0, 0, 0)";
  //   // button.value.style.opacity = "0.3";
  // }
  emits("popupOpen");
}

onMounted(() => {
  gsap.fromTo(
    movie.value,
    { x: -200 },
    {
      x: 0,
      scrollTrigger: {
        trigger: movie.value,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    }
  );

  // console.log(movie.value);

  gsap.fromTo(
    buttonRect.value,
    { y: 100 },
    {
      y: 0,
      scrollTrigger: {
        trigger: buttonRect.value,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    }
  );
});
</script>

<template>
  <div class="devss-yellow h-[64.3125rem] sm:h-[45.9375rem] w-full relative bg-custom-GrayScale-0 z-30">
    <img :src="KV1" class="absolute top-[8.5rem] center ml-4 min-w-[46.625rem] z-0" />
    <!-- <img :src="mKV1" class="absolute top-[6.8rem] left-0 z-0 hidden sm:block" /> -->

    <img :src="KV2" class="absolute top-[0rem] center ml-100 min-w-[31.4375rem] -z-20" />
    <!-- <img :src="mKV2" class="absolute top-[0rem] right-0 -z-20 hidden sm:block" /> -->

    <div class="absolute top-0 -left-10 w-[99.625rem] text-display-0 text-custom-Primary-0 -z-10 sm:hidden">VIBE -400</div>
    <div class="absolute top-[17rem] -left-10 text-display-0 text-custom-Primary-0 z-0 sm:hidden">2023</div>

    <div class="absolute top-0 left-7 w-[19.5rem] text-display-0 text-custom-Primary-0 z-10 hidden sm:block">VIBE -400 2023</div>

    <div ref="movie" class="absolute top-[40rem] sm:top-[27.4rem] -right-28 sm:-right-12 text-display-0 text-custom-Primary-0 z-10">Film</div>

    <div ref="buttonRect" class="flex flex-col gap-10 sm:gap-8 top-[43.25rem] sm:top-[12.5rem] left-20 w-[29.625rem] sm:w-[19.5rem] sm:center absolute">
      <div class="text-body-2 text-custom-Secondary-2">
        VIBE Photo 400 is a color negative film. The film is sold under the “VIBE Photo” brand. However, the film is manufactured by a different company. Japan is indicated as the country of manufacture. This naturally points to Fujifilm as the producer.
      </div>
      <button class="flex gap-6 sm:gap-3 justify-between items-center group self-end sm:self-start transition duration-300" @click="Click()" ref="button">
        <div class="flex items-center justify-center w-16 sm:w-12 h-16 sm:h-12 transition duration-300 border rounded-full border-custom-Secondary-2 bg-custom-GrayScale-0 group-hover:bg-custom-Primary-1" ref="buttonIcon"><img class="w-[1.125rem]" src="/src/assets/UI/arrow.svg" /></div>
        <div class="overflow-hidden h-20">
          <div class="group-hover:-translate-y-[4.5rem] transition duration-300">
            <div class="text-heading-1 text-custom-Secondary-2">View All</div>
            <div class="text-heading-1 text-custom-Secondary-2">View All</div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<style></style>
