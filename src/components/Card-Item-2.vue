<script setup>
import CardButton from './Card-Button.vue';
</script>

<template>
  <div class="bg-custom-GrayScale-0 h-full w-full flex justify-center items-center sm:min-w-[18.5rem]">
    <div class="flex flex-col-reverse items-start gap-6 dev-red w-[90%] sm:w-[80%]">
      <div class="flex justify-center items-center w-full">
        <img src="/src/assets/UI/face.svg" alt="" class="w-[12.5rem] sm:w-[13.625rem]" />
      </div>
      <div class="grow w-full flex flex-col gap-4 dev-pink">
        <div class="ml-12 sm:ml-0 w-full">
          <div class="text-heading-1 text-custom-Primary-1 mb-2">Cinquième Élément</div>
          <div class="text-body-2 text-custom-Primary-1">Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.</div>
        </div>
        <CardButton></CardButton>
      </div>
    </div>
  </div>
</template>

<style></style>
