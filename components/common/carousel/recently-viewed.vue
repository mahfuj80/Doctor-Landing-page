<template>
  <div class="bg-white rounded-sm shadow-lg pl-4 p-2">
    <p class="text-xl md:text-2xl pb-2">Recently Viewed</p>

    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{
        item: 'basis-1/9 ',
        container: 'gap-12',
      }"
      class="rounded-lg overflow-hidden"
      arrows
    >
      <NuxtLink to="#">
        <NuxtImg :src="item.image" class="h-48 w-32 py-4" draggable="false" />
      </NuxtLink>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps<{ items: { id: number; image: string }[] }>();

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>
