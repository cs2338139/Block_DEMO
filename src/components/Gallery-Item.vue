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
    <div class="sm:w-[323px] sm:h-[357px] w-full  dev-white overflow-hidden flex justify-center items-center">
      <img class="h-auto w-full sm:h-auto sm:w-auto max-w-none hover:scale-110" :src="img" alt="" />
    </div>
    <div class="text-custom-Primary-1 tex-body-1"><slot></slot></div>
  </div>
</template>

<style></style>
