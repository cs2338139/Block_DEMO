<script setup>
import fakeImage from "./fakeImage.vue";
import ThreeJs from "./ThreeJs.vue";
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { useWindowSize } from "vue-window-size";
const { width, height } = useWindowSize();

const main = ref();
const story1 = ref();
const story2 = ref();

onMounted(() => {
  if (width.value > 575) {
    gsap.fromTo(
      main.value,
      { marginTop: "-30rem" },
      {
        marginTop: "0rem",
        scrollTrigger: {
          trigger: main.value,
          start: "center center",
          end: "+=500",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      story1.value,
      { marginLeft: "20rem" },
      {
        marginLeft: "-20rem",
        scrollTrigger: {
          trigger: main.value,
          start: "center center",
          end: "+=500",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      story2.value,
      { marginRight: "20rem" },
      {
        marginRight: "-20rem",
        scrollTrigger: {
          trigger: main.value,
          start: "center center",
          end: "+=500",
          scrub: true,
          // markers: true,
        },
      }
    );
  } else {
    gsap.fromTo(
      main.value,
      { marginTop: "-40rem" },
      {
        marginTop: "-4.5625rem",
        scrollTrigger: {
          trigger: main.value,
          start: "center center",
          end: "+=800",
          scrub: 1,
          // markers: true,
          // pin: true,
        },
      }
    );
  }
});
</script>

<template>
  <div ref="main" class="sm:-mb-32 sm:-mt-[4.5625rem] w-full h-[26.0625rem] sm:h-[60rem] flex sm:flex-col justify-between items-center bg-custom-Secondary-0 border-t border-custom-Primary-1">
    <div ref="story1" class="text-display-1 -ml-80 sm:ml-0 text-custom-Primary-1 mb-24">Story</div>
    <ThreeJs class="z-10 devs-white absolute sm:static center overflow-hidden sm:unCenter w-[20rem] h-[20rem]"></ThreeJs>
    <div class="text-custom-Primary-1 flex flex-col items-center text-center w-[29.625rem] sm:w-[19.5rem]">
      <div class="text-heading-2 mb-8 sm:mb-6">Story</div>
      <div class="text-body-2">Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa.</div>
    </div>
    <div ref="story2" class="text-display-1 -mr-80 sm:mr-0 text-custom-Primary-1 mb-24">Story</div>
  </div>
</template>

<style></style>
