<script setup lang="js">
const teamMembers = [
  {
    id: 1,
    image: '/team/member1.png',
    name: 'Rosalina D. Williamson',
    specialization: 'Founder'
  },
  {
    id: 2,
    image: '/team/member2.png',
    name: 'Diconda PIran Will',
    specialization: 'dentist'
  },
  {
    id: 3,
    image: '/team/member3.png',
    name: 'Hulk M. Kenbon',
    specialization: 'neurologist'
  },
  {
    id: 4,
    image: '/team/member4.png',
    name: 'Haliam Z. Dicolaz',
    specialization: 'Consultant'
  },
  {
    id: 5,
    image: '/team/member5.png',
    name: 'Nicolas D. Case',
    specialization: 'dentist'
  },
  {
    id: 6,
    image: '/team/member6.png',
    name: 'Phumdon H. Norman',
    specialization: 'neurologist'
  }
];
</script>

<template>
  <section class="container mx-auto py-12 md:py-24">
    <div
      class="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-between md:w-[90%] md:mx-auto"
    >
      <div>
        <CommonTitle
          title="Our Team"
          subtitle="A Professional & Care Provider"
          :isCenter="false"
        />
      </div>
      <div><CommonButton text="Make Appointment" /></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 py-12 gap-12">
      <div
        class="flex flex-col items-center justify-center gap-4"
        v-for="item in teamMembers"
        :key="item.id"
      >
        <div class="relative">
          <img :src="item.image" alt="Image" />
          <UIcon
            class="absolute right-0 bottom-10 font-bold text-white p-4 rounded-full bg-[#8FB569] hover:bg-[#E1247A] transition duration-300 text-6xl cursor-pointer"
            name="ic:sharp-plus"
            dynamic
          />
        </div>
        <p class="text-2xl font-bold text-gray-900">{{ item.name }}</p>
        <p class="text-md font-bold text-[#E1247A] uppercase">
          {{ item.specialization }}
        </p>
      </div>
    </div>
  </section>
</template>
