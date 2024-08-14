<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden"
    arrows
  >
    <div class="relative flex items-center">
      <NuxtImg :src="item.image" class="w-full md:h-[90vh]" draggable="false" />
      <div
        class="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center p-6"
      >
        <h5
          data-animation="fadeInUp"
          data-delay=".2s"
          class="font-medium leading-[1.2] text-xl box-border mt-0 mb-[25px]"
        >
          We are here for your care.
        </h5>
        <h1
          data-animation="fadeInUp"
          data-delay=".4s"
          class="text-[80px] tracking-[-2.3px] font-medium leading-[1.2] box-border mt-0 mb-[20px]"
        >
          Best Care &amp; Better Doctor.
        </h1>
        <p
          data-animation="fadeInUp"
          data-delay=".6s"
          class="text-[14px] font-normal leading-[26px] text-[rgb(100,117,137)] box-border mt-0 mb-[35px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
      </div>
    </div>
  </UCarousel>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps<{ items: { id: number; image: string }[] }>();
</script>
