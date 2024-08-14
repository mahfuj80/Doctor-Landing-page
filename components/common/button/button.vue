<script setup>
import { defineProps } from "vue";

// Define the props
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    data-animation="fadeInLeft"
    data-delay=".6s"
    href="/appoinment"
    class="text-white text-[12px] font-medium tracking-[1px] leading-none touch-manipulation transition-[0.3s] whitespace-nowrap relative inline-block text-center no-underline align-middle cursor-pointer select-none shadow-[rgba(225,36,84,0.2)_0px_8px_16px_0px] box-border rounded-full border-[none] hover:shadow-[rgba(125,178,73,0.2)_0px_8px_16px_0px] motion-reduce:transition-none bg-[rgb(225,36,83)] py-4 text-lg w-fit px-8 hover:bg-[#8FB569]"
  >
    <button class="uppercase">
      <span
        class="rounded-full bg-white text-xl font-bold text-black p-4 py-2 mr-6 -ml-4"
        >+</span
      >{{ text }}
    </button>
  </a>
</template>
