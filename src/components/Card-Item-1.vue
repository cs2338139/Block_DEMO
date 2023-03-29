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
        start: "top 700",
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
    { strokeDashoffset: 700 },
    {
      strokeDashoffset: 0,
      duration: 2,
      ease: "none",
    }
  );

  let ctl_2 = gsap.to(hand.value, {
    scale: "1.5",
    duration: 0.5,
  });

  let ctl_3 = gsap.to(hand.value, {
    rotate: 210,
    duration: 1,
  });

  let ctl_4 = gsap.to(hand.value, {
    y: "+80",
    x: "-80",
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
    <div class="flex flex-col items-start gap-6 dev-red w-[90%] sm:w-[80%]">
      <div class="flex justify-center items-center w-full my-10">
        <svg width="156" height="210" viewBox="0 0 156 210" ref="hand" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref="path"
            class="w-[9.0031rem] sm:w-[10.25rem]"
            d="M95.9869 85C95.9869 85 95.9869 71 95.9869 60M95.9869 60C95.9869 48 95.9869 32 95.9869 20C95.9869 12 102.988 5 110.989 5C118.99 5 125.99 12 125.99 20V105L145.993 132C151.993 140 150.993 150 144.993 158L106.988 199C102.988 203 97.9871 205 91.9864 205C80.9852 205 62.9831 205 45.9812 205C21.9784 205 9.97702 179 5.97656 166V165C5.97656 158 5.97656 96 5.97656 80C5.97656 57 35.98 57 35.98 80C35.98 84 35.98 86 35.98 86C35.98 86 35.98 71 35.98 69C35.98 46 65.9834 46 65.9834 69C65.9834 78 65.9834 86 65.9834 86V60C65.9834 37 95.9869 37 95.9869 60Z"
            stroke="#288E3E"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <!-- <img src="/src/assets/UI/hand.svg" alt="" class="w-[9.0031rem] sm:w-[10.25rem]" /> -->
      </div>
      <div class="grow w-full flex flex-col gap-4 dev-pink">
        <div class="ml-14 w-full dev-yellow sm:ml-0 overflow-hidden">
          <div ref="text">
            <div class="text-heading-1 text-custom-Primary-1 mb-2">Cinquième Élément</div>
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
  stroke-dasharray: 700;
  stroke-dashoffset: 0;
}

.pathAnimation {
  stroke-dasharray: 0;
}
</style>
