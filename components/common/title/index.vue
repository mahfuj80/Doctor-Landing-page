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
  isCenter: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="[isCenter ? 'w-fit mx-auto md:w-[55%]' : 'md:w-[70%]']">
    <div :class="['flex ', isCenter ? 'items-center justify-center' : '']">
      <div
        :class="[
          'bg-[url(/public/section-title/section-title-bg.png)] bg-contain bg-no-repeat pt-10',
          isCenter ? 'bg-center' : 'md:bg-left bg-center',
        ]"
      >
        <p
          :class="[
            'font-bold text-[#647589] text-lg pb-4 text-center ',
            isCenter ? 'text-center' : 'text-center md:text-left',
          ]"
        >
          {{ title }}
        </p>
        <p
          :class="[
            'md:text-6xl text-3xl font-extrabold text-[#223645] md:leading-[80px]',
            isCenter ? 'text-center' : 'text-center md:text-left',
          ]"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>
    <img
      :class="[
        'mt-4 md:mt-8',
        isCenter ? 'w-fit mx-auto' : 'w-fit mx-auto md:ml-0',
      ]"
      src="/public/section-title/section-title-line.png"
      alt="Img"
    />
  </div>
</template>
