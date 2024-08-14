<template>
  <!-- Body -->
  <div class="bg-white rounded-sm shadow-lg pl-4 px-2 pt-4 pb-12">
    <!-- Title And Button -->
    <!-- {{ items[0] }} -->
    <div class="flex pb-4 justify-between">
      <p class="hidden md:block text-2xl font-medium">{{ title }}</p>
      <p v-if="title" class="md:hidden text-xl font-medium">
        {{ title?.slice(0, 16) }}...
      </p>

      <UButton
        v-if="buttonLink"
        :to="buttonLink"
        label="View All"
        color="white"
        variant="solid"
      >
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </template>
      </UButton>
    </div>

    <!-- Product Carousel -->
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{
        item: 'basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6',
        container: 'gap-2',
      }"
      class="rounded-lg overflow-hidden"
      arrows
    >
      <!-- Product Card -->
      <div class="relative group pb-8 bg-gray-100">
        <div
          class="flex flex-col h-full group relative transition-all duration-1000"
        >
          <NuxtLink :to="item.id" class="flex-grow">
            <div
              class="w-full h-full flex flex-col transition-opacity duration-1000 group-hover:opacity-30"
            >
              <NuxtImg
                :src="item.image"
                class="h-48 w-48 bg-gray-200"
                draggable="false"
              />
              <p class="text-center py-1 px-2 break-words">
                {{ item.productTitle.slice(0, 200) }}..
              </p>

              <!-- Writer Or Brand -->
              <p class="text-gray-500 text-sm text-center">
                {{ item.brand ? item.brand : item.writer }}
              </p>

              <!-- Product Stock -->
              <p
                :class="
                  item.stock
                    ? 'text-green-400 text-sm text-center'
                    : 'text-red-400 text-sm text-center'
                "
              >
                {{ item.stock ? "Product In Stock" : "Out of Stock" }}
              </p>

              <!-- Price -->
              <div class="flex justify-center text-base font-semibold gap-2">
                <p :class="item.offerPrice ? 'line-through' : ''">
                  TK: {{ item?.price }}
                </p>
                <p v-if="item.offerPrice">TK: {{ item?.offerPrice }}</p>
              </div>
            </div>
          </NuxtLink>

          <!-- Offer -->
          <UBadge
            v-if="item.offer"
            class="absolute"
            :ui="{ rounded: 'rounded-full' }"
            >{{ item.offer }}% off</UBadge
          >

          <!-- Add To Cart -->
          <div
            class="w-full h-full absolute hidden group-hover:flex flex-col items-center justify-center"
          >
            <UButton
              to="https://volta.net"
              target="_blank"
              label="Add To Cart"
              size="sm"
              color="primary"
              variant="solid"
            >
              <template #trailing>
                <UIcon
                  name="i-heroicons-arrow-right-20-solid"
                  class="w-5 h-5"
                />
              </template>
            </UButton>
          </div>
        </div>

        <!-- View More Button -->
        <div
          class="absolute w-full hidden group-hover:flex flex-col items-center justify-evenly bottom-0"
        >
          <UButton
            to="https://volta.net"
            target="_blank"
            label="View Details"
            size="sm"
            color="primary"
            block
            variant="outline"
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps<{
  items: {
    id: string;
    preOrder: boolean;
    canRead: boolean;
    productTitle: string;
    image: string;
    offer?: number;
    review: { rating: number; count: number };
    stock: number;
    price: number;
    offerPrice?: number;
    brand?: string;
    writer?: string;
  }[];
  title: string;
  buttonLink: string;
  classList: string;
}>();

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 4000);
});
</script>
