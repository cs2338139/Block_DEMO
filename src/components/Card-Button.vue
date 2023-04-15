<script setup>
import { ref } from "vue";
const button = ref();
const buttonState = ref(false);

function Click() {
  buttonState.value = !buttonState.value;

  if (buttonState.value) {
    button.value.style.color = "rgb(243,238,229)";
    button.value.style.backgroundColor = "rgb(40,142,62)";
  } else {
    button.value.style.color = null;
    button.value.style.backgroundColor = null;
  }
}
</script>

<template>
  <div class="flex justify-start items-end grow">
    <button class="bg-custom-Secondary-2 w-[8.1875rem] h-[2.5rem] rounded-full text-custom-Primary-1 hover:text-custom-Secondary-2 hover:w-[20rem] hover:bg-custom-Primary-1 transition-all duration-300" @click="Click()" ref="button">LEARN MORE</button>
  </div>
</template>

<style></style>
