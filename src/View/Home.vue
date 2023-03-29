<script setup>
import { ref, onMounted } from "vue";
import NavBar from "../components/NavBar.vue";
import KV from "../components/KV.vue";
import Story from "../components/Story.vue";
import Card from "../components/Card.vue";
import Banner from "../components/Banner.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <NavBar class="fixed z-50" />
    <div class="min-h-screen devs-pink pt-32 sm:pt-20 overflow-hidden">
      <KV></KV>
      <Story class=" -z-10"></Story>
      <Card></Card>
      <Banner class=""></Banner>
      <Gallery class="mt-[-2px]"></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </div>
</template>

<style></style>
