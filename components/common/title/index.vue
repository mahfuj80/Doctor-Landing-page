<script setup lang="ts">
import { defineProps } from "vue";

// Define the props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  style: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ subtitle }}</p>
    <img src="/public/section-title/section-title-line.png" alt="Img" />
  </div>
</template>
