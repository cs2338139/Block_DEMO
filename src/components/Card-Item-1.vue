<script setup>
import CardButton from "./Card-Button.vue";
</script>

<template>
  <div class="bg-custom-GrayScale-0 h-full w-full flex justify-center items-center sm:min-w-[18.5rem]">
    <div class="flex flex-col items-start gap-6 dev-red w-[90%] sm:w-[80%]">
      <div class="flex justify-center items-center w-full my-10">
        <img src="/src/assets/UI/hand.svg" alt="" class="w-[9.0031rem] sm:w-[10.25rem]" />
      </div>
      <div class="grow w-full flex flex-col gap-4 dev-pink">
        <div class="ml-14 w-full dev-yellow sm:ml-0">
          <div class="text-heading-1 text-custom-Primary-1 mb-2">Cinquième Élément</div>
          <div class="text-body-2 text-custom-Primary-1">Its plot occurs<a href="https://en.wikipedia.org/wiki/Nonlinear_narrative" target="_blank"> out of chronological order.</a></div>
        </div>
        <CardButton></CardButton>
      </div>
    </div>
  </div>
</template>

<style></style>
