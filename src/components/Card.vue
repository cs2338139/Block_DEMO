<script setup>
import CardItem1 from "./Card-Item-1.vue";
import CardItem2 from "./Card-Item-2.vue";
</script>

<template>
  <div class="flex sm:overflow-scroll h-[37.6875rem] gap-[1px] devs-pink bg-custom-Primary-1">
    <CardItem1></CardItem1>
    <CardItem2></CardItem2>
    <CardItem1 class="hidden sm:flex"></CardItem1>
    <CardItem2 class="hidden sm:flex"></CardItem2>
  </div>
</template>

<style></style>
