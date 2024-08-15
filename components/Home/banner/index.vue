<script setup lang="ts">
const addImage = [
  { id: 1, image: "/banner/slider-bg-1.png" },
  { id: 2, image: "/banner/slider-bg-2.png" },
];
</script>

<template>
  <div class="py-4 max-w-[1680px] mx-auto">
    <CommonCarouselAd :items="addImage" />
  </div>
</template>
