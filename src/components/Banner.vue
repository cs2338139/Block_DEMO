<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

const bar1 = ref();
const bar2 = ref();

onMounted(() => {
  gsap.fromTo(
    bar1.value.children[0],
    { x: "100%" },
    {
      x: "-100%",
      duration: 25,
      repeat: -1,
      ease: "none",
    }
  );
  gsap.fromTo(
    bar1.value.children[1],
    { x: "0%" },
    {
      x: "-200%",
      duration: 25,
      repeat: -1,
      delay: -12.5,
      ease: "none",
    }
  );
  gsap.fromTo(
    bar2.value.children[0],
    { x: "-100%" },
    {
      x: "100%",
      duration: 20,
      repeat: -1,
      ease: "none",
    }
  );
  gsap.fromTo(
    bar2.value.children[1],
    { x: "-200%" },
    {
      x: "0%",
      duration: 20,
      repeat: -1,
      delay: -10,
      ease: "none",
    }
  );
});
</script>

<template>
  <div class="h-[21.625rem] sm:h-[11.5rem] w-full flex flex-col justify-around bg-custom-Secondary-2 text-display-2 text-custom-Secondary-1">
    <div class="min-w-fit whitespace-nowrap h-full flex items-center relative" ref="bar1">
      <div>
        <span>VIBE-400</span>
        <span class="mx-10">/</span>
        <span>ORGANIC</span>
        <span class="mx-10">/</span>
        <span>Film</span>
        <span class="mx-10">/</span>
        <span>PURESSE</span>
        <span class="mx-10">/</span>
        <span>ORGANIC</span>
        <span class="mx-10">/</span>
        <span>TRUE --ROMANCE</span>
        <span class="mx-10">/</span>
      </div>
      <div>
        <span>VIBE-400</span>
        <span class="mx-10">/</span>
        <span>ORGANIC</span>
        <span class="mx-10">/</span>
        <span>Film</span>
        <span class="mx-10">/</span>
        <span>PURESSE</span>
        <span class="mx-10">/</span>
        <span>ORGANIC</span>
        <span class="mx-10">/</span>
        <span>TRUE --ROMANCE</span>
        <span class="mx-10">/</span>
      </div>
    </div>
    <hr class="border-[#131313] opacity-10" />

    <div class="min-w-fit whitespace-nowrap h-full flex items-center relative" ref="bar2">
      <div>
        <span>ORGA-NIC</span>
        <span class="mx-10">/</span>
        <span>PURE</span>
        <span class="mx-10">/</span>
        <span>O RGANIC</span>
        <span class="mx-10">/</span>
        <span>ORGANIC</span>
        <span class="mx-10">/</span>
        <span>PUR E</span>
        <span class="mx-10">/</span>
        <span>JINCHENG</span>
        <span class="mx-10">/</span>
      </div>
      <div>
        <span>ORGA-NIC</span>
        <span class="mx-10">/</span>
        <span>PURE</span>
        <span class="mx-10">/</span>
        <span>O RGANIC</span>
        <span class="mx-10">/</span>
        <span>ORGANIC</span>
        <span class="mx-10">/</span>
        <span>PUR E</span>
        <span class="mx-10">/</span>
        <span>JINCHENG</span>
        <span class="mx-10">/</span>
      </div>
    </div>
  </div>
</template>

<style></style>
