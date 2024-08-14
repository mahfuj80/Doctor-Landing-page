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
    class="text-white text-[14px] font-medium tracking-[1px] leading-none uppercase touch-manipulation transition-[0.3s] whitespace-nowrap relative inline-block text-center no-underline align-middle cursor-pointer select-none shadow-[rgba(225,36,84,0.2)_0px_8px_16px_0px] box-border rounded-none border-[none] hover:text-[rgb(143,181,105)] hover:shadow-[rgba(125,178,73,0.2)_0px_8px_16px_0px] motion-reduce:transition-none"
  >
    <button>{{ text }}</button>
  </a>
</template>
