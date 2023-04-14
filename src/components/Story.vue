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
        duration: 1,
        scrollTrigger: {
          trigger: main.value,
          start: "bottom 60%",
          // scrub: true,
          // markers: true,
        },
      }
    );
  } else {
    gsap.fromTo(
      main.value,
      { marginTop: "-32rem",marginBottom: "-32rem" },
      {
        marginTop: "-4.5rem",  marginBottom: "-4.5rem",
        duration: 1,
        scrollTrigger: {
          trigger: main.value,
          start: "center 20%",
          // markers: true,
        },
      }
    );
  }
});
</script>

<template>
  <div ref="main" class="sm:-my-[4.5rem] w-full h-[26.0625rem] sm:h-[60rem] flex sm:flex-col justify-between items-center bg-custom-Secondary-0 border-t border-custom-Primary-1">
    <div ref="story1" class="text-display-1 -ml-80 sm:ml-0 text-custom-Primary-1 -mt-80 sm:mt-0">Story</div>
    <ThreeJs class="z-10 absolute sm:static center overflow-hidden sm:unCenter w-[20rem] h-[20rem]"></ThreeJs>
    <div class="text-custom-Primary-1 flex flex-col items-center text-center w-[29.625rem] sm:w-[19.5rem] ">
      <div class="text-heading-2 mb-8 sm:mb-6">Story</div>
      <div class="text-body-2">
        The film is developed in the C-41 photochemical process. The C-41 process is performed by most professional laboratories. Most labs immediately offer the option to have prints made from the photos. Some providers offer as a service on the digitization of the images.
      </div>
    </div>
    <div ref="story2" class="text-display-1 -mr-80 sm:mr-0 text-custom-Primary-1 -mb-32 sm:mb-10">Story</div>
  </div>
</template>

<style></style>
