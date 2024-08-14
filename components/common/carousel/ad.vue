<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden"
    arrows
  >
    <div
      class="relative flex items-center min-h-[550px] w-full overflow-hidden"
    >
      <NuxtImg
        :src="item.image"
        class="w-full md:h-[90vh] h-full object-cover"
        draggable="false"
      />
      <div
        class="absolute top-0 left-0 md:w-1/2 w-full h-full flex flex-col justify-center p-6 md:ml-32 md:px-12"
      >
        <h5
          data-animation="fadeInUp"
          data-delay=".2s"
          class="leading-[1.2] text-xl text-[#647589] box-border mt-0 mb-[25px] font-semibold"
        >
          We are here for your care.
        </h5>
        <h1
          data-animation="fadeInUp"
          data-delay=".4s"
          class="md:text-[80px] md:tracking-[-2.3px] leading-[1.2] box-border mt-0 mb-[20px] text-[#223645] font-bold text-3xl"
        >
          Best Care &amp; Better Doctor.
        </h1>
        <p
          data-animation="fadeInUp"
          data-delay=".6s"
          class="text-[14px] leading-[26px] text-[rgb(100,117,137)] box-border mt-0 mb-[35px] md:w-[50%] font-medium"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <CommonButton text="Make Appointment" />
          <UIcon
            class="text-7xl text-[#8FB569] hover:text-[#E12454] transition duration-500 cursor-pointer"
            name="material-symbols-light:play-circle"
            dynamic
          />
        </div>
      </div>
    </div>
  </UCarousel>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps<{ items: { id: number; image: string }[] }>();
</script>
