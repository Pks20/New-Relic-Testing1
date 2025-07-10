<!-- <template>
    <div>
        <img src="/images/mountain-2025-07-08-1.jpg" class="max-h-36 hover:rotate-45 transition-transform duration-500" alt="mountain">
    </div>
</template> -->
<!-- <template>
  <div style="perspective: 1000px;">
    <img
      src="/images/mountain-2025-07-08-1.jpg"
      class="max-h-36 transition-transform duration-500"
      style="transform-style: preserve-3d;"
      @mouseover="rotate = true"
      @mouseleave="rotate = false"
      :style="rotate ? 'transform: rotateY(45deg);' : 'transform: rotateY(0deg);'"
      alt="mountain"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rotate = ref(false)
</script> -->
<!-- <template>
  <div style="perspective: 1000px;">
    <img
      src="/images/mountain-2025-07-08-1.jpg"
      class="max-h-36 transition-transform duration-500"
      style="transform: rotateY(25deg) rotateZ(30deg); transform-style: preserve-3d;"
      alt="mountain"
    />
  </div>
</template> -->
<template>
  <ClientOnly>
    <swiper-container
      ref="swiperCreativeRef"
      class="min-h-[406px] w-[285px] !bg-white sm:px-2"
      :slides-per-view="1"
      effect="cards"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <swiper-slide
        v-for="slide in CUSTOMER_CARD"
        :key="`slide-card-${slide.tag}`"
        class="overflow-hidden"
      >
        <div class="p-4">
          <img :src="slide.image" class="min-h-[406px]" />
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from "vue";
import customer5 from "@/public/images/mountain-2025-07-08-1.jpg";
import customer1 from "@/public/images/mountain-2025-07-08-1.jpg";
import customer2 from "@/public/images/mountain-2025-07-08-1.jpg";
import customer3 from "@/public/images/mountain-2025-07-08-1.jpg";
import customer4 from "@/public/images/mountain-2025-07-08-1.jpg";

const swiperCreativeRef = ref(null);
useSwiper(swiperCreativeRef, {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
  cardsEffect: {
    perSlideRotate: 3,
  },
});

const CUSTOMER_CARD = [
  {
    image: customer1,
    tag: "Low Credit Score",
    heading: "Challenges in getting credit cards",
    details: [
      "Low credit score leads to bank rejections & high interest rates",
      "Past payment issues damage credit standing",
      "Multiple loans from NBFCs hurt credit history",
      "Hard to secure credit without rebuilding your score ",
    ],
    subHeading: "We are a perfect fit for you",
    details2: [
      "FD-backed card to rebuild credit step by step",
      "Helps improve credit score with responsible use",
      "Simple process to regain financial stability",
    ],
  },
  {
    image: customer2,
    tag: "Self-Employed",
    heading: "Challenges in getting credit cards",
    details: [
      "Banks prefer salaried individuals due to stable income.",
      "Self-employed people may struggle to get loans without proper income proof.",
      "Weak credit history can lower your credit score.",
      "Past payment issues can limit financial support.",
    ],
    subHeading: "We are a perfect fit for you",
    details2: [
      "Assured Card -No Rejections",
      "Past credit history, income not considered",
      "Improved Credit Score with regular payments",
    ],
  },
  {
    image: customer3,
    tag: "18+ Students",
    heading: "Challenges in getting credit cards",
    details: [
      "Lack of income & credit history makes approval difficult ",
      "Higher chances of rejections or higher interest rates ",
      "Difficult to start building a credit history ",
      "Limited access to financial products.",
    ],
    subHeading: "We are a perfect fit for you",
    details2: [
      "Low FD-secured card to build credit early",
      "Manage daily expenses easily",
      "Kickstart your financial journey",
    ],
  },
  {
    image: customer4,
    tag: "Housewives",
    heading: "Challenges in getting credit cards",
    details: [
      "Lack of fromal income proof limits access to credit ",
      "Difficulty getting approved without credit history ",
      "Managing daily expenses without a credit card ",
      "Limited financial independence ",
    ],
    subHeading: "We are a perfect fit for you",
    details2: [
      "FD-backed card, no income proof required ",
      "Builds credit while managing household expenses.",
      "Offers financial flexibility & security ",
    ],
  },
  {
    image: customer5,
    tag: "Young Professionals",
    heading: "Challenges in getting credit cards",
    details: [
      "Lack of steady income or credit history at the start ",
      "Hard to secure credit with no established score ",
      "Difficulty accessing loans or better financial products",
    ],
    subHeading: "We are a perfect fit for you",
    details2: [
      "FD-backed assured card ",
      "Helps build credit early & establish financial credibility ",
      "Flexible FD amount to manage personal finances ",
    ],
  },
];
</script>
