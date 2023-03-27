<script setup>
const props = defineProps({
  img: {
    type: String,
    default: "",
  },
  word: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-col items-start dev-red gap-4">
    <img class="h-auto w-full" :src="img" alt="" />
    <div class="text-custom-Primary-1 tex-body-1"> <slot></slot> </div>

  </div>
</template>

<style></style>
