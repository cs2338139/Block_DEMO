<script setup>
import contact from "../../public/Image/Contact.png";
import { ref } from "vue";

const mouse = ref();

function OverImg(event) {
  mouse.value.style.display = "block";

  // mouse.value.style.x = e.clientX;
  // mouse.value.style.y = e.clientY;
  console.log(mouse.value.off);

  mouse.value.style.left = window.event.clientX + "px";
  mouse.value.style.top = window.event.clientX - window.scrollY +"px";
}
function OutImg() {
  mouse.value.style.display = "none";
}
</script>

<template>
  <div class="dev-yellow w-full relative flex flex-col items-center">
    <div class="dev-red ml-16 text-display-1 text-custom-Secondary-2 sm:-ml-10">Contact</div>

    <div class="text-center text-heading-2 text-custom-Primary-0 dev-red whitespace-nowrap my-14">+339 566 789</div>

    <!-- <div class="backdrop-hue-rotate-90 bg-white/30">
      <img :src="contact" class="min-w-[82.875rem] sm:max-h-[276px] sm:min-w-fit sm:mr-28 mb-10" />
    </div> -->
    <div class="bg-contactImg w-[82.875rem] h-[27.8125rem] bg-no-repeat bg-cover sm:mr-28 mb-10 sm:max-h-[17.25rem]" @mousemove="OverImg" @mouseout="OutImg">
      <div class="w-[264px] h-[264px] backdrop-hue-rotate-180 absolute hidden" ref="mouse"></div>
    </div>

    <div class="absolute top-[52.5rem] left-[-2.375rem] mb-10 text-display-1 text-custom-Secondary-2 sm:top-[41.9rem]">ME</div>
    <div class="absolute top-[37.1875rem] right-[-6.25rem] text-display-1 text-custom-Secondary-2 sm:top-[27rem] sm:right-[-2.8rem]">CALL</div>

    <div class="text-center w-[29.625rem] text-body-2 text-custom-Secondary-2 mb-[7.5rem]">
      Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa.
    </div>
  </div>
</template>

<style></style>
