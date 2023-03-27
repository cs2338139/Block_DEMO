<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const loadingContent = ref();
const emits = defineEmits(["loadEnd"]);

onMounted(() => {
  gsap.fromTo(
    loadingContent.value,
    { width: "0%" },
    {
      width: "100%",
      delay: 0.5,
      duration: 2,
      onComplete: () => {
        emits("loadEnd");
      },
    }
  );
});

//
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div class="w-[14%] h-[8%] flex flex-col justify-between items-center">
      <div class="text-heading-2 text-custom-Primary-0 text-[50px]">ZOENW</div>
      <div class="w-full h-0.5 bg-custom-GrayScale-1">
        <div class="w-0 h-0.5 bg-custom-Primary-0" ref="loadingContent"></div>
      </div>
    </div>
  </div>
</template>

<style></style>
