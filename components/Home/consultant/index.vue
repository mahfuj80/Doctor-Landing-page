<script setup lang="ts"></script>

<template>
  <div
    class="relative min-h-[538px] flex items-center bg-[url('/public/consultant/slider-bg-1.jpg')] bg-cover w-full h-full bg-no-repeat"
  >
    <div class="absolute w-full h-full bg-[#13232F] opacity-90"></div>
    <div
      class="container mx-auto flex flex-col justify-center items-center z-10"
    >
      <!-- 1st half -->
      <div class="flex flex-col gap-8 items-center justify-center">
        <p class="font-bold text-gray-500">
          Stay healthy & strong to enjoy life
        </p>
        <p
          class="text-3xl text-center md:text-6xl font-extrabold text-white md:leading-[80px] md:w-[80%]"
        >
          Trust Us To Be There To Help All & Make Things Well Again.
        </p>
        <div class="mt-6"><LazyCommonButton text="get a consultant" /></div>
      </div>
    </div>
  </div>
</template>
