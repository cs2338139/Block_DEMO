<script setup>
import { ref, onMounted } from "vue";
import KV1 from "../../public/Image/KV-1.png";
import KV2 from "../../public/Image/KV-2.png";
import mKV1 from "../../public/Image/m-KV-1.png";
import mKV2 from "../../public/Image/m-KV-2.png";
import gsap from "gsap";

const button = ref();
const buttonIcon = ref();
const buttonState = ref(false);
const buttonRect = ref();
const movie = ref();

function Click() {
  buttonState.value = !buttonState.value;

  if (buttonState.value) {
    buttonIcon.value.style.backgroundColor = "rgb(40, 142, 62)";
    // button.value.style.opacity = "1";
  } else {
    buttonIcon.value.style.backgroundColor = null;
    // buttonIcon.value.style.backgroundColor = "rgb(0, 0, 0)";
    // button.value.style.opacity = "0.3";
  }
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

  gsap.fromTo(
    buttonRect.value,
    { y: 200 },
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
  <div class="dev-yellow h-[64.3125rem] sm:h-[45.9375rem] w-full relative bg-custom-GrayScale-0 z-30">
    <img :src="KV1" class="absolute top-[8.5rem] center ml-4 min-w-[46.625rem] z-0 sm:hidden" />
    <img :src="mKV1" class="absolute top-[6.8rem] left-0 z-0 hidden sm:block" />

    <img :src="KV2" class="absolute top-[0rem] center ml-100 min-w-[31.4375rem] -z-20 sm:hidden" />
    <img :src="mKV2" class="absolute top-[0rem] right-0 -z-20 hidden sm:block" />

    <div class="absolute top-0 -left-10 w-[99.625rem] text-display-0 text-custom-Primary-0 -z-10 sm:hidden">1976--Mazda</div>
    <div class="absolute top-[17rem] -left-10 text-display-0 text-custom-Primary-0 z-0 sm:hidden">RX7s</div>

    <div class="absolute top-0 left-7 w-[19.5rem] text-display-0 text-custom-Primary-0 z-10 hidden sm:block">1976--Mazda RX7s</div>

    <div ref="movie" class="absolute top-[40rem] sm:top-[27.4rem] -right-28 sm:right-6 text-display-0 text-custom-Primary-0 z-10">Movie</div>

    <div ref="buttonRect" class="flex flex-col gap-10 sm:gap-8 top-[43.25rem] sm:top-[32.25rem] left-20 w-[29.625rem] sm:w-[19.5rem] sm:center absolute">
      <div class="text-body-2 text-custom-Secondary-2">Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa.</div>
      <button class="flex gap-6 sm:gap-3 justify-between items-center group self-end sm:self-start transition duration-300" @click="Click()" ref="button">
        <div class="flex items-center justify-center w-16 sm:w-12 h-16 sm:h-12 transition duration-300 border rounded-full border-custom-Secondary-2 bg-custom-GrayScale-0 group-hover:bg-custom-Primary-1" ref="buttonIcon"><img class="w-[1.125rem]" src="/src/assets/UI/arrow.svg" /></div>
        <div class="text-heading-1 text-custom-Secondary-2">View All</div>
      </button>
    </div>
  </div>
</template>

<style></style>
