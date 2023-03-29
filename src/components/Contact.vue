<script setup>
// import contact from "../../public/Image/Contact.png";
import { ref, onMounted } from "vue";
import gsap from "gsap";

const mouse = ref();
const target = ref();
const contact = ref();
// let mouseSize;

// onMounted(() => {
//   setTimeout(() => {
//     mouseSize = mouse.value.offsetWidth;
//     console.log(mouseSize);
//   }, "5000");
// });

function OverImg(event) {
  mouse.value.style.display = "block";

  const bnd = target.value.getBoundingClientRect();

  const localX = event.pageX - bnd.left;
  const localY = event.pageY - bnd.top - window.scrollY;

  let mouseSize = mouse.value.offsetWidth;
  mouse.value.style.left = localX + "px";
  mouse.value.style.top = localY + mouseSize + "px";
}
function OutImg() {
  mouse.value.style.display = "none";
}

onMounted(() => {
  gsap.fromTo(
    target.value,
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: target.value,
        start: "top 700",
        end: "+=800",
        scrub: 1,
        // markers: true,
      },
    }
  );
});
</script>

<template>
  <div class="dev-yellow w-full relative flex flex-col items-center">
    <div class="dev-red ml-16 text-display-1 text-custom-Secondary-2 sm:-ml-10" ref="contact">Contact</div>

    <div class="text-center text-heading-2 text-custom-Primary-0 dev-red whitespace-nowrap my-14">+339 566 789</div>

    <!-- <div class="backdrop-hue-rotate-90 bg-white/30">
      <img :src="contact" class="min-w-[82.875rem] sm:max-h-[276px] sm:min-w-fit sm:mr-28 mb-10" />
    </div> -->
      <div class="bg-contactImg w-[82.875rem] h-[27.8125rem] bg-no-repeat bg-cover sm:mr-28 mb-10 sm:max-h-[17.25rem]" @mousemove="OverImg" ref="target" @mouseleave="OutImg">
        <div class="w-[16.5rem] h-[16.5rem] backdrop-invert absolute hidden rounded-full" ref="mouse"></div>
      </div>

    <div class="absolute top-[52.5rem] left-[-2.375rem] mb-10 text-display-1 text-custom-Secondary-2 pointer-events-none none sm:top-[41.9rem]">ME</div>
    <div class="absolute top-[37.1875rem] right-[-6.25rem] text-display-1 text-custom-Secondary-2 pointer-events-none sm:top-[27rem] sm:right-[-2.8rem]">CALL</div>

    <div class="text-center w-[29.625rem] text-body-2 text-custom-Secondary-2 mb-[7.5rem]">
      Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa.
    </div>
  </div>
</template>

<style></style>
