<script setup>
import CardButton from "./Card-Button.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";

const path = ref();
const hand = ref();
const isAnimationStart = ref(false);
const text = ref();

onMounted(() => {
  gsap.fromTo(
    text.value,
    { y: 300 },
    {
      y: 0,
      scrollTrigger: {
        trigger: hand.value,
        start: "top 60%",
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

  let ctl_1 = gsap.fromTo(
    path.value,
    { strokeDashoffset: 1900 },
    {
      strokeDashoffset: 0,
      duration: 2,
      ease: "none",
    }
  );

  let ctl_2 = gsap.to(hand.value, {
    scale: "1.2",
    duration: 0.5,
  });

  let ctl_3 = gsap.to(hand.value, {
    rotate: 330,
    duration: 1,
  });

  let ctl_4 = gsap.to(hand.value, {
    y: "-80",
    x: "+80",
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });

  tl.add(ctl_1);
  tl.add(ctl_2);
  tl.add(ctl_3);
  tl.add(ctl_4);
}
</script>

<template>
  <div class="bg-custom-GrayScale-0 h-full w-full flex justify-center items-center sm:min-w-[18.5rem]" @mouseenter="Animation">
    <div class="flex flex-col items-start devs-red w-[90%] sm:w-[80%]">
      <div class="flex justify-center items-center w-full ">
        <!-- <svg width="156" height="210" viewBox="0 0 156 210" ref="hand" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref="path"
            class="w-[9.0031rem] sm:w-[10.25rem]"
            d="M95.9869 85C95.9869 85 95.9869 71 95.9869 60M95.9869 60C95.9869 48 95.9869 32 95.9869 20C95.9869 12 102.988 5 110.989 5C118.99 5 125.99 12 125.99 20V105L145.993 132C151.993 140 150.993 150 144.993 158L106.988 199C102.988 203 97.9871 205 91.9864 205C80.9852 205 62.9831 205 45.9812 205C21.9784 205 9.97702 179 5.97656 166V165C5.97656 158 5.97656 96 5.97656 80C5.97656 57 35.98 57 35.98 80C35.98 84 35.98 86 35.98 86C35.98 86 35.98 71 35.98 69C35.98 46 65.9834 46 65.9834 69C65.9834 78 65.9834 86 65.9834 86V60C65.9834 37 95.9869 37 95.9869 60Z"
            stroke="#288E3E"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg> -->

        <svg xmlns="http://www.w3.org/2000/svg" width="400"  ref="hand" viewBox="0 0 512 512">
          <path class="w-[9.0031rem] sm:w-[10.25rem]"
            d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="10"
            stroke="#288E3E"
            ref="path"
          />
        </svg>

        <!-- <img src="/src/assets/UI/hand.svg" alt="" class="w-[9.0031rem] sm:w-[10.25rem]" /> -->
      </div>
      <div class="grow w-full flex flex-col gap-4 devs-pink ">
        <div class="ml-14 w-full devs-yellow sm:ml-0 overflow-hidden">
          <div ref="text">
            <div class="text-heading-1 text-custom-Primary-1 mb-2">Air-Plane</div>
            <div class="text-body-2 text-custom-Primary-1">Its plot occurs<a href="https://en.wikipedia.org/wiki/Nonlinear_narrative" target="_blank"> out of chronological order.</a></div>
          </div>
        </div>
        <CardButton></CardButton>
      </div>
    </div>
  </div>
</template>

<style>
path {
  stroke-dasharray:1900;
  stroke-dashoffset: 0;
}

.pathAnimation {
  stroke-dasharray: 0;
}
</style>
