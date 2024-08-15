<script setup lang="js"></script>

<template>
  <section class="container mx-auto pt-12 pb-8 md:py-24">
    <div
      class="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-between md:w-[90%] md:mx-auto"
    >
      <div>
        <CommonTitle
          title="News"
          subtitle="Get Every Single Updates Here."
          :isCenter="false"
        />
      </div>
      <div><CommonButton text="Our Blog" /></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 py-12 gap-12 px-4 md:px-8">
      <!-- News Card1 -->
      <div
        class="flex flex-col justify-center items-center bg-white gap-6 hover:shadow-lg transition duration-300 px-4 py-8 cursor-pointer shadow-sm border h-fit"
      >
        <img class="w-full" src="/public/news/blog-thumb-1.webp" alt="Image" />
        <div class="w-full flex gap-4">
          <button
            class="text-[#E62154] uppercase text-sm hover:cursor-pointer hover:text-[#8FB569] font-semibold"
          >
            MEDICAL</button
          ><button
            class="text-[#E62154] uppercase text-sm hover:cursor-pointer hover:text-[#8FB569] font-semibold"
          >
            Read More
          </button>
        </div>
        <p
          class="font-bold text-black text-xl hover:cursor-pointer hover:text-[#E62154]"
        >
          incididunt lorem ipsum dolor sit amet, cons adidis dicolo wiran.
        </p>
        <p class="text-sm text-gray-500 tracking-wider font-medium">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo.
        </p>
      </div>
      <!-- News Card2 -->
      <div
        class="flex flex-col justify-center items-center bg-white gap-6 hover:shadow-lg transition duration-300 px-4 py-8 cursor-pointer shadow-sm border h-fit"
      >
        <img class="w-full" src="/public/news/blog-thumb-2.webp" alt="Image" />
        <div class="w-full flex gap-4">
          <button
            class="text-[#E62154] uppercase text-sm hover:cursor-pointer hover:text-[#8FB569] font-semibold"
          >
            MEDICAL</button
          ><button
            class="text-[#E62154] uppercase text-sm hover:cursor-pointer hover:text-[#8FB569] font-semibold"
          >
            Read More
          </button>
        </div>
        <p
          class="font-bold text-black text-xl hover:cursor-pointer hover:text-[#E62154]"
        >
          incididunt lorem ipsum dolor sit amet, cons adidis dicolo wiran.
        </p>
        <p class="text-sm text-gray-500 tracking-wider font-medium">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo.
        </p>
      </div>
      <!-- News Title -->
      <div
        class="flex flex-col justify-center items-center bg-white gap-6 hover:shadow-lg transition duration-300 px-8 py-8 cursor-pointer shadow-sm border"
      >
      <!-- Single News -->
        <div class="border-b-2 pb-4 flex flex-col gap-4 justify-start">
          <p
            class="font-bold text-black text-xl hover:cursor-pointer hover:text-[#E62154]"
          >
            Incididunt lorem ipsum dolor sit amet, cons adidis dicolo wiran.
          </p>
          <div
            class="flex flex-col md:flex-row w-full justify-between md:pr-16"
          >
            <div class="flex items-center gap-2">
              <UIcon name="uil:calender" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                25 August 2023
              </p>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="material-symbols:android-chat" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                22 Comments
              </p>
            </div>
          </div>
        </div>
      <!-- Single News -->
        <div class="border-b-2 pb-4 flex flex-col gap-4 justify-start">
          <p
            class="font-bold text-black text-xl hover:cursor-pointer hover:text-[#E62154]"
          >
            Incididunt lorem ipsum dolor sit amet, cons adidis dicolo wiran.
          </p>
          <div
            class="flex flex-col md:flex-row w-full justify-between md:pr-16"
          >
            <div class="flex items-center gap-2">
              <UIcon name="uil:calender" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                25 August 2023
              </p>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="material-symbols:android-chat" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                22 Comments
              </p>
            </div>
          </div>
        </div>
      <!-- Single News -->
        <div class="border-b-2 pb-4 flex flex-col gap-4 justify-start">
          <p
            class="font-bold text-black text-xl hover:cursor-pointer hover:text-[#E62154]"
          >
            Incididunt lorem ipsum dolor sit amet, cons adidis dicolo wiran.
          </p>
          <div
            class="flex flex-col md:flex-row w-full justify-between md:pr-16"
          >
            <div class="flex items-center gap-2">
              <UIcon name="uil:calender" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                25 August 2023
              </p>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="material-symbols:android-chat" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                22 Comments
              </p>
            </div>
          </div>
        </div>
      <!-- Single News -->
        <div class="border-b-2 pb-4 flex flex-col gap-4 justify-start">
          <p
            class="font-bold text-black text-xl hover:cursor-pointer hover:text-[#E62154]"
          >
            Incididunt lorem ipsum dolor sit amet, cons adidis dicolo wiran.
          </p>
          <div
            class="flex flex-col md:flex-row w-full justify-between md:pr-16"
          >
            <div class="flex items-center gap-2">
              <UIcon name="uil:calender" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                25 August 2023
              </p>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="material-symbols:android-chat" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                22 Comments
              </p>
            </div>
          </div>
        </div>
      <!-- Single News -->
        <div class="border-b-2 pb-4 flex flex-col gap-4 justify-start">
          <p
            class="font-bold text-black text-xl hover:cursor-pointer hover:text-[#E62154]"
          >
            Incididunt lorem ipsum dolor sit amet, cons adidis dicolo wiran.
          </p>
          <div
            class="flex flex-col md:flex-row w-full justify-between md:pr-16"
          >
            <div class="flex items-center gap-2">
              <UIcon name="uil:calender" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                25 August 2023
              </p>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="material-symbols:android-chat" dynamic />
              <p
                class="text-sm text-gray-500 tracking-wider text-center md:text-left font-medium"
              >
                22 Comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
