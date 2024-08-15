<script setup lang="ts">
const data = [
  {
    id: 1,
    image: "/departments/service1.png",
    title: "Body Surgery",
    description: "",
  },
  {
    id: 2,
    image: "/departments/service2.png",
    title: "Dental Care",
    description: "",
  },
  {
    id: 3,
    image: "/departments/service3.png",
    title: "Eye Care",
    description: "",
  },
  {
    id: 4,
    image: "/departments/service4.png",
    title: "Blood Cancer",
    description: "",
  },
  {
    id: 5,
    image: "/departments/service5.png",
    title: "Neurology Surgery",
    description: "",
  },
  {
    id: 6,
    image: "/departments/service6.png",
    title: "Allergic Issue",
    description: "",
  },
];
</script>

<template>
  <section class="bg-[#F4F9FC] py-12 md:pt-12 md:pb-32">
    <div class="container mx-auto px-4">
      <CommonTitle
        title="Departments"
        subtitle="Managed Your Heathcare Services"
        :isCenter="true"
      />

      <!-- Cards -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3 mt-10 md:mt-20">
        <div v-for="item in data" :key="item.id">
          <div
            class="flex flex-col justify-center items-center py-8 md:py-16 bg-white gap-8 hover:shadow-lg transition duration-300"
          >
            <img :src="item.image" alt="Image" />
            <p
              class="font-bold text-black text-3xl hover:cursor-pointer hover:text-[#8FB569]"
            >
              {{ item.title }}
            </p>
            <p
              class="text-sm text-gray-600 tracking-wider w-[90%] text-center font-medium"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <button
              class="text-gray-500 text-sm hover:cursor-pointer hover:text-[#8FB569] font-semibold"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
