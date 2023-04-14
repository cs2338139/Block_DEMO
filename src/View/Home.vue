<script setup>
import { ref, onMounted, watchEffect } from "vue";
import NavBar from "../components/NavBar.vue";
import KV from "../components/KV.vue";
import Story from "../components/Story.vue";
import Card from "../components/Card.vue";
import Banner from "../components/Banner.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import popup from "../components/popup.vue";
import gsap from "gsap";

const popupEnable = ref(false);
const refPopup = ref(false);
const about = ref(false);
const story = ref(false);
const gallery = ref(false);
const contact = ref(false);

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 2);

  watchEffect(() => {
    if (popupEnable.value) {
      document.body.style.overflowY = "hidden";
      refPopup.value.$el.style.display = "flex";
      refPopup.value.popupMoveUp();
      console.log(document.body.style.overflowY);
    } else {
      document.body.style.overflowY = "scroll";
      refPopup.value.$el.style.display = "none";
    }
  });
});

function ScrollTo(value) {
  let target = "";
  switch (value) {
    case "about":
      target = "#about";
      break;
    case "story":
      target = "#story";
      break;
    case "gallery":
      target = "#gallery";
      break;
    case "contact":
      target = "#contact";
      break;
  }

  gsap.to(window, { duration: 0.6, scrollTo: target });

  console.log(value);
}
</script>

<template>
  <div>
    <NavBar @scrollTo="ScrollTo" class="fixed z-40" />
    <popup @popupClose="popupEnable = false" ref="refPopup" class="fixed z-50 hidden" />
    <div class="min-h-screen pt-32 sm:pt-20 overflow-hidden">
      <KV id="about" @popupOpen="popupEnable = true"></KV>
      <Story id="story" class="-z-10"></Story>
      <Card></Card>
      <Banner></Banner>
      <Gallery id="gallery" class="mt-[-2px]"></Gallery>
      <Contact id="contact"></Contact>
      <Footer></Footer>
    </div>
  </div>
</template>

<style></style>
