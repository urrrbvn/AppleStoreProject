<template>
  <div class="slider">
    <div class="single-item">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :style="{ backgroundColor: slide.color }"
      >
        <div class="content">
          <div class="images-container">
            <div class="image-container">
              <img :src="slide.image" :alt="'Slide ' + (index + 1) + ' image'">
              <div class="image-container-second">
                <img :src="slide.secondaryImage" :alt="'Slide ' + (index + 1) + ' secondary image'">
                <p>{{ slide.content }}</p>
                <CasualButton :title="'подробнее'" :width="160"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="prev-btn" @click="prevSlide"><img src="@/assets/images/sliderVectorLeft.png" alt="Previous"></button>
    <button class="next-btn" @click="nextSlide"><img src="@/assets/images/sliderVector.png" alt="Next"></button>
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
    color: 'lightblue', 
    content: 'от 137 900₽', 
    image: iphoneSlider, 
    secondaryImage: bannerSlide
  },
  { 
    color: 'lightblue', 
    content: 'от 100 900₽', 
    image: iphoneSlider, 
    secondaryImage: bannerSlide
  },
  { 
    color: 'lightblue', 
    content: 'от 237 900₽', 
    image: iphoneSlider, 
    secondaryImage: bannerSlide
  }
]);

const currentSlide = ref(0);

const nextSlide = () => {
  $('.single-item').slick('slickNext');
};

const prevSlide = () => {
  $('.single-item').slick('slickPrev');
};

onMounted(() => {
  if ($('.single-item').length) {
    $('.single-item').slick({
      dots: false, 
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  } else {
    console.error('Slick carousel element not found');
  }
});
</script>



