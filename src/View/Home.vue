<script setup>
import { ref, onMounted } from "vue";
import NavBar from "../components/NavBar.vue";
import KV from "../components/KV.vue";
import Story from "../components/Story.vue";
import Banner from "../components/Banner.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <NavBar class="fixed z-50" />
    <div class="min-h-screen dev-pink pt-32 overflow-hidden">
      <KV></KV>
      <Story class="mt-32"></Story>
      <Banner class="-mt-24"></Banner>
      <Gallery class="mt-[-2px]"></Gallery>
      <Contact class="mt-10"></Contact>
      <Footer class="-mt-14"></Footer>
    </div>
  </div>
</template>

<style></style>
