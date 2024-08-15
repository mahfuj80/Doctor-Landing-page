<script setup lang="js">
const teamMembers = [
  {
    id: 1,
    image: "/plans/pricing-thumb-1.png",
    buttonText: "price: $ 489.00",
    specialization: "Founder",
  },
  {
    id: 2,
    image: "/plans/pricing-thumb-2.png",
    buttonText: "price: $ 599.00",
    specialization: "dentist",
  },
  {
    id: 3,
    image: "/plans/pricing-thumb-3.png",
    buttonText: "price: $ 999.00",
    specialization: "neurologist",
  },
  {
    id: 4,
    image: "/plans/pricing-thumb-3.png",
    buttonText: "price: $ 489.00",
    specialization: "Consultant",
  },
  {
    id: 5,
    image: "/plans/pricing-thumb-2.png",
    buttonText: "price: $ 589.00",
    specialization: "dentist",
  },
  {
    id: 6,
    image: "/plans/pricing-thumb-1.png",
    buttonText: "price: $ 120.00",
    specialization: "neurologist",
  },
];

const items = [
  {
    key: "account",
    label: "MONTHLY",
    description:
      "Make changes to your account here. Click save when you're done.",
  },
  {
    key: "password",
    label: "YEARLY",
    description:
      "Change your password here. After saving, you'll be logged out.",
  },
];

const accountForm = reactive({ name: "Benjamin", username: "benjamincanac" });
const passwordForm = reactive({ currentPassword: "", newPassword: "" });

function onSubmit(form) {
  console.log("Submitted form:", form);
}
</script>

<template>
  <section class="bg-[#F4F9FC] py-12 md:pt-12 md:pb-32">
    <section class="container mx-auto md:px-12 px-4">
      <div
        class="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-between md:w-[90%] md:mx-auto"
      >
        <div class="md:w-1/2">
          <CommonTitle
            title="Our Plans"
            subtitle="Pricing & Plans"
            :isCenter="false"
          />
        </div>
        <!-- This Div Is Important -->
        <div></div>
      </div>

      <UTabs
        :items="items"
        :ui="{
          list: {
            base: 'md:w-[314px] md:absolute md:-top-[130px] md:right-[85px] py-4 h-16 ',
            marker: {
              wrapper:
                'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
              base: 'w-full h-full',
              background: 'bg-[#E12453] dark:bg-gray-900',
              rounded: 'rounded-md',
              shadow: 'shadow-sm',
            },
          },
        }"
      >
        <template #item="{ item }">
          <div
            @submit.prevent="
              () =>
                onSubmit(item.key === 'account' ? accountForm : passwordForm)
            "
          >
            <div v-if="item.key === 'account'" class="space-y-3">
              <div class="grid grid-cols-1 md:grid-cols-3 py-12 gap-12">
                <div v-for="item in teamMembers.slice(0, 3)" :key="item.id">
                  <div
                    class="flex flex-col md:items-start w-fit mx-auto justify-center items-center py-8 md:py-16 bg-white gap-8 hover:shadow-lg transition duration-300 md:px-16"
                  >
                    <img :src="item.image" alt="Image" />
                    <p
                      class="font-bold text-black text-3xl hover:cursor-pointer hover:text-[#8FB569]"
                    >
                      {{ item.title }}
                    </p>
                    <p
                      class="text-sm text-gray-600 tracking-wider text-center font-medium md:text-left leading-7"
                    >
                      Ut enim ad minim veniam, quis istomw nostrud exercitation
                      ullamco laboris nisi ut aliquip ex eacommodo.
                    </p>
                    <LazyCommonButton :text="item.buttonText" />
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="item.key === 'password'" class="space-y-3">
              <div class="grid grid-cols-1 md:grid-cols-3 py-12 gap-12">
                <div v-for="item in teamMembers.slice(3, 6)" :key="item.id">
                  <div
                    class="flex flex-col md:items-start w-fit mx-auto justify-center items-center py-8 md:py-16 bg-white gap-8 hover:shadow-lg transition duration-300 md:px-16"
                  >
                    <img :src="item.image" alt="Image" />
                    <p
                      class="font-bold text-black text-3xl hover:cursor-pointer hover:text-[#8FB569]"
                    >
                      {{ item.title }}
                    </p>
                    <p
                      class="text-sm text-gray-600 tracking-wider text-center font-medium md:text-left leading-7"
                    >
                      Ut enim ad minim veniam, quis istomw nostrud exercitation
                      ullamco laboris nisi ut aliquip ex eacommodo.
                    </p>
                    <LazyCommonButton :text="item.buttonText" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </UTabs>
    </section>
  </section>
</template>
