<script setup>
import CardButton from "./Card-Button.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";

const face = ref();
const isAnimationStart = ref(false);
const text = ref();

onMounted(() => {
  gsap.fromTo(
    text.value,
    { y: 300 },
    {
      y: 0,
      scrollTrigger: {
        trigger: face.value,
        start: "top bottom",
        end: "+=500",
        scrub: 1,
        // markers: true,
      },
    }
  );
});

function Animation() {
  if (isAnimationStart.value) return;
  isAnimationStart.value = true;
  let tl = gsap.timeline({});

  gsap.to(face.value, {
    scale: 1.2,
    duration: 0.5,
    ease: "none",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(face.value.children[3], {
    rotate: 5,
    duration: 0.5,
    ease: "none",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(face.value.children[4], {
    rotate: -5,
    duration: 0.5,
    ease: "none",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(face.value.children[2], {
    rotate: 8,
    duration: 0.5,
    ease: "none",
    repeat: -1,
    yoyo: true,
  });

  // tl.add(ctl_1);
}
</script>

<template>
  <div class="bg-custom-GrayScale-0 h-full w-full flex justify-center items-center sm:min-w-[18.5rem]" @mouseenter="Animation">
    <div class="flex flex-col-reverse items-start gap-6 devs-red w-[90%] sm:w-[80%]">
      <div class="flex justify-center items-center w-full">
        <!-- <svg class="w-[12.5rem] sm:w-[13.625rem]" ref="face" width="210" height="211" viewBox="0 0 210 211" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M149.445 61.0555V83.2778" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M60.5547 61.0555V83.2778" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M104.999 61.0555V116.611L71.666 149.944C71.666 149.944 82.7771 161.056 104.999 161.056C127.222 161.056 138.333 149.944 138.333 149.944" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M49.4444 205.5H27.2222C15 205.5 5 195.5 5 183.278V27.7222C5 15.5 15 5.5 27.2222 5.5H49.4444" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M160.555 205.5H182.777C194.999 205.5 204.999 195.5 204.999 183.278V27.7222C204.999 15.5 194.999 5.5 182.777 5.5H160.555" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg> -->

        <svg width="300" height="250" class="w-[18rem] sm:w-[16rem]" ref="face" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path id="svg_1" stroke-linejoin="round" stroke-linecap="round" stroke-width="10" stroke="#288E3E" d="m194.4455,80.5555l0,22.2223" />
          <path id="svg_2" stroke-linejoin="round" stroke-linecap="round" stroke-width="10" stroke="#288E3E" d="m105.5552,80.5555l0,22.2223" />
          <path id="svg_3" stroke-linejoin="round" stroke-linecap="round" stroke-width="10" stroke="#288E3E" d="m149.9995,80.5555l0,55.5555l-33.333,33.333c0,0 11.1111,11.112 33.333,11.112c22.223,0 33.334,-11.112 33.334,-11.112" />
          <path id="svg_4" stroke-linejoin="round" stroke-linecap="round" stroke-width="10" stroke="#288E3E" d="m94.4449,225l-22.2222,0c-12.2222,0 -22.2222,-10 -22.2222,-22.222l0,-155.5558c0,-12.2222 10,-22.2222 22.2222,-22.2222l22.2222,0" />
          <path id="svg_5" stroke-linejoin="round" stroke-linecap="round" stroke-width="10" stroke="#288E3E" d="m205.5555,225l22.222,0c12.222,0 22.222,-10 22.222,-22.222l0,-155.5558c0,-12.2222 -10,-22.2222 -22.222,-22.2222l-22.222,0" />
        </svg>

        <!-- <img src="/src/assets/UI/face.svg" alt="" class="w-[12.5rem] sm:w-[13.625rem]" /> -->
      </div>
      <div class="grow w-full flex flex-col gap-4 devs-pink">
        <div class="ml-12 sm:ml-0 w-full overflow-hidden">
          <div ref="text">
            <div class="text-heading-1 text-custom-Primary-1 mb-2">Cinquième Élément</div>
            <div class="text-body-2 text-custom-Primary-1">Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.</div>
          </div>
        </div>
        <CardButton></CardButton>
      </div>
    </div>
  </div>
</template>

<style></style>
