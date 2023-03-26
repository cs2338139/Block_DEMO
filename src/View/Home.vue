<script setup>
import { ref, onMounted } from "vue";
import NavBar from "../components/NavBar.vue";
import KV from "../components/KV.vue";
</script>

<template>
  <div>
    <NavBar class="fixed" />
    <div class="pt-24">
      <KV></KV>
    </div>
  </div>
</template>

<style></style>
