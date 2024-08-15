<script setup lang="ts"></script>

<template>
  <div
    class="bg-[#13232F] min-h-[533px] flex items-center bg-[url('/public/availavle/bg.png')] bg-cover w-full h-full bg-no-repeat py-12 md:py-0 px-4"
  >
    <div
      class="flex flex-col md:flex-row gap-8 md:gap-0 justify-between container mx-auto items-center"
    >
      <!-- 1st half -->
      <div class="md:w-1/2 flex flex-col gap-8 items-center md:items-start">
        <p class="font-bold text-gray-500">We are available 24/7</p>
        <p
          class="text-3xl text-center md:text-left md:text-6xl font-extrabold text-white md:leading-[80px]"
        >
          We Always Ready For A Challenge.
        </p>
        <div class="mt-6"><LazyCommonButton text="Make Appointment" /></div>
      </div>
      <!-- 2nd half -->
      <div
        class="md:w-1/2 flex flex-col gap-12 md:pl-32 items-center md:items-start"
      >
        <div class="flex md:gap-16 flex-col md:flex-row items-center gap-4">
          <h1 class="font-bold text-6xl text-[#8FB569] text-ellipsis">1M+</h1>
          <div class="space-y-4">
            <div
              class="flex items-center text-lg font-medium text-white gap-2 justify-center md:justify-start"
            >
              <UIcon name="material-symbols:supervisor-account" dynamic />
              <p>Satisfied Patients</p>
            </div>
            <p
              class="text-sm text-gray-400 font-medium md:pr-12 leading-7 text-center md:text-left"
            >
              adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div class="flex md:gap-10 flex-col md:flex-row items-center gap-4">
          <h1 class="font-bold text-6xl text-[#8FB569]">100+</h1>
          <div class="space-y-4">
            <div
              class="flex items-center text-lg font-medium text-white gap-2 justify-center md:justify-start"
            >
              <UIcon name="lucide:thumbs-up" dynamic />
              <p>Satisfied Patients</p>
            </div>
            <p
              class="text-sm text-gray-400 font-medium md:pr-12 leading-7 text-center md:text-left"
            >
              Consectetur Lorem ipsum dolor sit amet, adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
