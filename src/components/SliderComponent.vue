<template>
  <div class="slider">
    <div class="slider__container">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slider__item"
        :style="{ backgroundColor: slide.color }"
      >
      <div class="slider__info-container">
        <div class="slider__info-main">
          <img :src="slide.image" :alt="'Slide ' + (index + 1) + ' image'">
        </div>
        <div class="slider__image-second">
          <img :src="slide.secondaryImage" :alt="'Slide ' + (index + 1) + ' secondary image'">
          <p>{{ slide.content }}</p>
          <CasualButton :title="'подробнее'" :width="160"/>
        </div>
      </div> 
    </div>
    </div>
    <button class="slider__prev-btn" @click="prevSlide">
      <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L6 14L16 24L14 28L0 14L14 0L16 4Z" fill="#100E0E"/></svg>
    </button>
    <button class="slider__next-btn" @click="nextSlide">
      <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 24L10 14L0 4L2 0L16 14L2 28L0 24Z" fill="#100E0E"/></svg>
    </button>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

import CasualButton from '@/UI/CasualButton.vue';

import iphoneSlider from '@/assets/images/iphoneSlider.png';
import bannerSlide from '@/assets/images/bannerSlide.png';

const slides = ref([
  { 
    color: '#D0EAFC', 
    content: 'от 137 900₽', 
    image: iphoneSlider, 
    secondaryImage: bannerSlide
  },
  { 
    color: '#D0EAFC', 
    content: 'от 100 900₽', 
    image: iphoneSlider, 
    secondaryImage: bannerSlide
  },
  { 
    color: '#D0EAFC', 
    content: 'от 237 900₽', 
    image: iphoneSlider, 
    secondaryImage: bannerSlide
  }
]);

const currentSlide = ref(0);

const nextSlide = () => {
  $('.slider__container').slick('slickNext');
};

const prevSlide = () => {
  $('.slider__container').slick('slickPrev');
};

onMounted(() => {
  if ($('.slider__container').length) {
    $('.slider__container').slick({
      dots: false, 
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  } else {
    console.error('Slick carousel element not found');
  }
});
</script>









