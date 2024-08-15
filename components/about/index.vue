<script setup></script>

<template>
  <section
    class="py-4 space-y-6 px-4 md:flex items-center container mx-auto gap-8 md:h-[720px] my-12 overflow-hidden relative"
  >
    <div class="md:w-1/2">
      <img
        class="w-full h-full object-contain md:px-8"
        src="/about-us/about-img.png"
        alt="about-img-picture"
      />
      <div
        class="absolute inset-0 md:flex justify-center items-center hidden -left-20"
      >
        <img src="/public/about-us/medical-logo.png" alt="Image" />
      </div>
    </div>
    <div class="space-y-6 md:w-1/2">
      <h5 class="text-lg font-bold text-[#647589]">About Us</h5>
      <h1 class="text-3xl text-[#223645] font-extrabold md:text-6xl">
        Short Story About <br class="hidden md:block" />
        MediDove Clinic.
      </h1>
      <p class="leading-7 text-gray-600 md:mr-20 font-medium">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia.
      </p>
      <p class="leading-7 text-gray-600 md:mr-20 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div
        class="flex items-center justify-center md:justify-start gap-4 md:gap-6"
      >
        <img src="/about-us/author-ava.png" alt="" />
        <div>
          <p class="text-lg font-bold md:text-xl">Rosalina D. Williamson</p>
          <p class="text-lg font-bold text-[#E62454] uppercase">founder</p>
        </div>
      </div>
    </div>
  </section>
</template>
