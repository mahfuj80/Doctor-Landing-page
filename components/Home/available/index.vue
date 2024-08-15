<script setup lang="ts"></script>

<template>
  <div class="bg-[#13232F] min-h-[533px] flex items-center">
    <div
      class="flex flex-col md:flex-row justify-between container mx-auto bg-[url('/public/available/bg.png')] bg-cover"
    >
      <!-- 1st half -->
      <div class="md:w-1/2 flex flex-col gap-8">
        <p class="font-bold text-gray-500">We are available 24/7</p>
        <p class="text-6xl font-extrabold text-white">
          We Always Ready For A Challenge.
        </p>
        <LazyCommonButton text="Make Appointment" />
      </div>
      <!-- 2nd half -->
      <div
        class="md:w-1/2 flex flex-col gap-8 items-center md:justify-start justify-center"
      >
        <div class="flex md:gap-4 flex-col md:flex-row">
          <h1 class="font-bold text-6xl text-[#8FB569]">1M+</h1>
          <div class="flex items-center text-lg font-medium">
            <UIcon name="i-heroicons-bell-solid" />
            <p>Satisfied Patients</p>
          </div>
        </div>
        <div class="flex md:gap-4 flex-col md:flex-row">
          <h1 class="font-bold text-6xl text-[#8FB569]">100+</h1>
          <div class="flex items-center text-lg font-medium">
            <UIcon name="i-heroicons-bell-solid" />
            <p>Satisfied Patients</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
