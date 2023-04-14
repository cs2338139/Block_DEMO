<script setup>
import film from "../../public/Image/film.png";
import { gsap } from "gsap";
import { ref, onMounted, watchEffect } from "vue";
const emits = defineEmits(["popupClose"]);

const main = ref();
const panel = ref();
function Click() {
  emits("popupClose");
}

function popupMoveUp() {
  gsap.fromTo(panel.value, { y: '20%' }, { y: 0, duration: 0.5 });

}

defineExpose({ popupMoveUp });
</script>

<template>
  <div ref="main" class="flex h-screen w-screen bg-black/50 justify-center items-center">
    <div ref="panel" class="w-4/5 max-w-xl h-4/5 p-20 relative border-custom-Primary-0 bg-black border">
      <button @click="Click()" class="absolute flex items-center justify-center top-0 group right-0 rounded-full m-6 border border-custom-Primary-0 bg-custom-Primary-0 w-16 2xl:w-12 aspect-square transition duration-300">
        <div class="w-full h-full bg-white rounded-full transition duration-300 group-hover:scale-0"></div>
        <div class="absolute transition duration-300 group-hover:scale-150">
          <svg ref="Button" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="20" y2="20" stroke="black" stroke-width="2" />
            <line x1="0" y1="20" x2="20" y2="0" stroke="black" stroke-width="2" />
          </svg>
        </div>
      </button>
      <div class="p-10"><img :src="film" alt="" /></div>
      <div class="text-white text-justify">
        VIBE Photo 400 is a color negative film. The film is sold under the “VIBE Photo” brand. However, the film is manufactured by a different company. Japan is indicated as the country of manufacture. This naturally points to Fujifilm as the producer. The VIBE 400 is designed for color images.
        The manufacturer specifies the sensitivity with ISO 400. Due to this sensitivity, the film is versatile and therefore makes a good figure in everyday life.
      </div>
    </div>
  </div>
</template>

<style></style>
